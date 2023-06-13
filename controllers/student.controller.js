const student = require('../modals').student;

const getAllStudents = async (req, res, next) => {
    const allStudents = await student.find();
    res.send({ message: 'Data retrieve successfully!!', data: allStudents, status: 200});
}

const addStudent = async (req, res, next) => {
    student.create(req.body, (err, result) => {
        res.send('Added Successful');
    });
}

const classWiseStudents = async (req, res, next) => {
    const students = await student.find({'class': '12-A'});
    res.send({ message: 'Data retrieve successfully!!', data: students, status: 200 })
}

module.exports = { getAllStudents, addStudent, classWiseStudents }