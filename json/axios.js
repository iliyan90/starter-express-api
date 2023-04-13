import fs from "fs";
import { getAllCombinations } from "../tools/random.js";
import { pickSeven } from "../tools/seven.js";


export let obj = [];

export const pickObj = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("json/output.json", "utf8", async (err, data) => {
      if (err) {
        reject(err);
      }
      obj = JSON.parse(data);
      obj = obj.words;

      const levels = obj.filter((item) => item.length === 7);
      const randomLevel = Math.round(Math.random() * (levels.length - 1));
      const randomWord = levels[randomLevel];
      const wordSet = randomWord?.split("");

      const gessWords = await getAllCombinations(wordSet, obj);
      const selectedWords = await pickSeven(gessWords);
      resolve({ selectedWords, wordSet });
    });
  });
};


// export let obj = [];
// export const pickObj = async () => {
//     const getFile = fs.readFile("json/output.json", "utf8", async (err, data) => {
//       if (err) {
//         throw err;
//       }
//       obj = JSON.parse(data);
//       obj = obj.words;
  
//       const levels = obj.filter((item) => item.length === 7);
//       const randomLevel = Math.round(Math.random() * (levels.length - 1));
//       const randomWord = levels[randomLevel];
//       const wordSet = randomWord?.split("");
  
//       const gessWords = await getAllCombinations(wordSet, obj);
//       const selectedWords = await pickSeven(gessWords);
//       console.log(selectedWords);
//       console.log(wordSet)

//     });
//   };
