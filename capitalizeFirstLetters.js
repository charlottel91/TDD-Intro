
const capitalizeFirstLetters = (input) => {
  return input.length > 0
    ? input[0].toUpperCase() + input.slice(1)
    : ''; 
}
