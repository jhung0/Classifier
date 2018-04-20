import store from "../index"

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
      return imgTags
    });
  }
  return 
}


export {getImData};
