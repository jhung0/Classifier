import Constants from "../components/Constants.js";

const initalState = {
  uploadedPictures: [],
  categories: [
    {
      uniqueId: 0,
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
        uniqueId: new_unique_id,
        name: "New category",
        imgHashes: [],
        color: Constants.CATEGORY_COLORS[noCats]
      };
      categoriesCopy.push(newCat);
      return { ...state, categories: categoriesCopy, noAddedCats: noCats };

    case "CHANGE_CAT_NAME":
      let categories = [...state.categories];
      for (let i in state.categories) {
        if (categories[Number(i)].uniqueId.toString() === action.id) {
          categories[Number(i)].name = action.name;
          return { ...state, categories: categories };
        }
      }
      break;

    case "DELETE_CAT":
      let allCategories = [...state.categories];
      for (let j in allCategories) {
        if (allCategories[Number(j)].uniqueId.toString() === action.id) {
          allCategories.splice(j, 1);
          return { ...state, categories: allCategories };
        }
      }
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
