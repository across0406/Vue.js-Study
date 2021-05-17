'use strict';
// 1. Write specification first version including basic test.
// 2. View specification first version and make codes.
// 3. Execute specification using 'Mocha' test framework for the codes are operated well.
// 4. Add tests for other usecases.
// 5. Solve for 4 level.
// 6. Until complete to be fixed, repeat 4~5 levels.
describe("power", function() {
    for (let i = 1;i < 5;i++){
        for(let j = 1;j < 5;j++){
            it( "주어진 숫자 " + String(i) + "의 " + 
                String(j) + "제곱", function() {
                assert.equal( power(i, j), i ** j );
            });
        }
    }
});
