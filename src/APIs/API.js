import store from "../index"


const getImData  = ()  => {
  if(store == null){
    return null
  }
  else{
    return store.getState().images
  }
}


export {getImData};
