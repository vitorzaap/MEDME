import mysql from "mysql2/promise";

const con = await mysql.createConnection({
	host: "us-cdbr-east-06.cleardb.net",
	user: "b0ede638fc1920",
	password: "3dee67fa",
	database: "heroku_f569236ee4e3c79",
});
export { con };
