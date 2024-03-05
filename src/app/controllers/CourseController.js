const Course = require('../models/Course');

class CourseController {
    show(req, res, next) {
        Course.findOneAndDelete({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    creat(req, res, next) {
        res.render('courses/creat');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }
}

module.exports = new CourseController();
