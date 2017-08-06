/**
 * @author Sven Koelpin
 */


//const databaseProvider= require('../db/DatabaseProvider');
//const r = require('rethinkdb');
const database = require('../db/Database');
const TABLE_NAME = database.getTweetsTable();


const getSensors = (start, size) => {
    //const connection = database.getConnection();
  //  const dbResult = await r.table(TABLE_NAME).run(connection);
    // const sensors = database.getSensors();
    // const sortedSensors = sensors.sort((a,b)=>a.id>b.id).slice(start*size+size);

    //TODO: Return all tweets (use the fakeDataBase)
    //- sorted by id (desc) (Hint: use the array.sort-function, e.g. [1,2,3].sort((a,b)=>a<b))
    //- use the given start + size parameters to create a sub-array (Hint: use the array.slice-function)
    return sortedSensors;
};

// const getTweet = id => {
//     const tweetId = parseInt(id, 10);

//     const tweets = fakeDataBase.getTweetsTable()
//     tweets.find(a.id == tweetId);
//     //TODO return a single tweet by it's tweetId
//     //- Hint: use the array.find-function
//     return null;
// };

// const countTweets = () => {
//     //TODO: return the count of all tweets (TIP: use array.length)
//     return fakeDataBase.getTweetsTable.length;
// };

// const createTweet = tweet => {
//     //TODO
//     tweet.id = fakeDataBase.getTweetsTable().length+1;
//     fakeDataBase.getTweetsTable().push(tweet);
//     //- add the tweet to the database (Hint: use array.push)
//     //- set the id of a tweet BEFORE adding it
//     //- return the created tweet
//     return tweet;
// };


module.exports = {
    getSensors
};
