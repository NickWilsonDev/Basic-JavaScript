/* main.js */
console.log('Hello World!');

// 101 stuff
var greet = function (name) {
    console.log("hello " + name);
}
greet("nick");

var madlib = function (name, subject) {
    return name + "'s favorite subject in school is " + subject;
}

console.log(madlib("nick", "CS"));

var tipAmount = function(amount, serviceLevel) {
    tip = 0;
    if (serviceLevel == 'good') {
        tip = 0.20;
    } else if (serviceLevel == 'fair') {
        tip = 0.15;
    } else if (serviceLevel == 'bad') {
        tip = 0.10;
    }
    return amount * tip;
}

console.log(tipAmount(10, 'fair'));

var totalAmount = function(amount, serviceLevel) {
    tip = 0;
    if (serviceLevel == 'good') {
        tip = 0.20;
    } else if (serviceLevel == 'fair') {
        tip = 0.15;
    } else if (serviceLevel == 'bad') {
        tip = 0.10;
    }
    return amount + (amount * tip);
}

console.log(totalAmount(10, 'fair'));

var splitAmount = function(amount, serviceLevel, numPeople) {
    tip = 0;
    if (serviceLevel == 'good') {
        tip = 0.20;
    } else if (serviceLevel == 'fair') {
        tip = 0.15;
    } else if (serviceLevel == 'bad') {
        tip = 0.10;
    }
    return (amount + (amount * tip)) / numPeople;
}

console.log(splitAmount(10, 'fair', 3));
