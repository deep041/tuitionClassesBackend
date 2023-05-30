const student = require('../modals').student;

const getAllStudents = async (req, res, next) => {
    const allStudents = await student.find();
    res.send(allStudents);
}

const addStudent = async (req, res, next) => {
    console.log(req.body);

    student.create(req.body, (err, result) => {
        res.send('Added Successful');
    });

}

module.exports = { getAllStudents, addStudent }