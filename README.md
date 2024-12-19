# MongoDB $inc Operator Error with String Field
This repository demonstrates an uncommon error in MongoDB when using the `$inc` operator with a string field.  The `$inc` operator is designed to increment numeric fields. Attempting to use it on a string field results in an error.

## Bug
The `bug.js` file contains code that incorrectly attempts to increment a string field using `$inc`.

## Solution
The `bugSolution.js` file provides the corrected code, ensuring that the field being incremented is of the correct numeric type.