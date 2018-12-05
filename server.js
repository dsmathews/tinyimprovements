const express = require('express');

const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") { app.use(express.static('client/build')); }

// why is app being passed in here? 
require('./routes/api-routes')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kudos')

// const databaseUri = 'mongodb://localhost/kudos';

// if (process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI)
// } else {
//     mongoose.connect(databaseUri, { useNewUrlParser: true });
// }

// const db = mongoose.connection;
// db.on('error', function (err) {
//     console.log("Mongoose Error: ", err);
// });
// db.once('open', function () {
//     console.log("Mongoose connection successful.");
// });
// require('./models/kudos.js');
// require('./models/user.js');

app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}`);
});