// Задача 54: Задайте двумерный массив. Напишите программу, которая упорядочит по убыванию элементы каждой строки двумерного массива.
// Например, задан массив:
// 1 4 7 2
// 5 9 2 3
// 8 4 2 4
// В итоге получается вот такой массив:
// 7 4 2 1
// 9 5 3 2
// 8 4 4 2

let m = +prompt("Задайте количество массивов")
let n = +prompt("Задайте количество значений в массиве")

// рандомный массив
function getArray(m,n,min,max){
  let arr = []
  for(let i = 0; i < m; i++){
     arr[i] = []
      for(let j = 0; j < n; j++){
        arr[i][j] = Math.floor(Math.random() * (max - min + 1) + min)
      }
  }
  return arr
}

// сортировка элементов в массивах
function sortArray(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
      for(let k = 0; k < array[i].length - 1; k++){
        if(array[i][k] < array[i][k + 1]){
          let temp = array[i][k + 1]
          array[i][k + 1] = array[i][k];
          array[i][k] = temp;
        }
      }
    }
  }
  return array
}


let randomArray = getArray(m,n,10,99)
console.log(randomArray)
let startFunc = sortArray(randomArray);

console.log(startFunc)
