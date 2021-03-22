//https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// n=7
// ar=[1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer n, the number of socks represented in ar .
// The second line contains n space-separated integers, ar[i] , the colors of the socks in the pile.

function sockMerchant(n, ar) {
    //create counter
    let counter = 0
    //so that we are not permanently changing the argument array...
    //create new sorted array containing the argument array, using spread operator
    let sortedAr = [...ar].sort()
    //iterate over the new array
    for (let i=0; i < sortedAr.length; i++) {
      //if the index we are at equals the next index...
      if (sortedAr[i] === sortedAr[i+1]) {
        //add 1 to the counter
        counter ++
        //remove the index we are at
        sortedAr.splice(i,1)
      }
      }
    //return the number on the counter
    return counter
  }
  
  sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])
  //3