/*Ініціалізації фреймворка express i плагіна body-parser(розпарсує дані з метода .post()), метода path  */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Підключення sequelize
const sequelize = require("./helper/database");

/*Ініціалізація порта і обєкта(сервера) app */
const PORT = 8000;
const app = express();

/*Ініціалізація маршрутів(routes) */
const learnRoutes = require("./routes/learn");
const adminRoutes = require("./routes/admin");

// Controllers
const errorController = require("./controllers/errorController");

// Ініціалізація БД
// const db = require("./helper/database");

// Middleware
/*Підключення шаблонізатора */
//app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");/*тут треба пояснення */
app.use(bodyParser.urlencoded({ extended: false })); /*тут треба пояснення */
// Підключення папки static де зберігаються шрифти,css і т.п.
app.use(express.static(path.join(__dirname, "static")));

/*Скоріш за все що це підключення стилів */
app.use("/courses",express.static(path.join(__dirname, "static"))); /*тут треба пояснення */
app.use("/admin/courses",express.static(path.join(__dirname, "static"))); /*тут треба пояснення */
app.use("/admin/add-course",express.static(path.join(__dirname, "static"))); /*тут треба пояснення */

// Routes middleware
app.use("/admin", adminRoutes); /*тут треба пояснення */
app.use(learnRoutes);

/*Middleware for 404 Page not found */
app.use(errorController.get404);


sequelize
  .sync()
  .then((result) => {
    console.log("Sync result ==>>", result);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
