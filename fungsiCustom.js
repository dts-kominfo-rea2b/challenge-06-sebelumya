// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
fnCallback = (data, err) => {
  if (err) {
    console.log(err);
  } else {
    return data;
  }
};

let newData = [];
const bacaData = (fnCallback) => {
  let fileList = [file1, file2, file3];
  fileList.map((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        return err;
      } else {
        parsedData = JSON.parse(data);
        index = fileList.indexOf(file);
      }
      let indexKata = fileList.length - 1;
      let x = indexKata - 1;

      if (index === 0) {
        splitData = parsedData.message.split(" ");
        const indexOne = splitData[x];
        pushData(indexOne, index);
        if (
          newData.includes(undefined) === false &&
          newData.length === fileList.length
        ) {
          fnCallback(newData, err);
        }
      }
      if (index === 1) {
        splitData = parsedData[0].message.split(" ");
        const indexOne = splitData[x];
        pushData(indexOne, index);
        if (
          newData.includes(undefined) === false &&
          newData.length === fileList.length
        ) {
          fnCallback(newData, err);
        }
      }
      if (index === 2) {
        splitData = parsedData[0].data.message.split(" ");
        const indexOne = splitData[x];
        pushData(indexOne, index);
        if (
          newData.includes(undefined) === false &&
          newData.length === fileList.length
        ) {
          fnCallback(newData, err);
        }
      }
    });
  });
};
pushData = (data, index) => {
  newData[index] = data;
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
