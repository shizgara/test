/*Підключили молель(MODEL) courses */
const Courses = require("../model/course");
/*Підключили data */
const data = require("../helper/data");
const Course = require("../model/course");

// Створюємо метод getHome,який рендерить сторінку index і передає дані з обєкта data
exports.getHome = (req, res, next) => {
  res.render("index", {
    title: "Perfect learning",
    welcomeToEdu: "Loraem ipsum",
    applyToAdmission: "Lorem ipsum 2",
    research: "Lorem ipsum 3",
    footerText: "Fotter text",
    address: "Riven Riven",
    phone: "092586221",
    email: "abkcsd@fgdfg.com",
    date: new Date().getFullYear(),
  });
};

// Створюємо метод getAbout,який рендерить сторінку index і передає дані з обєкта data
exports.getAbout = (req, res, next) => {
  res.render("about", {
    title: "Perfect learning",
    welcomeToEdu: "Loraem ipsum",
    applyToAdmission: "Lorem ipsum 2",
    research: "Lorem ipsum 3",
    footerText: "Fotter text",
    address: "Riven Riven",
    phone: "092586221",
    email: "abkcsd@fgdfg.com",
    date: new Date().getFullYear(),
  });
};

// Створюємо метод getAbout,який рендерить сторінку index і передає дані з обєкта data
exports.getContact = (req, res, next) => {
  res.render("contact", {
    title: "Perfect learning",
    welcomeToEdu: "Loraem ipsum",
    applyToAdmission: "Lorem ipsum 2",
    research: "Lorem ipsum 3",
    footerText: "Fotter text",
    address: "Riven Riven",
    phone: "092586221",
    email: "abkcsd@fgdfg.com",
    date: new Date().getFullYear(),
  });
};

// Створюємо метод getCourse,який рендерить сторінку courses і передає дані з обєкта data 
// та метод Courses.fetchAllCourses()
exports.getCourses = (req, res, next) => {
  Courses.findAll()
    .then((curses) => {
      res.render("courses", {
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

// Створюємо метод getCourseByID,який рендерить сторінку courseDetail і передає дані з обєкта data 
// та метод fetchSingleCourse().
// exports.getCourseByID = (req, res, next) => {
//   /*Створили змінну courseID і їй присвоїли № id з БД, тобто вичислили по якому курсу, тобто кнопці
//   Detail клікнув юзер*/
//   const courseID = req.params.id;
//   // console.log(req)
//   /*Запустили метод паметром якого є Id курсу. Метод виводить сторінку
//    courseDetail і решту даних*/
//   Courses.fetchSingleCourse(courseID)
//     .then(([rows, fieldData]) => {
//       res.render("courseDetail", {
//         title: "Perfect learning",
//         welcomeToEdu: "Loraem ipsum",
//         applyToAdmission: "Lorem ipsum 2",
//         research: "Lorem ipsum 3",
//         footerText: "Fotter text",
//         address: "Riven Riven",
//         phone: "092586221",
//         email: "abkcsd@fgdfg.com",
//         date: new Date().getFullYear(),
//         /*що це за ключ?? */
//         course: rows[0],
//       });
//     })
//     .catch((err) => console.log(err));
// };



exports.getCourseByID = (req, res, next) => {
    /*Створили змінну courseID і їй присвоїли № id з БД, тобто вичислили по якому курсу, тобто кнопці
    Detail клікнув юзер*/
    const courseID = req.params.id;
    // console.log(req)
    /*Запустили метод паметром якого є Id курсу. Метод виводить сторінку
     courseDetail і решту даних*/
    Course.findByPk(courseID).then((course)=>{
      res.render("courseDetail", {
                title: "Perfect learning",
                welcomeToEdu: "Loraem ipsum",
                applyToAdmission: "Lorem ipsum 2",
                research: "Lorem ipsum 3",
                footerText: "Fotter text",
                address: "Riven Riven",
                phone: "092586221",
                email: "abkcsd@fgdfg.com",
                date: new Date().getFullYear(),
                /*що це за ключ?? */
                course: course,
    }).catch((err)=>console.log(err))
  });}
  