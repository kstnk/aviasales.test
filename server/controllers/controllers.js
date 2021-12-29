const db = require('../db')

class UserController {
    async createUser(req, res) {
        const { email } = req.body
        const newUser = await db.query(`INSERT INTO avia (email) values ($1) RETURNING *`, [ email ])
        res.send(newUser.rows[0])
    }
    async getUser(req, res) {
        const { id } = req.params
        const user = await db.query(`SELECT * FROM avia where id = $1`, [id])
        res.json(user.rows[0])
    }
    async updateUserEmail(req, res) {
        const { id, email } = req.body
        const user = await db.query('UPDATE avia set email = $1 where id = $2 RETURNING *', 
        [email, id])
        res.json(user.rows[0])
    }
    async updateUserShared(req, res) {
        const { id, shared } = req.body
        const user = await db.query('UPDATE avia set shared = $1 where id = $2 RETURNING *', 
        [shared, id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()