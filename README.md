# A-Speak

A-Speak application to assist individuals that are non-verbal or that have speech hurdles that would like to be addressed without breaking the bank. We hope to address the problems with the existing application like ours that it will be personalize to the child or the individual. EX: If a child associates a glass with a water bottle or a favorite cup our application will let the parent or speech therapist take a personal picture of the object and record in his/her voice. We will be using MongoDB to bring up personal preferences and React for the User Interface. Node and Express to communicate with the server to make it a full-stack application.

![A-Speak ScreenShot](https://user-images.githubusercontent.com/53452871/68089449-f09cae80-fe36-11e9-9ee7-0679393c0a60.PNG)

## Live Link

Find A-Speak [here]()

## Structure

The app is a React.js-based app utitilising full CRUD for users to personalize the boards to themselves and to their children. 

Upon login, user are directed to their board page, where they can either use the pre-made boards (that come with each account) or they are invited to make their own board. 

Their boards allow up to 10 pictures that the parents will take of their own objects. They will also be prompted to record sounds to go with each picture. 

When the board is made, they will be able to use it just like the pre-made ones. 

## Technologies

+ [MongoDB](https://www.mongodb.com/)
    - Document based database for storing user data.
+ [MONGOOSE ORM](https://www.npmjs.com/package/mongoose)
    - Handles object relational mapping for our MongoDB.
+ [EXPRESS](https://www.npmjs.com/package/express)
    - Back end API route handling
+ [REACT](https://reactjs.org/)
    - Dynamic views
+ [REACT ROUTER](https://reacttraining.com/react-router/)
    - Handling all view routes
+ [AXIOS](https://www.npmjs.com/package/axios)
    - Handling client side HTTP requests
+ [NODE](https://nodejs.org/en/)
    - Runtime environment for running JavaScript outside of the browser
+ [PASSPORT](http://www.passportjs.org/docs/username-password/)
    - User authentication
+ [MDBOOTSTRAP](https://mdbootstrap.com/)
    - Predefined CSS3 library
+ [POSE.CSS](https://popmotion.io/pose/learn/css-variables/)
    - Animation CSS3 library
    
#### Install and run locally
Install all the dependencies with Yarn or NPM <br>
`npm install` <br>
Make sure you start Mongod and have mongoDB running..<br>
`mongod <filepath to database>` <br>
`mongo` <br>
Then start the project <br>
`npm start`

