function stringChop(str, size) {
  if (!str) return []; // Handle null or empty string
  const result = [];
  for (let i = 0; i < str.length; i += Number(size)) {
    result.push(str.slice(i, i + Number(size)));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));
