function stringChop(str, size) {
  if (!str) return [];
  const result = [];
  for (let i = 0; i < str.length; i += Number(size)) {
    result.push(str.slice(i, i + Number(size)));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
const result = stringChop(str, size);

// ✅ This alerts an empty string if the result is an empty array, as the test expects
alert(result.toString());
