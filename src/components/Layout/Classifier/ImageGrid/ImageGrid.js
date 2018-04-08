import React, { Component } from "react";
import classes from "../../../../styles/ImageGrid/ImageGrid.css";
import ImageContainer from "./ImageContainer/ImageContainer";

class ImageGrid extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.images !== this.props.images;
  }

  render() {
    const images = this.props.images;
    return (
      <div className={classes.root}>
        {Object.keys(images).map((key, index) => (
          <ImageContainer
            id={key}
            key={key}
            image={images[key]}
            width={this.props.maxImWidth}
            drop={this.props.drop}
          />
        ))}
      </div>
    );
  }
}

export default ImageGrid;

//<img width={"100%"}  alt={"Ups"} src={images[key].src} style={{height: "auto",marginRight: "5px", marginBottom: "35px"}}/>
/*<div  key={key+"Wrapper"} className={classes.card} style={{ position: "relative", width: this.props.maxImWidth < 300 ? this.props.maxImWidth : "30%", margin: "5px"}}>
                
                <Img key={key} id={key} src={images[key].src} accuracy={images[key].accuracy} category={images[key].category} drop={this.props.drop}/>
          
              <div key={key+"Tile"} className={classes.card2} style={{position: "absolute", bottom: "0px", left: "0px", width: "100%", height: "40px",backgroundColor: "white"}}> 
                <div key={key+"TileBar"} style={{left: "0px", width: "15px", height: "100%", backgroundColor: images[key].color}}/>
              
              </div>

            </div>*/
