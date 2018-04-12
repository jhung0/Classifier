### Get Started Immediately

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Folder Structure

```
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   ├── components
│   │   ├── Constants.js
│   │   ├── ItemTypes.js
│   │   └── Layout
│   │       ├── Classifier
│   │       │   ├── CategoryList
│   │       │   │   ├── CategoryItem
│   │       │   │   │   └── CategoryItem.js
│   │       │   │   ├── CategoryList.js
│   │       │   │   └── FileInput
│   │       │   │       └── FileInput.js
│   │       │   ├── Classifier.js
│   │       │   └── ImageGrid
│   │       │       ├── ImageContainer
│   │       │       │   ├── Image
│   │       │       │   │   └── Image.js
│   │       │       │   └── ImageContainer.js
│   │       │       └── ImageGrid.js
│   │       ├── Layout.js
│   │       └── Navigation
│   │           └── Appbar
│   │               └── Appbar.js
│   ├── hoc
│   │   └── Aux.js
│   ├── index.js
│   ├── store
│   │   └── reducer.js
│   └── styles
│       ├── Appbar
│       │   └── Appbar.css
│       ├── CategoryList
│       │   └── CategoryList.css
│       ├── Classifier
│       │   └── Classifier.css
│       ├── Image
│       │   └── Image.css
│       ├── ImageGrid
│       │   └── ImageGrid.css
│       ├── Layout
│       │   └── Layout.css
│       ├── index
│       │   └── index.css
│       └── styles.js
└── stories
    └── index.stories.js
```
# Folders:

## Components:
Classifier Container for all components holds the states
* `Appbar` Header
* `CategoryList` List of category item
* *  `CategoryItem` The category item
* `FileInput` File input button, handles picture upload
* `ImageGrid` Image Grid 
* * `ImageContainer` Image and bar under the image
* * * `Image` The image that is displayed

## Styles:
`All styles related to components are placed under styles`

## Redux store
`Holds all states and handles action`
 ``` \*
const initalState = {
  images: {},
};
const reducer = (state = initalState, action) => {
  let imageCopy = null
  switch (action.type) {
    // Executed when folder was selected
    case "UPLOAD_IMAGE":
      imageCopy = {...state.images};
      const id = hash(action.imInfo.src)
      imageCopy[id] = {...action.imInfo, accuracy: null, category: null, color:"FFFFFF"}
      return { ...state, images: imageCopy};
    default:
      return state;
  }
};
 ```
 
## Classifier 
Holds all important components for classifier
 ```
// This class is the container for all components regarding the classifier
class Classifier extends Component {
  state = {
    images: {},
    categories: [],
  };
  render() {
    return (
      <div className={classes.wrapper}>
        <CategoryList .../>
        <ImageGrid .../>
      </div>
    );
  }
}
/
 ```