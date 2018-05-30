var assert = {
  isTrue: function(condition, test) {
    if (condition) {
      console.log(`%c${test} passed!`, 'color: green')
    } else {
      throw new Error(`${test} has failed! ${condition} is not truthy!`)
    };
  },

  isFalse: function(condition, test) {
    if (!condition) {
      console.log(`%c${test} passed!`, 'color: green')
    } else {
      throw new Error(`${test} has failed! ${condition} is not falsey!`)
    };
  },

  exists: function(condition, test) {
    if (typeof condition !== 'undefined') {
      console.log(`%c${test} passed!`, 'color: green')
    } else {
      throw new Error(`${test} has failed! ${condition} does not exist!`)
    };
  },

  isAString: function(condition, test) {
    if (typeof condition === 'string') {
      console.log(`%c${test} passed!`, 'color: green')
    } else {
      throw new Error(`${test} has failed! ${condition} is not a string!`)
    };
  },

  areEqual: function(condition1, condition2, test) {
    if (condition1 === condition2) {
      console.log(`%c${test} passed!`, 'color: green')
    } else {
      throw new Error(`${test} has failed! ${condition1} does not equal ${condition2}`)
    };
  }
};
