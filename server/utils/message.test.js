var expect = require('expect')
var { generateMessage } = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {

        var obj = {
            from: 'Farid',
            text: 'Hello there!'
        };

        var res = generateMessage(obj.from, obj.text);

        expect(res).toMatchObject(obj);

        /* expect(res.from).toBe('Farid');
        expect(res.text).toBe('Hello there!'); */

        expect(typeof res.createdAt).toBe('number');

    });

});