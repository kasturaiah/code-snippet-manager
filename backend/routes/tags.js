const express = require('express');
const db = require('../database');
const router = express.Router();

async function fetchTagsFromDb() {
  try {
    // If you have a database.js that exports a db connection, try that:
    // const db = require('../database');
    // return db.prepare('SELECT name FROM tags').all().map(r => r.name);

    // If you use an async DB call, call it and return array.
    // Replace the following placeholder with your real DB code.
    return []; // fallback empty array — replace with real query.
  } catch (err) {
    console.error('fetchTagsFromDb error:', err);
    throw err;
  }
}

router.get('/', async (req, res) => {
  try {
    console.log('GET /api/tags');
    const tags = await fetchTagsFromDb();

    if (!Array.isArray(tags)) {
      console.warn('/api/tags result not array — returning empty array', tags);
      return res.json([]);
    }
    return res.json(tags);
  } catch (err) {
    console.error('Error in GET /api/tags:', err);
    return res.status(500).json({ message: 'Server error fetching tags' });
  }
});

module.exports = router;