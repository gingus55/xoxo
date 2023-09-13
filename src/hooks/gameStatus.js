let selectedArray = [];

const convertElementToObject = (element) => {
  let seperate = element.split(",");

  const object = {
    i: seperate[0],
    j: seperate[1],
  };
  return object;
};

const confirmWin = (array) => {
  console.log(array, "..has been recieved");
};

const checkWin = (value, length) => {
  let converted = convertElementToObject(value);
  selectedArray.push(converted);

  console.log("checking for winning line");
  if (selectedArray.length >= 3) {
    confirmWin(selectedArray);
  } else {
    console.log("not enough selected to win");
  }
};

export default checkWin;
