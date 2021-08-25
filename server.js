const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
//2xGh0A2qIIfb77Ao

//ROUTES
const postsRoutes = require('./routess/api/posts');

const app = express();

//BodyPArser Middleware
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Hello from node');
});
//Connect to MONGODB
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
 .then(() => console.log('MONGODB Connected'))
 .catch(err => console.log(err));

 //User routes
 app.use('/api/posts', postsRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server run at port ' + PORT));
