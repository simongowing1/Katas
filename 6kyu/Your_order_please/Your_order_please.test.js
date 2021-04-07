import {order} from './Your_order_please'

describe('Your_order_please', () => {
        it('re-orders the string based on the number contained in the word being the index', () => {
            const string = "is2 Thi1s T4est 3a"
            expect(order(string)).toEqual("Thi1s is2 3a T4est")
        })
        it('empty string returns an empty string', () => {
            const string = ''
            expect(order(string)).toEqual('')
        })
        it('re-orders the string based on the number contained in the word being the index', () => {
            const string = '4of Fo1r pe6ople g3ood th5e the2'
            expect(order(string)).toEqual('Fo1r the2 g3ood 4of th5e pe6ople')
        })
})