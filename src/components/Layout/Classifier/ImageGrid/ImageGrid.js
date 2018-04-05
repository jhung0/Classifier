import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import classes from "../../../../styles/ImageGrid/ImageGrid.css";
import Aux from "../../../../hoc/Aux"

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../../../assets/images/anaphase/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);



const GridListExampleSimple = props => {
  const images = props.images;

  return (
    <div className={classes.root}>

     
        {Object.keys(images).map((key, index) => (
        
  
          <div className={classes.card} style={{ position: "relative", width: props.maxImWidth < 100 ? "10%" : "30%", margin: "5px"}}>
          
            <img width={"100%"}  alt={"Ups"} src={images[key].src} style={{height: "auto",marginRight: "5px", marginBottom: "35px"}}/>
            
            <div className={classes.card2} style={{position: "absolute", bottom: "0px", left: "0px", width: "100%", height: "40px",backgroundColor: "white"}}> 
              <div style={{left: "0px", width: "6px", height: "100%", backgroundColor: "red"}}>
              </div>  
            </div>

          </div>
        ))}
      
    </div>
  );
};

export default GridListExampleSimple;
