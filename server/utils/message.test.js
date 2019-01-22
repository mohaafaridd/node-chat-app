var expect = require('expect')
var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {

        var obj = {
            from: 'Farid',
            lat: 5,
            lng: 7,
        }

        var res = generateLocationMessage(obj.from, obj.lat, obj.lng);

        expect(res.from).toBe(obj.from);
        expect(res.url).toBe(`https://www.google.com/maps?q=${obj.lat},${obj.lng}`)
        expect(typeof res.createdAt).toBe('number');

    })
})