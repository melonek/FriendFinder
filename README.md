# FriendFinder
The deployed version can be found at the Heroku link:


This app was made for the purpose of finding new friends. Take few minutes to fill up the survey and find out who is the perfect match!

## Live Link
 - https://friendfinderappka.herokuapp.com/

## Usage of the app:

Step 1: Head to our website @ https://friendfinderappka.herokuapp.com/ <br>
Step 2: Once directed to the home page click on "Got to Survey" button.<br>
Step 3: You will be directed to the Survey and presented with 10 simple questions which will allow us to find a match!<br>
Step 4: The score based on your answers will be closely compared to other scores in our database.<br>
Step 5: The match is presented to you!<br>

## Requirements:

- App consists of seperate files: server logic, storing friends, views and routing. 
- App presents to user 10 unique questions.
- Server.js file uses help of the following: express, body parser, path and selected npm packages to be installed for app to function properly.
- SRouting consists of two seperate files (`htmlRoutes.js` and `apiRoutes.js`)
- Appropriate GET and POST routes for serving HTML pages and API.
- Friends.js file stores all the scores that will be compared to user's score. (`friends.js`)
-  Once the calculation is finished the user is presented with the closest match!

## Tools/Technologies Used:

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap

## Code Explanation
- Our `server.js` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- Our 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
- Friends are stored in the following format [array]:

```js
{
    name: "Arnold Schwarzenegger",
    photo:
      "https://www.insidehook.com/wp-content/uploads/2019/03/Arnold_Header_1496168849.jpg?fit=1200%2C750",
    scores: [2, 1, 2, 3, 4, 4, 5, 3, 2, 1]
  },
```
