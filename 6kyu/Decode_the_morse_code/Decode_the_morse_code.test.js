import {decodeMorse} from './Decode_the_morse_code'

describe('Decode_the_morse_code', () => {
    describe('decodeMorse', () => {
        it('take the morse code as input and return a decoded human-readable string.', () => {
            const string = '.... . -.--   .--- ..- -.. .'
            expect(decodeMorse(string)).toEqual('HEY JUDE')
        })

    })
})