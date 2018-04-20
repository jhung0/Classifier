import store from "../index"
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
  //var imgArray= getImData();
  //for (var i of imgArray){
    //console.log(i);
    //console.log(i.id, " : ", i.catId);
  //}
  var dataset = new data.Dataset();

  dataset.loadFromArray(getImData());

  return null
} 


export {getImData, trainOnRun};
