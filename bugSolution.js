```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({name: "John"}, {$inc: {age: 1}});
//Or, to handle potential errors, ensure age is a number
db.collection.updateMany({}, [{$set: {age: {$toInt: "$age"}}}, {$inc: {age: 1}}])
```