// підключили метод express і express.router()

const express = require("express");
const router = express.Router();

/* створили знімму в яку передаються дані(методи) з файла learnController і описує шлях
до learnController*/
const learnController = require("../controllers/learnController");

// Роути які віддають методи при зверненні на той чи інший роутер
router.get("/", learnController.getHome);
router.get("/about", learnController.getAbout);
router.get("/contact", learnController.getContact);
router.get("/courses", learnController.getCourses);
// Як тут йде привязка по id?
router.get("/courses/:id", learnController.getCourseByID);

module.exports = router;
