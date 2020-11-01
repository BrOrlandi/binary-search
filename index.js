
var readInput = (message) => new Promise((resolve) => {
  process.stdin.resume();
  console.log(message);
  process.stdin.once("data", function(data) {
      resolve(data.toString().trim());
  });
});

const binarySearch = async (start, end) => {
  const length = end - start
  const middle = start + length / 2

  const result = await readInput(`The middle is ${middle}, type '<' or '>' and the amount inserted if different:`)

  const firstChar = result.charAt(0);
  const greaterThan = firstChar === '>'
  const restOfResult = result.slice(1)
  const nextValue = restOfResult.length > 0 ? parseInt(restOfResult, 10) : middle;

  if(greaterThan) {
    return binarySearch(nextValue, end)
  }

  return binarySearch(start, nextValue)
}

async function main() {
  console.log('This tells you the binary search values between an interval of numbers.')
  const startingInput = await readInput('Type the Starting value of the interval:')
  const starting = parseInt(startingInput, 10)

  const endingInput = await readInput('Type the Ending value of the interval:')
  const ending = parseInt(endingInput, 10)

  return binarySearch(starting, ending);
}


main()