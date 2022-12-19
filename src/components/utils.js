
function shuffleArray(arrayPar) {
    let array = arrayPar;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const isContainCups = (array) => {
    let set = new Set(array);
    return set.size !== array.length;
  };
  export {shuffleArray, isContainCups};