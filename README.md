# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my Mentoring learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bigkings/lotide`

**Require it:**

`const _ = require('@bigkings/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `assertArrayEqual`: This function asserts if two arrays are equals
* `assertEqual`: This function asserts if two values are equal
* `assertObjectEqual`: This function asserts if two objects are equal
* `countLetters`: This function accepts a string and returns the count for each letter of a string and the number of times it occured
* `countonly`: This function accepts an array of strings and return counts for a subset of those string
* `eqArrays`: This function accepts two arrays and returns true or false based on their equality
* `eqObjects`: This function accepts two objects and returns true or false based on their equality
* `findKey`: This function accepts an object and a callback function and returns the first key that is a truthy
* `findKeyByValue`: This function accepts an object and a value and returns the first key that contains a given value
* `head`: This function finds and returns the first element in an array
* `index`: This is an object with list of all the functions contained in this project
* `letterPositions`: This function accepts a string and returns an object with all the indices in the string where each character was found
* `map`: This function accepts an array and a callback function, it returns a new array with the results of calling the provided callback function on each element in the input array
* `middle`: This function finds and returns the middle element in an array
* `pig-latin`: This function turns an english word to pig latin by adding 'ay' at the end of each string
* `reverse`: This function takes in a string and return the retun form of the string
* `tail`: This function finds and returns the tail/end element in an array
* `takeUntil`: This function accepts an array and a callback function and runs each array element through the function, it returns an array with all the items from the original array until the callback provided returns a truthy value
* `without`: This function removes elements from an array
