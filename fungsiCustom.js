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

const dataPotong = (parsedData) => {
  if (parsedData.message !== undefined) {
    splitData = parsedData.message.split(" ");
    const lastWord = splitData;
    return lastWord[lastWord.length - 1];
  }
  if (parsedData[0].message !== undefined) {
    splitData = parsedData[0].message.split(" ");
    const lastWord = splitData;
    return lastWord[lastWord.length - 1];
  }
  if (parsedData[0].data.message !== undefined) {
    splitData = parsedData[0].data.message.split(" ");
    const lastWord = splitData;
    return lastWord[lastWord.length - 1];
  }
};
let newData = [];
const bacaData = (fnCallback) => {
  let fileList = [file1, file2, file3];
  fileList.map((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        fnCallback(err, null);
      } else {
        parsedData = JSON.parse(data);
        index = fileList.indexOf(file);
      }
      pushData(dataPotong(parsedData), index);

      if (
        fileList.length === newData.length &&
        newData.includes(undefined) === false
      ) {
        fnCallback(null, newData);
      }
    });
  });
};
pushData = (data) => {
  newData.push(data);
  newData.filter((e, i, s) => {
    return s.indexOf(e) === i;
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
