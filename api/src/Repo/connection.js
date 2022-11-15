import mysql from "mysql2/promise";

let con = await mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
});
con.connect(async function(err) {
	if (err) {
		return console.error('error: ' + err.message);
		con = await mysql.createConnection({
			host: process.env.DATABASE_HOST,
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
		});
	}
  
	console.log('Connected to the MySQL server.');
  });
export { con };
