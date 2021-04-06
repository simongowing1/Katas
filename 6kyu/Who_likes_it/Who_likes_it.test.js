import {likes} from './Who_likes_it'

describe('Who_likes_it', () => {
    describe('', () => {
        it('empty array returns "no one likes this"', () => {
            const array = []
            expect(likes(array)).toEqual('no one likes this')
        })
        it('one name in array returns "<name> likes this"', () => {
            const array = ['Peter']
            expect(likes(array)).toEqual('Peter likes this')
        })
        it('two names in array return "<name1> and <name2> like this"', () => {
            const array = ['Jacob', 'Alex']
            expect(likes(array)).toEqual('Jacob and Alex like this')
        })
        it('three names in array return "<name1>, <name2> and <name3> like this"', () => {
            const array = ['Max', 'John', 'Mark']
            expect(likes(array)).toEqual('Max, John and Mark like this')
        })
        it('more than three names in array return "<name1>, <name2> and <x> others like this"', () => {
            const array = ['Alex', 'Jacob', 'Mark', 'Max']
            expect(likes(array)).toEqual('Alex, Jacob and 2 others like this')
        })
    })
})

likes([])
  //'no one likes this');
  likes(['Peter'])
  //'Peter likes this');
  likes(['Jacob', 'Alex'])
  //'Jacob and Alex like this');
  likes(['Max', 'John', 'Mark'])
  //'Max, John and Mark like this');
  likes(['Alex', 'Jacob', 'Mark', 'Max'])
  //'Alex, Jacob and 2 others like this'