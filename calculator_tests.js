// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    allClear();
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    allClear();
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.


//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.


//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test( "inverse test", function( assert ) {
    addDigit('4');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.25", "Passed - Expected 0.25");
    allClear();
});

//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test( "factorial test", function( assert ) {
    addDigit('4');
    factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
    allClear();
});

//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test( "Square root test", function( assert ) {
    addDigit('64');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "8", "Passed - Expected 8");
    allClear();
});

//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test( "Square number test", function( assert ) {
    addDigit('2');
    square();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
    allClear();
});

//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test( "clear test", function( assert ) {
    addDigit('4');
    square();
    addDigit('6');
    pleaseClear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    allClear();
});

//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test( "Square number test", function( assert ) {
    addDigit('5');
    storeOperator('/')
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "undefined", "Passed - Expected undefined");
    allClear();
});

//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.

