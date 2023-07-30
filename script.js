//your JS code here. If required.
function findFirstNonRepeatingChar(inputString) {
  // Create an object to store the frequency of each character
  const charFrequency = {};

  // Loop through the string to count the frequency of each character
  for (let char of inputString) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first character with frequency equal to 1
  for (let char of inputString) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Take input using prompt
const inputString = prompt("Enter a string:");

// Find the first non-repeating character
const result = findFirstNonRepeatingChar(inputString);

// Display the result using alert
if (result !== null) {
  alert("The first non-repeating character is: " + result);
} else {
  alert("No non-repeating character found in the input string.");
}
