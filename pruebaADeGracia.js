const codigo = ["BTMNMB", "NBMTMN", "TTBTMT", "BMBBMM", "NNNNTB", "TNBNTM"];

let dict = {};

const isDeveloper = (input) => {
  let arrayP = formatearArray(input);

  return validarAcceso(arrayP, input.length);
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

const formatearArray = (input) => {
  let arrayP = [];
  for (let i = 0; i < input.length; i++) {
    if (validarLetra(input[i])) {
      arrayP.push(Array.from(input[i].toUpperCase()));
    }
  }

  return arrayP;
};

const validarLetra = (letra) => {
  let esValido = false;
  esValido = /^[a-zA-Z]+$/.test(letra); //Valida si es una letra
  if (esValido) {
    esValido = /B|N|T|M/.test(letra); //Valida que contenga las letras B,N,T,M
  }

  return esValido;
};

const validarAcceso = (arr, inputLength) => {
  if (arr.length === inputLength) {
    for (let index = 0; index < inputLength; index++) {
      if (buscarHorizontal(arr, index)) {
        return true;
      }
      if (buscarVertical(arr, index)) {
        return true;
      }
    }
  }

  return false;
};

console.log(isDeveloper(codigo));



