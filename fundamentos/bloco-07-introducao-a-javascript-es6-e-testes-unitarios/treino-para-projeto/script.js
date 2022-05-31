function avarage(param) {
  const avarageArray = param.reduce();
  const result = (avarageArray, rounded) => {return avarageArray + Math.round(avarageArray)};
  return result
}
avarage(15.5, 2.3, 1.1, 4.7);