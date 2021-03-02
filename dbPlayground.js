const db = require('./models')


db.User.find({ name: 'Bobby'}, (err, response)=> {
    console.log(response)
})

// delete some Users with the name of 'Bobby')

// db.User.deleteMany({ name: 'Bobby' }, (err, response)=> {
//     console.log(response)
// })

// db.User.create({
//     name: 'Bobby',
//     email: 'Bobby@sue.com',
//     meta: {
//         age: 29,
//         website: 'BobbySue.com'
//     }
// }, (err, newUser)=> {
//     if (err) {
//         console.log(err)
//     }
//     console.log(newUser)
// })

// db.User.updateOne({ name: 'Bobby'}, { email: 'this is boby email'}, (err, updatedUser)=> {
//     if (err) console.log(err)
//     console.log(updatedUser)
// })

// updates all matching documents
// db.User.updateOne({ name: 'Bobby' }, { meta: { age: 1000 } }, function(err, user) {
//     if (err) console.log(err);
//     console.log(user);
//   });
