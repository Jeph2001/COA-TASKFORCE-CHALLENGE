// This is a function to Transform String based on given rules 

function transformString(str) {
    const reversed = str.split("").reverse().join("");
    const asciiCodes = reversed.split("").map(char => char.charCodeAt(0)).join(" ");
  
    // Checking if string length is divisible by both 3 and 5.
    if (str.length % 3 === 0 && str.length % 5 === 0) {
      return asciiCodes + reversed; // this is for 3rd rule in challenge.( perform both operations)
    } else if (str.length % 3 === 0) {
      return reversed; // this is for first rule. (If the length of the string is divisible by 3, reverse the entire string.)
    } else if (str.length % 5 === 0) {
      return asciiCodes; // this for the second rule from the challenge tasks.
    } else {
      //when none of the above met
      return str;
    }
  }
  
  // Let's see how it works
  const inputString = "joseph";
  const transformedString = transformString(inputString);
  console.log(transformedString); 
  