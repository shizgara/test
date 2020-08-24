// Підключили драйвер mysql2
const mysql = require("mysql2");

// // Підключили драйвер mysql2 і прописали підключення до БД
// const pool = mysql.createPool({
//   host: "localhost",
//   database: "e-learn",
//   user: "root",
//   password: "",
// });

// // Підключили драйвер mysql2
// module.exports = pool.promise();

/*Підключили Sequelize */
const Sequelize = require("sequelize");
/*Параметри: назва БД, імя користувача, пароль */
const sequelize = new Sequelize("e-learn", "root", "", {
  /*dialect - вказує який тип БД використовуємо. Тут MySQL*/
  dialect: "mysql",
  host: "localhost"
});


module.exports = sequelize;