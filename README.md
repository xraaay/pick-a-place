# Pick A Place

### Made to help indecisive people choose a place to eat.
Utilizes Yelp's API to generate recommendations for restaurants with parameters for location, distance, price and search term.

## Features
 
#### Roll The Dice

Generates 3 random restuarants within 5 miles of current location.
Also allows for customized search with user-defined parameters.
  
#### Would You Rather

Uses user-defined search query to generate two restaurants that the user can then choose their preference. Upon user input, a new restaurant replaces the restaurant that was not chosen

#### Waitlist
 
Retrieves all comments tied to that specific restaurant that contain the keyword "wait".
Allows users to see what other restaurant goer's have said about the wait time.

---

#### To Do

 - Currently, user-defined settings are not user-specific.
 - History of chosen restaurants tied to users.
 - Add additional pictures or descriptions to results
 - Add would you rather for default search
 - Navigate from Search Form to Roll The Dice
 - Highlight wait keyword in waitlist
 
#### Non-DB Build
 - Separate branch for non-DB build
  - Set settings into local storage
  - Remove users
  - Replace API calls with Redux
  - Send client to RTD or WYR from search without pulling from a DB
  - Split non-db to it's own repo
