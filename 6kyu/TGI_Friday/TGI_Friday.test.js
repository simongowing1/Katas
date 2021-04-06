import { expect, it } from '@jest/globals'
import { number } from 'yargs'
import {lastDayIsFriday} from './TGI_Friday'

describe('TGI_Friday', () => {
    describe('Returns the number of times a month ends with a Friday.', () => {
        
        it('returns 171 when between 1901 and 2000', () => {
            expect(lastDayIsFriday(1901, 2000)).toEqual(171)
        })
        it('returns 200 when between 1991 and 2017', () => {
            expect(lastDayIsFriday(1901, 2017)).toEqual(200)
        })
        it('returns 1 when 1991', () => {
            expect(lastDayIsFriday(1991)).toEqual(1)
        })
        it('returns 2 when 2017', () => {
            expect(lastDayIsFriday(2017)).toEqual(2)
        })
    })
})