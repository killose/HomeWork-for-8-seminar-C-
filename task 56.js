// Задача 56: Задайте прямоугольный двумерный массив.
// Напишите программу, которая будет находить строку с наименьшей суммой элементов.

// Например, задан массив:

// 1 4 7 2

// 5 9 2 3

// 8 4 2 4

// 5 2 6 7

// Программа считает сумму элементов в каждой строке и
// выдаёт номер строки с наименьшей суммой элементов: 1 строка

let m = +prompt("Задайте количество массивов")
let n = +prompt("Задайте количество значений в массиве")

function getArray(m,n,min,max){
  let arr = []
  for(let i = 0; i < m; i++){
     arr[i] = []
    for(let j = 0; j < n; j++){
      arr[i][j] = Math.trunc(Math.random() * (max - min + 1) + min)
    }
  }
  return arr
}

function showMatrix(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
      document.write(array[i][j] + " ");
    }
    document.write("<br>");
  }
  return array
}


function calcArray(array){
  let sum = 0
  let arr = []
  for(let i = 0; i < array.length; i++){
    sum = 0;
    for(let j = 0; j < array[i].length; j++){
      sum+=array[i][j]
    }
    arr.push(sum)
  }
  return arr
}

function findMin(array){
  min = array[0]
  let strIdx = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      strIdx = [i]
    }
  }
  return `минимальная сумма элементов: ${min} найдена в ${+strIdx + 1} строке!`
}
function main(){
let randomArray = getArray(m,n,1,9);
let randomFinishArr = showMatrix(randomArray)
let sumNegativeArray = findMin(calcArray(randomFinishArr))
// Проверка результата
document.write(findMin(calcArray(randomFinishArr)))
console.log(randomArray) // Рандомный массив
console.log(calcArray(randomFinishArr))  // Массив с суммами элементов массивов от array1
console.log(findMin(calcArray(randomFinishArr))); // Вывод строки в которой минимум кол. элементов
  return sumNegativeArray
}


main();