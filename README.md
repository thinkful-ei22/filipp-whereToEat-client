# Where should we eat?
## Description
Have you ever had a difficult time deciding where to eat with a big group? Well I have, so I decided to create this small web application to help me with that.
Basically what it does:
One person goes to the website, enters the location of where they are trying to eat. The application creates a new unique session, which the individual can then share the given URL with the rest of the group. Every person in the group opens the URl, and they are brought straight to the input page of that specific session. All the people then enter a list of restaurants where they feel like eating today. After everyone is done adding to their list, then can go to the next page which gives them the result of all the restaurants entered for that specific session. The result page contains a name, address, telephone number, and rating of a restaurant. The users are also given a link to the YELP page of the restaurant and a link for directions to that restaurant. The restaurant is picked based on the location entered by the original person who created the session, and based on the most popular restaurant that has been added from all of the people. If there are two or more restaurants tied for first place, one of them is picked at random. I get the restaurant information using YELP API.
**Done!** Go eat out, have fun, and enjoy your food.

## Link to my deployed version on Heroku: https://filippwheretoeatclient.herokuapp.com/

## Screenshots
**Landing Page**
![image](/README_PICS/landing-page.png)
**Input Page**
![image](/README_PICS/input-page.png)
**Results Page**
![image](/README_PICS/result-page.PNG)

## Tech Stack
- Front End:
  - Enzyme: For testing
  - React
  - Redux
  - react-copy-to-clipboard: Easy way to copy things to clipboard
  - uuid: Creates unique session ids for users, to seperate data by user
- Back End:
  - Express
  - Mongoose/MongoDB: Database
  - Node
  - Node-fetch

## Key Code Parts
**Front End**
This application does not have many components, and they are all located under src/components/.
- main-page: My landing page. The user enters the location, when they click to continue the location is stored and they are briefly taken to /new-session.
- new-session: User spends almost no time on this page. Whenever the page mounts it takes a unique id and creates a session using the id and the location entered by the user, and then it redirects them to /:sessionId/:location.
- session-page: This is where all the input goes. Upon opening this page each user is given a UUID, and they are shown data only that they have entered. Everytime they add a place it makes a request to the back end to post to a mongo database. Users can also delete things from their list. After they are satisfied with the places they have entered they can click to continue to be taken to /results-page
- results-page: Upon mounting, this component contacts the back end to receive the result, plucks out the needed data and puts it onto the page.
**Back End**
Link to my back end github: https://github.com/thinkful-ei22/filipp-whereToEat-server
Pretty straight forward. Have my models and routes. Have only two models: one for all the entered places and one for the created sessionIds. Have 3 different routes. places.js containts 3 requests while the other routes only have one.

# Thanks for checking out my project!