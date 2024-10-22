function addTwoNumbers(num1, num2) {
    if (arguments.length !== 2) {
      throw new Error('This function accepts exactly 2 parameters');
    }
  
    return num1 + num2;
  }
  console.log(addTwoNumbers(5,7)); 





  function add() {
    if (arguments.length === 0) {
      throw new Error('At least one parameter is required');
    }
  
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number') {
        throw new Error('All parameters must be numerical values');
      }
      sum += arguments[i];
    }
  
    return sum;
  }

  console.log(add(1, 2,4,9 ));





  function reverse() {
    const arr = Array.from(arguments);
    arr.reverse();
    return arr;
  }
  
console.log(reverse(1, 2, 3, 4, 5)); 