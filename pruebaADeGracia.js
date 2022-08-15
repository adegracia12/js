const codigo = ["BTMNMB", "NBMTMN", "TTBTMT", "BMBBMM", "NNNNTB", "TNBNTM"];

let dict = {};

const isDeveloper = (input) => {
  let arrayP = [];

  for (let index = 0; index < input.length; index++) {
    if (validarLetra(input[index])) {
      arrayP.push(Array.from(input[index].toUpperCase()));
    }
  }

  if (arrayP.length === input.length) {
    for (let index = 0; index < input.length; index++) {
      if (buscarHorizontal(arrayP, index)) {
        return true;
      }
      if (buscarVertical(arrayP, index)) {
        return true;
      }
    }
  }

  return false;
};

const buscarHorizontal = (arr, i) => {
  dict = {};
  for (let j = 0; j < arr.length; j++) {
    if (buscarLetra(arr[i][j])) {
      return true;
    }
  }

  return false;
};

const buscarVertical = (arr, i) => {
  dict = {};
  for (let j = 0; j < arr.length; j++) {
    if (buscarLetra(arr[j][i])) {
      return true;
    }
  }

  return false;
};

const buscarLetra = (letra) => {
  if (letra in dict) {
    dict[letra] += 1;
    if (dict[letra] > 3) {
      return true;
    }
  } else {
    dict[letra] = 1;
  }
};

const validarLetra = (letra) => {
  let esValido = false;
  esValido = /^[a-zA-Z]+$/.test(letra); //Valida si es una letra
  if (esValido) {
    esValido = /B|N|T|M/.test(letra); //Valida que contenga las letras B,N,T,M
  }

  return esValido;
};

console.log(isDeveloper(codigo));
