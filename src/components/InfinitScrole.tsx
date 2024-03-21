import React from "react";
import { FixedSizeGrid as Grid } from 'react-window';
import CardItemNew from "../components/CardItemNew";
import { resturantData } from "../../public/Data/ResturantData";

const InfiniteScroll = () => {
  const Cell = ({ columnIndex, rowIndex, style }) => (
    <div style={style}>
      Item {rowIndex},{columnIndex}
    </div>
  );

  return (
    <Grid
      columnCount={3} // Assuming you want 3 columns
      columnWidth={300} // Adjust the width according to your design
      height={500} // Adjust the height according to your design
      rowCount={Math.ceil(resturantData.length / 3)} // Adjust the row count based on data length and column count
      rowHeight={200} // Adjust the height according to your design
      width={900} // Adjust the total width according to your design
    >
      {({ columnIndex, rowIndex, style }) => {
        const dataIndex = rowIndex * 3 + columnIndex; // Calculate the index of the data item
        const dataItem = resturantData[dataIndex]; // Get the data item
        if (!dataItem) return null; // If dataItem is undefined, return null
        return (
          <div style={style}>
            <CardItemNew resData={dataItem} />
          </div>
        );
      }}
    </Grid>
  );
};

export default  InfiniteScroll;
