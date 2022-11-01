const express = require('express');
const app = express();

const port = process.env.DB_PORT || '5432';
const host = process.env.DB_HOST || 'localhost';

const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: host,
    database: 'postgres',
    password: 'postgres',
    port: parseInt(port),
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
})

app.get('/hobbies', async(req, res) => {
    pool.query('SELECT * FROM hobbies', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result.rows);
        }
    });
});
app.get('/hobbies/:id', async(req, res) => {
    pool.query('SELECT * FROM hobbies WHERE hobby_id = ${req.params.id}', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result.rows);
        }
    });
});
app.get('/hobbies/avg', async(req, res) => {
    pool.query('SELECT AVG(hobby_id) FROM hobbies', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result.rows);
        }
    });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});