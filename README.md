# Kitchen Fable

[Kitchen Fable Live!](https://kitchenfable.herokuapp.com/)

Kitchen Fable is a single page app inspired by Open Table, which allows users to search for restaurants in 6 different cities, make reservations and save specific restaurants as they wish. This app was built with Ruby on Rails for the backend and React-Redux for the frontend, using PostgreSQL to manage the database.

## Technologies
* Backend: Ruby on Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* [ReactDayPicker API](http://react-day-picker.js.org/)
* [Google Maps API](https://developers.google.com/maps/documentation/)

## Key Features
* User authentication from frontend to backend ensures that the privacy of personal site use history is secured.
* Restaurants may be searched by typing in a name, city, or cuisine. 
* Signed in users may make reservations for restaurants, specifying the time, date, party size and occasion.
* Profile page shows history of reservations and saved restaurants.

### Search Homepage
No user log in is required to search and look up restaurants. Just type in a keyword for either name, city, or cuisine in the search bar.

### Sign up/Sign in
User may sign up or sign in on a modal styled form. Demo log in provides a quick way to experience the site.

### Restaurants
Search returns a list of restaurants relevant to the keyword entered. Click on the thumbnail or name to view restaurant.

![](https://media.giphy.com/media/lnmFlNRzZRDOl5VNcW/giphy.gif)

