# Bola app

Bola is a beach volleyball scheduling tool for games in the Lagos, Portugal area. It allows users to attend as well as organize beach volleyball games. It has a dashboard of all upcoming games as well as a personalised dashboards. Users can subscribe to games up to their level of experience. 



**Back End**

From the root folder, `cd` into the `/server` folder and run `npm i` in order to install all dependencies.

Before moving ahead, you will need to create mock users by running `npm run populate_db`.

Once all of the above is done, you can run `npm run` to run the server. 

**Front End**

From the `/server` folder, `cd ..` into the root folder and `cd` into the `/client` folder.

Once in the client folder, run `npm start` to run the React scripts and connect the front end. Since something is already running on port 3000, please reply "y" when asked to run the app on another port. It will default to 3001.

Once all of the above steps are taken, the app will open in the browser on localhost:3001.



<u>**Useful information**</u>

All info with regards to the Mongo database connection can be found in `/server/config.js`. Changes can be made in this file.

If you'd like to modify the users' details, this can be done in `/server/populate.js`.
