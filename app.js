const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { primaryColor: '#6901FF', secondaryColor: 'white' });
});

app.get("/thankyou", (req, res) => {
  res.render('thankyou');
});

app.post('/submit', (req, res) => {
  // Handle form submission here
  console.log(req.body); // Log form data to console for now
  res.render('thankyou');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
