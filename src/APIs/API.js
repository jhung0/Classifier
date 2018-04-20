import store from "../index"
import * as tf from '@tensorflow/tfjs';
import * as model from './model';
import * as data from "../training/dataset"

const getImData  = ()  => {
  if(store == null){
    return null
  }
  else{
    let images = Object.values(store.getState().images)
    const imgTags = images.map(image => {
      var img = new Image();
      img.src = image.src; 
      img.id = image.id;
      img.catId = image.category
      return img;
    });
    return imgTags;
  }
  return;
}

const trainOnRun = (imgData) => {

  console.log("Hello world")
  
  const imgs = getImData();

  const num_features = 224*224*3;
  var X = 0;
  var y = tf.buffer([imgs.length]);
  var i;
  for (i = 0; i < imgs.length; i++) {
    var temp_Xi = tf.fromPixels(imgs[i])
    var temp_yi = imgs[i].catId

    temp_Xi = tf.image.resizeBilinear(temp_Xi, [224, 224])

    if (X == 0)
      X = temp_Xi;
    else
      X = tf.stack([X, temp_Xi]);

    y.set(i, temp_yi);
  }
  y = y.toTensor();
  y = y.asType('float32');

  X = X.reshape([imgs.length, num_features]).asType('float32')

  console.log(X.shape)  
  console.log(y.shape)

  model.logreg_train(X, y, num_features, 2, 1, 0.5, 10);

  return null
} 

export {getImData, trainOnRun};
