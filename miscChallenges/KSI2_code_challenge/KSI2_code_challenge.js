/* eslint-disable import/prefer-default-export */

export const list = {
  data: 1,
  next: {
  	data: 'hello',
    next: {
    	data: 1.12,
      next: {
      	data: 199,
        next: {
        	data: 'Klarna',
          next: {
          	data: '$',
            next: null,
          },
        },
      },
    },
  },
};

export function getLastNDataValues(list, n) {
  // declare the initial value to be the object
  let initialValue = list;
  // declare a blank array
  const dataValues = [];
  // while the initialValue is not null
  while (initialValue !== null) {
    // push the value of the data key into the dataValues array
    dataValues.push(initialValue.data);
    // reassign initialValue as initialValue.next
    initialValue = initialValue.next;
  }
  // return the last n number of values of the array
  return dataValues.slice(-n);
}

// STUPID HARD-CODING:

// return [initialValue.data, initialValue.next.data, initialValue.next.next.data]

// return [firstValue, secondValue, thirdValue]

//  const firstValue = list.next.next.next.data
// const secondValue = list.next.next.next.next.data
// const thirdValue = list.next.next.next.next.next.data
