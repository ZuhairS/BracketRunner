# BracketRunner

Link to Demo Page

**Gif/Image**

## Background

## Technologies

## Features

### Zach Greathouse

### Nick Whitson

### Ali Haq

### Zuhair Shaikh

#### Waiting for a Promise

One of the features that we really wanted was for the app to automatically realize when a registered user was entered as a player in a tournament bracket. Doing so would allow us to have easy access to related information, such as their profile image, on the frontend.

This of course involves checking whether the user with the supplied username exists in the database. The problem arises when you are trying to make those asynchronous checks for all entrants before creating the required bracket.

While not the most elegant solution, the one I implemented involved collecting all those queries in an array and using `Promise.all` to wait for them to complete before setting them up as needed.

```javascript
// server/controllers/brackets_controller.js

Promise.all(userQueries(bracketProps.entrants))
  .then(users => {

    // Setup entrants to be used on the frontend
    bracketProps.entrants = {};
    users.forEach((user) => {
    bracketProps.entrants[user.username] = user;
  });

  // Finally create the bracket
  Bracket.create(bracketProps)
    .then(bracket => res.send(bracket))
    .catch(next);
  });
```

```javascript
// server/controllers/brackets_controller.js

const userQueries = entrants => {
  const promiseArr = [];

  for (let i = 0; i <= Object.keys(entrants).length; i++) {

    // Collect the queries then create respective user objects
    promiseArr.push(
      User.findOne({ username: entrants[i] }).then(
        user => (entrants[entrants[i]] = user ? user : { /* dummy user object */ })
      )
    );
  }
  return promiseArr;
};
```

###### Note: MongoDB queries are not actually promises. Mongoose.js, which acts as a wrapper for MongoDB, provides queries that have promise like properties. Which is why we can chain `.then`'s onto them and have them work the way we expect.

## Looking forward

## Developers

#### Zach Greathouse

[Github](https://github.com/zgreathouse) | [Linkedin](https://www.linkedin.com/in/zachary-greathouse-11345813b/)

#### Nick Whitson

[Github](https://github.com/newhitson) | [Linkedin](https://www.linkedin.com/in/newhitson/)

#### Ali Haq

[Github](https://github.com/alimhaq) | [Linkedin](https://www.linkedin.com/in/ali-haq-85825821)

#### Zuhair Shaikh

[Github](https://github.com/ZuhairS) | [Linkedin](https://www.linkedin.com/in/zuhairshaikh/)
