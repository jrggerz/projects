const {Pool} = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database:'firstapi',
    port: '5432'
});
const getUser = async (req, res) => {
    const response = await pool.query('SELECT * FROM myshcema.users');
    res.status(200).json(response.rows);
}
const createUser = async (req, res) => {
    const {name, email} = req.body;
    const response = await pool.query('INSERT INTO myshcema.users(name, email) VALUES ($1 ,$2)', [name, email]);
    res.status(200).json({
        message: 'User added',
        body: {
            user:{name, email}
        }
    });

}
const getUserbyId = async (req, res) => {
    const id = req.params.id;
    console.log(req.params.id);
    const response = await pool.query('SELECT * FROM myshcema.users WHERE id = $1', [id]);
    console.log(response.rows);
    res.json(response.rows);
}
module.exports = {getUser, createUser, getUserbyId}