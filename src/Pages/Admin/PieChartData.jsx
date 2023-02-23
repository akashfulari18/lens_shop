
import { Box } from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  title: "Total Products",
};

export default function PieChartData({data}) {
  // console.log(data)
  return (
    <Box> 
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"500px"}
      height={"400px"}
      />
      </Box>
  
  );
}
