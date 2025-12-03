const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://sheikhsumaya622_db_user:1mwrxLCTgW2zKMK1@cluster1.jsrwa3p.mongodb.net/flowerDB?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Flower schema
const flowerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    color: String,
    description: String,
    origin: String,
    pictures: [String],
    speciality: String
});

const Flower = mongoose.model('Flower', flowerSchema);

// API route to get all flowers
app.get('/flowers', async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.json(flowers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
