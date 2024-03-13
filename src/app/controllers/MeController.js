const Course = require('../models/Course');

class MeController {
    storedCourses(req, res, next) {
        let courseData = Course.find().lean();

        if (req.query.hasOwnProperty('_sort')) {
            courseData = courseData.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([
            courseData,
        ])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses.hbs', {
                    deletedCount: deletedCount,
                    courses: courses,
                });
            })
            .catch(next);
    }
    trashCourses(req, res, next) {
        let courseData = Course.findDeleted().lean();

        if (req.query.hasOwnProperty('_sort')) {
            courseData = courseData.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([
            courseData,
        ])
            .then(([courses, deletedCount]) => {
                res.render('me/trash-courses.hbs', {
                    deletedCount: deletedCount,
                    courses: courses,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
