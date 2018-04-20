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
<<<<<<< HEAD
      return img;
    });
    return imgTags;
  }
  return;
=======
      return img
    });
    return imgTags

  }
>>>>>>> 657287b127c95f9abca51d4cd0997b11032c153d
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
