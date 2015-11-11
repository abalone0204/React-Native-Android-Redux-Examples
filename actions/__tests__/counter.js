jest.setMock('react-native', {});
jest.dontMock('../counter.js');
describe('Actions', function () {
    describe('counter.js', function() {
        beforeEach(function() {
            let actions = require('../counter.js');
        });
        it('should return increment action', function (done) {
           let action = actions.increment; 
           expect(action()).to.eq(2);
        });
    });
});