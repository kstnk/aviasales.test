const Pool = require('pg').Pool
const pool = new Pool({
    user: 'anatolii',
    password: 'fuckdapolice',
    host: 'localhost',
    port: 5432,
    database: 'userstest',
})

module.exports = pool