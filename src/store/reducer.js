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
  noAddedCats: 0
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    
    case "ADD_CATEGORY":
      let categoriesCopy = [...state.categories];
      const noCats = state.noAddedCats + 1;
      const new_unique_id = noCats;
      const newCat = {
        id: new_unique_id,
        name: "New category",
        imgHashes: [],
        color: Constants.CATEGORY_COLORS[noCats]
      };
      categoriesCopy.push(newCat);
      return { ...state, categories: categoriesCopy, noAddedCats: noCats };

    case "CHANGE_CAT_NAME":
      let categories = [...state.categories];
      for (let i in state.categories) {
        if (categories[Number(i)].id.toString() === action.id) {
          categories[Number(i)].name = action.name;
          return { ...state, categories: categories };
        }
      }
      break

    case "DELETE_CAT":
      let allCategories = [...state.categories];
      for (let j in allCategories) {
        if (allCategories[Number(j)].id.toString() === action.id) {

          
          allCategories.splice(j, 1);
          return { ...state, categories: allCategories };
        }
      }
      break

    case "UPLOAD_IMAGE":
      let imagesCopy = {...state.images};
      const id = hash(action.imInfo.src)
      imagesCopy[id] = {...action.imInfo, accuracy: null, category: null, color: "FFFFFF"}
      return { ...state, images: imagesCopy };

    case "IM_DROPPED":
      for (let i in state.categories) {
        if (state.categories[Number(i)].id === action.dropInfo.catId) {
          let imagesCopy = {...state.images};
          let categoriesCopy = [...state.categories];
          let color = state.categories[Number(i)].color
          imagesCopy[action.dropInfo.imageId].color = color;
          imagesCopy[action.dropInfo.imageId].category = action.dropInfo.catId;
          categoriesCopy[Number(i)].imgHashes.push(action.dropInfo.imageId)
          return { ...state, images: imagesCopy, categories: categoriesCopy};
        }
      }
    break

    default:
      return state;
  }
};

export default reducer;
