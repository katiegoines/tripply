# Tripply

*An app that helps users create itineraries for their vacations.*

Here at Sockaputa headquarters we attribute our success to us always taking a step back and asking ourselves, how can we improve the world. With this motto in mind, the concept of Tripply was born. We know planning a vacation can be stressfull. Not anymore. Tripply is designed to help you create a detailed itinerary for your upcoming vacation. Most importantly, it is fully scalable. To begin a user clicks on "Sign Up" to create an account. Once signed in a user will be directed to thier profile page. They can then create a trip, by clicking "Plan Trip". After filling out the necessary trip details, you will be directed to the trip page, where you can then create new activities for your trip. You are given the option of either creating your own activity, or to use a Yelp API to suggest possible activities in your area. You can then view the location of a specific activity with the Google Maps API. If you would like to see the forecast for the location you are traveling to, simply click on the "show forecast" button. Both your trips and activities will be organized by date and time. Once you have filled out your itinerary you are on your way to a productive,exciting, well earned vacation. Happy travels!

[Check out Tripply](https://gotripply.herokuapp.com/)



## Collaborators

- Katie Goines  ([katiegoines](https://github.com/katiegoines))
- Cole Herzer ([coleherzer](https://github.com/coleherzer))
- Philip Karz  ([philipkarz](https://github.com/philipkarz))
- Jason Rouse  ([jrrouse88](https://github.com/jrrouse88))
- ​



## Technologies Used

- HTML
- CSS
- JavaScript
- AJAX
- Bootstrap 
- Node.JS
- Yelp API
- Google Maps API
- OpenWeatherMaps API

**NPM packages**
bcrypt-nodejs, body-parser, bootstrap-datepicker, connect-flash, connect-mongodb-session, cookie-parser, dotenv, ejs, express, express-ejs-layouts, express-session, method-override, mongoose, morgan, passport, passport-local, request, yargs, yelp-fusion



## Approach Taken
Each day, all four of the Sockapoota members would assemble and take upon ourselves the necessary tasks of the day

1. We first created the models
2. Created corresponding routes for CRUD
3. Made the individual views
4. Incorporated Yelp, Google Maps and Weather API's
5. Added CSS/Bootstrap 
6. Stay late and drink beer



#### Division of Tasks
- Project Manager - Katie
- Scrum Master - Jason
- API's - Katie(Yelp) and Jason(Maps) and Phil(Weather)
- Models - Phil and Cole
- CRUD for Trips User, and Activities - Everyone
- Design - Cole (calendar, homepage) Katie (font, alltrips view)
- Views - Everyone
- Presentation - Jason
- ReadMe - Phil



## Installation Instructions
- Go to Github, fork the repo
- Clone it 
- Do NPM install in terminal




## Planning Documentation

User Stories: https://trello.com/b/nZnU8Mt8/project-3-tripply

Wireframes: 
- Home page: https://wireframe.cc/EEopei
- Main user page: https://wireframe.cc/k2EUyp
- All trips page: https://wireframe.cc/EcsXVW

Data Models: https://ga-students.slack.com/files/U6GV09FK8/F7K3R5WCE/20171013_152815.jpg




## Unresolved Problems & Major Hurdles
- Working with API's was a challenge

- Creating, editing and deleting models through AJAX was more difficult than we thought

- - Dealing with github was insanity. The process of making sure no one elses code conflicted with another team members was not easy


  ​



## Future Features
- A registered user should be able to search other APIs (in addition to Yelp), to populate activities, i.e. TripAdvisor

- A registered user should be able to decide whether or not they want their trip to be public

- When clicked into activity details, a user should be able to see a map of the location of the activity

- When clicked into a trip, a user should be able to see weather for the location/time period of the trip

- A user can rate their experience of the activities they do (1-5 stars)

- A user can copy another users trip/activity to their itinerary

- A user can upload pictures of thier dope trip

- [See our Trello Icebox for a full list](https://trello.com/b/nZnU8Mt8/project-3-tripply)

  ​

# Shoutouts
- A big thanks to Katy for being an awesome project manager. She was the IronMan(woman) to our Avengers
-  to Phillipe for helping us out with the API's
-  thanks to Jimmy, Charles, Ryan, Chakrit and many others for thier help with any problems we ran into



## Technical Requirements

Your **team** must:

- **Come up with an idea as a team, and confirm the idea with an instructor to make sure it's challenging enough as well as within the scope of the allowed time.**
- **Document your app's RESTful API**.
- **Craft thoughtful user stories together**, as a team, and manage and distribute those user stories to team members based on skills and interests using **Trello**.
- **Manage team contributions and collaboration** using Git, GitHub and a standard team work-flow.
- **Present the app at the end of the sprint** as a team.
- **Perform a team-wide retro** and at least one **code-review** after the completion of the sprint.

Your app must:

- Use **MongoDB & Express** to CRUD your data.
- **Produce a RESTful API that exposes at least one model**.
- **Consume its own API using AJAX if there's a single page application component to it.**
- **Authenticate users using at least one OAuth provider**.
- **Restrict access to the Creation, Updating & Deletion of resource(s) using an authorization middleware function**.
- Be **deployed online** using **Heroku**.

