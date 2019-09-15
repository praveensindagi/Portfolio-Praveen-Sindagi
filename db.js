const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:pioxno@postgres.localhost:3455'
const pool = new Pool({
  "host":"loacalhost",
  "user":"postgres",
  "password":"pioxno",
  "port":3455,
  "database":"postgres"
})
pool.query("insert into pioxno_user values ='$s1,$s2,["praveen","ervmkv"]")