//100 nilai acak antara 1 dan 50
function generateRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
      const randomNumber = Math.floor(Math.random() * 50) + 1; //menggunakan Math.floor untuk dibulatkan angkanya ke bawah
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  
  //array genap dan array ganjil
  function separateEvenOddArray(originalArray) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < originalArray.length; i++) {
      if (originalArray[i] % 2 === 0) {
        evenArray.push(originalArray[i]);
      } else {
        oddArray.push(originalArray[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  
  //nilai minimum dalam array
  function findMinValue(array) {
    let minValue = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
      }
    }
    return minValue;
  }
  
  //nilai maksimum dalam array
  function findMaxValue(array) {
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxValue) {
        maxValue = array[i];
      }
    }
    return maxValue;
  }
  
  //menghitung total nilai dalam array
  function calculateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  // menghitung rata-rata dalam array
  function calculateAverage(array) {
    const total = calculateTotal(array);
    return total / array.length;
  }
  
  //array acak
  const randomArray = generateRandomArray();
  
  //array menjadi array genap dan ganjil
  const [evenArray, oddArray] = separateEvenOddArray(randomArray);
  
  // min, max, total, dan rata-rata untuk masing-masing array
  const minEven = findMinValue(evenArray);
  const maxEven = findMaxValue(evenArray);
  const totalEven = calculateTotal(evenArray);
  const averageEven = calculateAverage(evenArray);
  
  const minOdd = findMinValue(oddArray);
  const maxOdd = findMaxValue(oddArray);
  const totalOdd = calculateTotal(oddArray);
  const averageOdd = calculateAverage(oddArray);
  
  const comparisonResults = {
    minComparison: minEven > minOdd ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil",
    maxComparison: maxEven > maxOdd ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil",
    totalComparison: totalEven === totalOdd ? "Total memiliki nilai sama pada array genap dan ganjil" : "Total memiliki nilai berbeda pada array genap dan ganjil",
    averageComparison: averageEven > averageOdd ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil",
  };
  
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Min, Max, Total, dan Rata-rata pada array genap:");
  console.log("Min:", minEven);
  console.log("Max:", maxEven);
  console.log("Total:", totalEven);
  console.log("Rata-rata:", averageEven);
  console.log("Min, Max, Total, dan Rata-rata pada array ganjil:");
  console.log("Min:", minOdd);
  console.log("Max:", maxOdd);
  console.log("Total:", totalOdd);
  console.log("Rata-rata:", averageOdd);
  console.log("Perbandingan:");
  console.log(comparisonResults);
  