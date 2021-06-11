/* eslint-disable import/prefer-default-export */

export function getCommonDirectoryPath(pathes) {
  // declare an array of the paths seperated into directories
  const pathArrays = pathes.map((path) => path.split('/'));
  // declare empty array to contain the answer
  const commonPath = [];
  // iterate through the paths array
  for (let i = 0; i < pathArrays[0].length; i += 1) {
    // iterate through each directory contained
    for (let j = 1; j < pathArrays.length; j += 1) {
      // if the current value does not match the value of the same index in the first array
      if (pathArrays[0][i] !== pathArrays[j][i]) {
        // return the contents of commonPath array joined into a string
        // using '/' as a seperator
        // if there are values in the commonPath array, close with a '/' otherwise, with a ''
        return commonPath.join('/') + (commonPath.length ? '/' : '');
      }
    }
    // if the values do match, push the value into the commonPath array
    commonPath.push(pathArrays[0][i]);
  }
  // only for edge cases: join the commonPath together using '/' as seperator
  return commonPath.join('/');
}
