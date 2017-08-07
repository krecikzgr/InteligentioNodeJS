

//const databaseProvider= require('../db/DatabaseProvider');

const database = require('../db/Database');
const r = require('rethinkdb');
const TABLE_NAME = database.getSensorsTable();


const getSensors = async (start, size) => {
  const connection = database.getConnection();
  const dbResult = await r.table(TABLE_NAME).run(connection);
 return dbResult.toArray();
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
