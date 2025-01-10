function invertir(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(invertir("Hola mundo"));

const array = [
  {
    "nombre": "matias",
    "edad": 25,
    "carrera": "ingenieria en informatica"
  },
  {
    "nombre": "lukas",
    "edad": 26,
    "carrera": "ingenieria comercial"
  },
  {
    "nombre": "rodrigo",
    "edad": 23,
    "carrera": "ingenieria comercial"
  }
];

function agrupacion_simple(arr) {
  const response = {};
  arr.forEach(i => {
    if (response[i.carrera]) {
      response[i.carrera].push(i);
    } else {
      response[i.carrera] = [i];
    }
  });
  return response;
}

console.log(agrupacion_simple(array));

function encontrar_num(arr) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
}

const array2 = [3, 7, 1, 2, 8, 4, 5];
console.log(encontrar_num(array2));

function encontrar_suma(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true;
      }
    }
  }
  return false;
}

const array3 = [5, 7, 1, 2, 8, 4, 3];
const number = 10;
console.log(encontrar_suma(array3, number));

function segmanetacion_string(array, _string) {
  while (_string !== "") {
    let found = false;
    for (let item of array) {
      if (_string.includes(item)) {
        _string = _string.replace(item, "");
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

const array4 = ["uno", "dos", "tres"];
let _string = "unodos";
console.log(segmanetacion_string(array4, _string));

_string = "unocinco";
console.log(segmanetacion_string(array4, _string));
