# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rshum/lotide`

**Require it:**

`const _ = require('@rshum/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of the array.
* `tail(array)`: removes the first element and returns the remaining elements of an array.
* `middle(array)`: returns the middle element of an odd array.  Returns 2 of the middle elements of an even array.
* `eqArrays(array1, array2)`: returns true if two arrays are equal, false if not
* `assertArraysEqual(array1, array2)`: console logs pass or fail when comparing two array objects.
* `assertEqual(input1, input2)`: console logs pass or fail when comparing two objects.