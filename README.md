SEVN Stack application for listing and viewing properties: houses, apartments, others.

I'd love to hear any comments, insights or tips about my code or its quality.

`````````````
Front-end: Vuejs, Vuex, Vue-router, Vuetifyjs, Axios.
Back-end: Node.js, Express, Axios, Bcryptjs, Sequelize, Multer.
Database: SQLite.

If you'd like to test the app feel free to clone.

Commands:
client => 'npm run dev' Client will be running on port 8080
server => 'npm run start' Server will be running po port 8082
Client side will be missing a config.js file with Google API key, please use your own.


Currently added:
Registration and Login systems, hashed using bcryptjs.
Authentication using jwt.
RESTful API for listings.
Mostly flashed out UI.
Simple query/search system for listings.
Google Maps API to display listings.
Tracked view counts on listings.
Bookmarking with visual display in UI.
User profile.
Fully implemented multi-image upload, front and back end.

To-do list:
Protected API routes.
Animations, other UX features.
Flash out single listing page to actually show some meaningful info.
Expand search.
Visualise some dummy data with charts.js or D3.js.

