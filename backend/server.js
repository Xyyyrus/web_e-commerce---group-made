require('express-async-errors');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConn');
const corsOptions = require('./config/corsOptions');
const offersRoutes = require('./routes/offers');
const tradeItemsRoutes = require('./routes/tradeItem');
const bidsRoutes = require('./routes/bids');
const faqsRoutes = require('./routes/faqs');

const buyerRoutes = require('./routes/buyerRoutes')
const cartRoutes = require('./routes/cartRoutes');

const PORT = process.env.PORT || 5000;

// Load config
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(cors(corsOptions));

// Init Middleware
app.use(express.json());

// Use the routes
app.use('/routes', offersRoutes);
app.use('/routes', tradeItemsRoutes);
app.use('/routes', bidsRoutes);
app.use('/routes', faqsRoutes);

app.use('/buyers', buyerRoutes);;
app.use('/cart', cartRoutes);;

app.use('/auth', require('./routes/authRoutes'));
app.use('/admins', require('./routes/adminRoutes'));
app.use('/users', require('./routes/userRoutes'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
