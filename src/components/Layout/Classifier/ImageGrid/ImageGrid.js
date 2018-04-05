import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import classes from "../../../../styles/ImageGrid/ImageGrid.css";

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

const tilesData = [
  {
    img: images[1],
    title: "Camera"
  },
  {
    img: images[2],
    title: "Camera"
  },
  {
    img: images[3],
    title: "Camera"
  },
  {
    img: images[4],
    title: "Morning"
  },
  {
    img: images[5],
    title: "Hats"
  },
  {
    img: images[5],
    title: "Honey"
  },
  {
    img: images[4],
    title: "Vegetables"
  },
  {
    img: images[4],
    title: "Water plant"
  },
  {
    img: images[5],
    title: "Honey"
  },
  {
    img: images[4],
    title: "Vegetables"
  },
  {
    img: images[4],
    title: "Water plant"
  },
  {
    img: images[5],
    title: "Honey"
  },
  {
    img: images[4],
    title: "Vegetables"
  },
  {
    img: images[4],
    title: "Water plant"
  },
  {
    img: images[5],
    title: "Honey"
  },
  {
    img: images[4],
    title: "Vegetables"
  },
  {
    img: images[4],
    title: "Water plant"
  },
  {
    img: images[5],
    title: "Honey"
  },
  {
    img: images[4],
    title: "Vegetables"
  },
  {
    img: images[4],
    title: "Water plant"
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => {
  return (
    <div className={classes.root}>
      <GridList cols={5} cellHeight={180}>
        {tilesData.map((tile, index) => (
          <GridTile
            key={index}
            title={tile.title}
            actionIcon={
              <IconButton>
                <StarBorder color="white" />
              </IconButton>
            }
          >
            <img alt={"Ups"} src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  );
};

export default GridListExampleSimple;
