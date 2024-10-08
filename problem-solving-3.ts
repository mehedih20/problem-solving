{
  /*
    Task: Advanced Sorting
    Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
    */

  type Student = {
    name: string;
    grades: number[];
  };

  const students: Student[] = [
    { name: "John", grades: [85, 90, 78] },
    { name: "Jane", grades: [92, 88, 95] },
    { name: "Tom", grades: [70, 85, 90] },
  ];

  const sortStudents = (students: Student[]) => {
    return students.sort((a, b) => {
      const averageGradeA =
        a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
      const averageGradeB =
        b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
      return averageGradeB - averageGradeA;
    });
  };

  console.log(sortStudents(students));

  /*
    Task: Functional Programming - Reduce
    Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
    */

  const randomObjects = [
    { quantity: 2, price: 10 },
    { quantity: 3, price: 15 },
    { quantity: 1, price: 5 },
    { quantity: 4, price: 20 },
    { quantity: 5, price: 25 },
  ];

  const calculateTotalValue = () => {
    return randomObjects.reduce(
      (sum, obj) => sum + obj.price * obj.quantity,
      0
    );
  };

  console.log(calculateTotalValue());

  /*
    Task: Array Intersection
    Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.
    */

  const array1 = [1, 2, 3, 4, 5, 4];
  const array2 = [4, 5, 6, 7, 8];

  const findCommonElements = (numArray1: number[], numArray2: number[]) => {
    const commonElements = numArray1.filter((num) => {
      if (numArray2.includes(num)) {
        return num;
      }
    });

    const uniqueValues = new Set(commonElements);

    return [...uniqueValues];
  };

  console.log(findCommonElements(array1, array2));

  /* 
    Task: Object Transformation
    Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.
    */

  type Customer = {
    name: string;
    purchases: number[];
    loyaltyPoints: number;
  };

  const customerData: Customer[] = [
    { name: "Alice", purchases: [10, 20, 30], loyaltyPoints: 10 },
    { name: "Bob", purchases: [5, 15, 25, 12, 54, 92], loyaltyPoints: 5 },
    { name: "Charlie", purchases: [20, 30, 40], loyaltyPoints: 15 },
    { name: "David", purchases: [10, 20, 30, 40, 50, 35], loyaltyPoints: 20 },
  ];

  const doubleLoyaltyPoints = (customers: Customer[]) => {
    const transformedCustomerData = customers.map((customer: Customer) => {
      if (customer.purchases.length > 5) {
        customer.loyaltyPoints *= 2;
      }
      return customer;
    });
    return transformedCustomerData;
  };

  console.log(doubleLoyaltyPoints(customerData));

  /* 
    Task: Function Memoization
    Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.
    */

  const memoize = (fn: (...args: any[]) => any) => {
    const cache: { [key: string]: any } = {};

    return (...args: any[]) => {
      const key = JSON.stringify(args);

      if (cache[key]) {
        console.log("Returning cached result");
        return cache[key];
      }

      const result = fn(...args);
      cache[key] = result;

      return result;
    };
  };

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const memoizedFibonacci = memoize(fibonacci);

  console.log(memoizedFibonacci(10));
  console.log(memoizedFibonacci(10));
  console.log(memoizedFibonacci(15));
  console.log(memoizedFibonacci(15));
}
