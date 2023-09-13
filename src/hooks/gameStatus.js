let selectedArray = [];

const checkWin = (value, length) => {
  selectedArray.push(value);

  console.log("checking for winning line");
  console.log(selectedArray);
};

export default checkWin;
