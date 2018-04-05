import React, { Component } from "react";
import classes from "../../../../styles/ImageGrid/ImageGrid.css";
import Img from "./Image/Image";

class GridListExampleSimple extends Component {
    
  render() {
    
    const images = this.props.images;

    return (
      <div className={classes.root}>

          {Object.keys(images).map((key, index) => (
        
              <div className={classes.card} style={{ position: "relative", width: this.props.maxImWidth < 300 ? this.props.maxImWidth : "30%", margin: "5px"}}>
                
                <Img key={key} id={key} src={images[key].src} accuracy={images[key].accuracy} category={images[key].accuracy} drop={this.props.drop}/>
          
              <div className={classes.card2} style={{position: "absolute", bottom: "0px", left: "0px", width: "100%", height: "40px",backgroundColor: "white"}}> 
                <div style={{left: "0px", width: "15px", height: "100%", backgroundColor: images[key].color}}/>
              </div>

            </div>
          ))}
        
      </div>
    );
  }
};

export default GridListExampleSimple;

//<img width={"100%"}  alt={"Ups"} src={images[key].src} style={{height: "auto",marginRight: "5px", marginBottom: "35px"}}/>
