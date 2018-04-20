import Constants from "../components/Constants.js";
import hash from 'string-hash'

const initalState = {
  images: {},
  categories: [
    {
      id: 0,
      counter: 0,
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
  let color = null
  
  switch (action.type) {
    // Executed when ADD Button clicked 
    case "ADD_CATEGORY":
      categoriesCopy = [...state.categories];
      const noCats = state.noAddedCats + 1;
      const new_unique_id = noCats;
      const newCat = {
        id: new_unique_id,
        counter: 0,
        name: "New category",
        imgHashes: [],
        color: state.catColors[noCats]
      };
      categoriesCopy.push(newCat);
      return { ...state, categories: categoriesCopy, noAddedCats: noCats };

    // Executed when category name is changed
    case "CHANGE_CAT_NAME":
      categoriesCopy = [...state.categories];
      for (let i in categoriesCopy) {
        if (categoriesCopy[i].id.toString() === action.id) {
          categoriesCopy[i].name = action.name;
          return { ...state, categories: categoriesCopy };
        }
      }
      break

    // Executed when delete button is clicked
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
      
    
    // Executed when folder was selected
    case "UPLOAD_IMAGE":
      imageCopy = {...state.images};
      const id = hash(action.img.src)
      imageCopy[id] = {...action.img, id: id, color: "#FFFFFF", category: null }
      console.log(state)
      return { ...state, images: imageCopy};

    // Executed when IM was dropped on category
    case "IM_DROPPED":
      categoriesCopy = [...state.categories];
      imageCopy = {...state.images};
      
      // Check if picture is already in that category
      if (action.dropInfo.catId !== action.dropInfo.oldCatId){
        for (let i in state.categories) {
          
         // Delete from old category
         /*if (categoriesCopy[i].id === action.dropInfo.oldCatId){
            categoriesCopy[i].imgHashes.find(function(element) {
              return element > dropInfo.;
            })


          }*/

          // Add to new category 
          if (categoriesCopy[i].id === action.dropInfo.catId) {
            console.log(action.dropInfo)
            color = categoriesCopy[i].color    
            // Add ImageID to new category
            categoriesCopy[i].imgHashes.push(action.dropInfo.imageId)
            categoriesCopy[i].counter = categoriesCopy[i].counter + 1;
            // Change image category and color
            imageCopy[action.dropInfo.imageId].color = color;
            imageCopy[action.dropInfo.imageId].category = action.dropInfo.catId;  
          }
        }
      }
      return { ...state, images: imageCopy, categories: categoriesCopy};


    default:
      return state;
  }
};

export default reducer;
