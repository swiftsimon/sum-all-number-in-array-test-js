function sumItems(array) {
  let sum = 0;

  // Sum all the numbers in the array
  for (item of array) {
    if(Array.isArray(item)) {

        sum += sumItems(item)

      } else {
        sum += item;
      }

    }
    return sum;
}

module.exports = sumItems;