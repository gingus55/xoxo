let selectedArray = [];

// const convertElementToObject = (element) => {
//   let seperate = element.split(",");

//   const object = {
//     i: seperate[0],
//     j: seperate[1],
//   };
//   return object;
// };

const arePointsInLine = (array) => {
  let point1 = array[0];
  let point2 = array[1];
  let point3 = array[2];

  // Calculate the slopes between pairs of points
  const slope1 = (point2[0][1] - point1[0][1]) / (point2[0][0] - point1[0][0]);
  const slope2 = (point3[0][1] - point2[0][1]) / (point3[0][0] - point2[0][0]);

  // Check if the slopes are equal (or if they are both NaN, indicating a vertical line)
  return slope1 === slope2 || (isNaN(slope1) && isNaN(slope2));
};

const confirmWin = (array) => {
  console.log(array, "..has been recieved");
  const result = arePointsInLine(array);
  console.log(result);
};

const checkWin = (value, length) => {
  //   let converted = convertElementToObject(value);
  const split = value.split(",");
  const inted = [parseInt(split[0]) + 1, parseInt(split[1]) + 1];
  console.log(inted);
  selectedArray.push([inted]);

  console.log("checking for winning line");
  if (selectedArray.length >= 3) {
    confirmWin(selectedArray);
  } else {
    console.log("not enough selected to win");
  }
};

export default checkWin;
