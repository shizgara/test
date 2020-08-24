/*Підключення файлика з запросами до БД*/
const Course = require("../model/course");

/*Метод addCourseGet рендерить сторінку admin/add-course */
exports.addCourseGet = (req, res, next) => {
  res.render("admin/add-course");
};

/*Метод відловлює дані для додавання курсу */
exports.addCoursePost = (req, res, next) => {
  console.log(req.body);
  const title = req.body.title;
  const preview = req.body.preview;
  const course_program = req.body.course_program;
  const image = req.body.image;
  const description = req.body.description;
  const price = req.body.price;

  /*За допомогою метода create передаємо в БД(Course) дані які ввів користувач в полях  */
  Course.create({
    title: title,
    preview: preview,
    course_program: course_program,
    image: image,
    description: description,
    price: price,
  })
    .then((result) => {
      console.log("Add course resulr ==>>", result);
      console.log("Course added");
      res.redirect("/courses");
    })
    .catch((err) => console.log(err));
};

exports.getCourses = (req, res, next) => {
  Course.findAll()
    .then((curses) => {
      res.render("admin/courses", {
        title: "Perfect learning",
        welcomeToEdu: "Loraem ipsum",
        applyToAdmission: "Lorem ipsum 2",
        research: "Lorem ipsum 3",
        footerText: "Fotter text",
        address: "Riven Riven",
        phone: "092586221",
        email: "abkcsd@fgdfg.com",
        date: new Date().getFullYear(),
        /*даний ключ передає дані з БД в courses.ejs */
        courses: curses,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteCourse = (req, res, next) => {
  const courseID = req.params.id;
  Course.findByPk(courseID)
    .then((courses) => {
      /*Метод destroy() - видаляє курс */
      return courses.destroy();
    })
    .then((result) => {
      console.log("Course Deleted");
      res.redirect("/admin/courses");
    })
    .catch((err) => console.log(err));
};
