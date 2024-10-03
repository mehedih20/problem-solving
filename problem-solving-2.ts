{
  /*
    Task 6: Array Reduction
    Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
    */

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumOfEvenNumbers = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator += currentValue;
    }
    return accumulator;
  }, 0);

  console.log(sumOfEvenNumbers);

  /*
   Task 7: Leap Year Checker
   Write a function that determines whether a given year is a leap year.
   */

  const checkLeapYear = (year: number) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  };

  console.log(checkLeapYear(2024));

  /*
  Task 8: Count Vowels:
  Write a function that counts the number of vowels in a given string.
  Example: Happy New Year
  */

  const checkVowelCount = (str: string): number => {
    const vowels: string[] = ["a", "e", "i", "o", "u"];
    let count: number = 0;

    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  };

  console.log(checkVowelCount("Umbrella"));

  /*
 Task 9: Unique Values
 Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
 */

  const duplicateValues: number[] = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 2];

  const removeDuplicateNumbers = (values: number[]): number[] => {
    const uniqueValues: number[] = [...new Set(values)];
    return uniqueValues;
  };

  console.log(removeDuplicateNumbers(duplicateValues));

  /*
Task 10: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.
*/
  const findMaximumValue = (values: number[]): number => {
    let maximumValue: number = values[0];

    values.forEach((value) => {
      maximumValue = maximumValue > value ? maximumValue : value;
    });

    return maximumValue;
  };

  console.log(findMaximumValue(duplicateValues));
}
