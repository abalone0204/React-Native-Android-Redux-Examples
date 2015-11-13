jest.autoMockOff();

describe('reducers/todo.js', function() {
    var reducer;

    function initState() {
        return {
            todo: [],
            visibilityFilter: 'SHOW_ACTIVE'
        }
    }

    function prevState() {
        return {
            todo: [{
                text: 'first',
                completed: false
            }, {
                text: 'second',
                completed: true
            }, ],
            visibilityFilter: 'SHOW_ACTIVE'
        }
    }
    beforeEach(function() {
        reducer = require('../todo.js');
    });
    it('should have a init state', function() {
        const action = {
            type: 'zzz'
        };
        const result = reducer(initState(), action);
        expect(result).toEqual({
            todo: [],
            visibilityFilter: 'SHOW_ACTIVE',
        });
    });
    it('should handle ADD_TODO', function() {
        const action = {
            type: 'ADD_TODO',
            text: 'nothing'
        };
        const result = reducer(initState(), action);
        expect(result).toEqual({
            todo: [{
                text: 'nothing',
                completed: false
            }],
            visibilityFilter: 'SHOW_ACTIVE'
        });
    });
    it('should handle REMOVE_TODO', function() {
        const action = {
            type: 'REMOVE_TODO',
            index: 1
        };
        const result = reducer(prevState(), action);
        expect(result).toEqual({
            todo: [{
                text: 'first',
                completed: false
            }],
            visibilityFilter: 'SHOW_ACTIVE'
        });
    });
    it('should handle COMPLETE_TODO', function() {
        const action = {
            type: 'COMPLETE_TODO',
            index: 1
        };
        const result = reducer(prevState(), action);
        expect(result).toEqual({
            todo: [{
                text: 'first',
                completed: false
            },{
                text: 'second',
                completed: true
            }],
            visibilityFilter: 'SHOW_ACTIVE'
        });
    });
    it('should handle visibilityFilter', function () {
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_ALL'
        }
        const result = reducer(initState(), action);
        expect(result).toEqual({
            todo: [],
            visibilityFilter: 'SHOW_ALL'
        });
    });

});