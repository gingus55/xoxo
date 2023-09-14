let selectedArray = [];

const arePointsInLine = (array) => {
  let point1 = array[0];
  let point2 = array[1];
  let point3 = array[2];

  const slope1 = (point2[0][1] - point1[0][1]) / (point2[0][0] - point1[0][0]);
  const slope2 = (point3[0][1] - point2[0][1]) / (point3[0][0] - point2[0][0]);

  return slope1 === slope2 || (isNaN(slope1) && isNaN(slope2));
};

const confirmWin = (array) => {
  console.log(array, "..has been recieved");
  const result = arePointsInLine(array);
  return result;
};

const checkWin = (value, length) => {
  const split = value.split(",");
  const inted = [parseInt(split[0]) + 1, parseInt(split[1]) + 1];

  selectedArray.push([inted]);

  console.log("checking for winning line");
  if (selectedArray.length >= 3) {
    const won = confirmWin(selectedArray);
    console.log(won);
    if (won) {
      return true;
    }
  } else {
    console.log("not enough selected to win");
  }
};

export default checkWin;
