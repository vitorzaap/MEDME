import mysql from "mysql2/promise";

const con = await mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASS,
	database: process.env.DB,
});
export { con };
