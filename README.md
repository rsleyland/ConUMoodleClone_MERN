# MoodleConUClone_MERN WIP

- MongoDB
- React
- Redux
- NodeJs
- ExpressJS
- httpOnlyCookie
- JWT

Clone of the course delivery platform my University (Concordia MTL) uses. Application has student, instructor and admin login/register functionality. 
Instructors can upload content which is delivered to students via course pages.

### Setup
- `git clone git@github.com:rsleyland/MoodleConUClone_MERN.git`
- `cd MoodleConUClone_MERN`
- `npm install`
- `npm start`


### Configuration:
.env file needs to be added and variables need to be filled - i.e DB connection uri, JWT secret, JWT expiry time
### Additional:
Uses npm package nodemon to automatically update node application when changes are made.

Use `npm install -g nodemon` to globally install nodemon package

otherwise change ln.7 in package.json to `"start" : "npm run server.js"`
