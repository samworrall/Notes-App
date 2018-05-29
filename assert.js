var assert = {
  isTrue: function(condition, test) {
    if (condition) {
      console.log(`%c${test} passed!`, 'color: green')
    } else {
      throw new Error(`${test} has failed! ${condition} is not truthy!`)
    };
  }
};
