import mysql from "mysql2/promise";

const con = await mysql.createConnection({
	user: process.env.USER,
	password: process.env.PASS,
	database: process.env.DB,
});
export { con };
