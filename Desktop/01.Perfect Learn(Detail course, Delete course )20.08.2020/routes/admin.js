// підключили метод express і express.router()
//Спочатку метод express і тільки тобі підключаєм метод router(). Інакше працювати не буде

const express = require("express");
const router = express.Router();
/* створили знімму в яку передаються дані(методи) з файла adminController і описує шлях
до adminController*/
const adminController = require("../controllers/adminController");


/*Не ясно як працює цей роут. По логіці мало б бути admin/courses */
router.get("/courses", adminController.getCourses);
router.get('/add-course',adminController.addCourseGet);
router.post('/add-course',adminController.addCoursePost);
router.get('/courses/:id',adminController.deleteCourse);

module.exports = router;
