import Constants from "../components/Constants.js";
import hash from 'string-hash'

const initalState = {
  images: {},
  categories: [
    {
      id: 0,
      name: "New category",
      imgHashes: [],
      color: "#FF4081"
    }
  ],
  noAddedCats: 0,
  catColors: [...Constants.CATEGORY_COLORS]
};

const reducer = (state = initalState, action) => {
  
  let categoriesCopy = null
  let imageCopy = null
  let colorCopy = null
  
  switch (action.type) {
    
    case "ADD_CATEGORY":
      categoriesCopy = [...state.categories];
      const noCats = state.noAddedCats + 1;
      const new_unique_id = noCats;
      const newCat = {
        id: new_unique_id,
        name: "New category",
        imgHashes: [],
        color: state.catColors[noCats]
      };
      categoriesCopy.push(newCat);
      return { ...state, categories: categoriesCopy, noAddedCats: noCats };

    case "CHANGE_CAT_NAME":
      categoriesCopy = [...state.categories];
      for (let i in categoriesCopy) {
        if (categoriesCopy[i].id.toString() === action.id) {
          categoriesCopy[i].name = action.name;
          return { ...state, categories: categoriesCopy };
        }
      }
      break

    case "DELETE_CAT":
      categoriesCopy = [...state.categories];
      imageCopy = {...state.images};
      let i = 0, j = 0 ;

      for (i ; i < categoriesCopy.length; i++) { 
        let category = categoriesCopy[i];
        if (category.id.toString() === action.id) {
           colorCopy = [...state.catColors]
           colorCopy.push(category.color)

          if(category.imgHashes.length !== 0){
            for (j = 0; j < category.imgHashes.length; j++) { 
              let imId = category.imgHashes[j]
              imageCopy[imId].color = "#FFFFFF"
              imageCopy[imId].category = null

            }
          }
          categoriesCopy.splice(i, 1);
          return { ...state, categories: categoriesCopy, images: imageCopy, catColors: colorCopy};
        }      
      }
      break
      
      

    case "UPLOAD_IMAGE":
      imageCopy = {...state.images};
      const id = hash(action.imInfo.src)
      imageCopy[id] = {...action.imInfo, accuracy: null, category: null, color: "FFFFFF"}
      return { ...state, images: imageCopy};

    case "IM_DROPPED":
      categoriesCopy = [...state.categories];
      for (let i in state.categories) {
        if (categoriesCopy[i].id === action.dropInfo.catId) {
          imageCopy = {...state.images};
          
          let color = categoriesCopy[i].color
          imageCopy[action.dropInfo.imageId].color = color;
          imageCopy[action.dropInfo.imageId].category = action.dropInfo.catId;
          categoriesCopy[i].imgHashes.push(action.dropInfo.imageId)
          return { ...state, images: imageCopy, categories: categoriesCopy};
        }
      }
    break

    default:
      return state;
  }
};

export default reducer;
