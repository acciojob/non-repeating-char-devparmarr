function findFirstNonRepeatedCharacter(inputString) {
      const charCount = {};

      // Count the occurrences of each character in the string
      for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        charCount[char] = (charCount[char] || 0) + 1;
      }

      // Find the first non-repeated character
      for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (charCount[char] === 1) {
          return char;
        }
      }

      // If there is no non-repeated character, return null
      return null;
    }

    // Get input string using prompt
    const inputString = prompt("Enter a string:");
    const firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);

    if (firstNonRepeatedChar !== null) {
      alert(firstNonRepeatedChar);
    } 