const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'qweasdzxc',
  host: 'localhost',
  port: 5432,
  database: 'perntstodo',
});

module.exports = pool;
