// /*Підключення до database */
// const db = require("../helper/database");

// /*Експортуємо(також створюємо) класс(ніби свій окремий тип даних) Course
// Тут буде відбуватися звернення до БД */
// module.exports = class Course {
//   /*Створення статично метода fetchAllCourses(це назва метода) */
//   static fetchAllCourses() {
//     /*Підключення до бази db і застосування до нього метода execute(виконати) */
//     return db.execute("SELECT * FROM course");
//   }
//   /*Підключення до бази db і застосування до нього метода execute(виконати) з вибіркою по id,
//   тобто вибираємо все поле по певному id */
//   static fetchSingleCourse(id) {
//     return db.execute("SELECT * FROM course WHERE id=" + id);
//   }
// };

/*Підключення до database і zequelize */
const Sequalize = require("sequelize");
const sequelize = require("../helper/database");


/*Створюємо табличку course і описуємо всі поля */
const Course = sequelize.define("course", {
  /*Яке поле створюємо, в даному випадку id */
  id: {
    /*Який тип даного поля. Тут INTEGER */
    type: Sequalize.INTEGER,
    /*Присутній autoIncrement(автозбільшення на 1)*/
    autoIncrement: true,
    /*Дане поле не може мати значення 0*/
    allowNull: false,
    /*Дане поле має позначку primaryKey(основне поле)*/
    primaryKey: true,
  },
  title: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  preview:{
    type: Sequalize.STRING,
    allowNull:false,
  },
  course_program:{
    type: Sequalize.TEXT,
    allowNull:false,
  },
  image:{
    type: Sequalize.STRING,
    allowNull: false,
  },
  description:{
    type: Sequalize.TEXT,
    allowNull: false,
  },
  price:{
    type: Sequalize.DOUBLE,
    allowNull: false,
  }
});

module.exports = Course;
