let friends = require("../data/friends");

module.exports = function(app) {
  app.get("../data/friends.js", function(req, res) {
    res.json(friends);
  });

  app.post("../data/friends.js", function(req, res) {
    let totalDifference = 0;
    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.userScores;

    let b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: " + userName);
    console.log("User score " + userScores);

    let sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of users score " + sum);
    console.log("Best match friend difference " + bestMatch.friendDifference);
    console.log("====++++++===========================++++++====");

    for (let i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Total difference " + totalDifference);
      console.log("Best match friend difference " + bestMatch);

      let bFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score " + bFriendScore);
      totalDifference += Math.abs(sum - bFriendScore);
      console.log("--------------------------------> " + totalDifference);

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);
    friends.push(userData);
    console.log("New User added");
    console.log(userData);
    res.json(bestMatch);
  });
};
