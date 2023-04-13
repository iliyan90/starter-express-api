export const pickSeven = async (words) => {
  let seven = [];
  if (words.length <= 6) {
    seven = [...words];
  } else {
        let long = words.filter(item => item.length === 6);
        if(long.length < 7){
            seven = [...long]
        }
      for (let i = seven.length; i < 7; i++) {
        const random = Math.round(Math.random() * (words.length - 1))
        if(!seven.includes(words[random])){
            seven.push(words[random])
        }
    }
  }
  return seven
};
