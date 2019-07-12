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

## Search, Sign-up/Sign-in, Restaurants Index
* No user log in is required to search and look up restaurants. Just type in a keyword for either name, city, or cuisine in the search bar.
* User may sign up or sign in on a modal styled form. Demo log in provides a quick way to experience the site.
* Search returns a list of restaurants relevant to the keyword entered. Click on the thumbnail or name to view restaurant.
<p align="center">
  <img width="600" height="350" src="https://github.com/sophiacheungshc/kitchen_fable/blob/master/app/assets/images/firstdemo.gif">
</p>

## Restaurant, Reservation, Save/Unsave
* Restaurant show page displays details about the restaurant.
<p align="center">
  <img width="600" height="350" src="https://github.com/sophiacheungshc/kitchen_fable/blob/master/app/assets/images/seconddemo.gif">
</p>

* Sign in to make a reservation. Choose a date (only future dates permitted), time, party size, and occasion. Click on bookmark icon to save or unsave.
<p align="center">
  <img width="600" height="350" src="https://github.com/sophiacheungshc/kitchen_fable/blob/master/app/assets/images/thirddemo.gif">
</p>

* User profile page shows history of reservations and saved restaurants.
<p align="center">
  <img width="600" height="350" src="https://github.com/sophiacheungshc/kitchen_fable/blob/master/app/assets/images/fouethdemo.gif">
</p>




