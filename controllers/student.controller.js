const student = require('../modals').student;

const getAllStudents = async (req, res, next) => {
    const allStudents = await student.find();
    res.send({ message: 'Data retrieve successfully!!', data: allStudents, status: 200});
}

// const addStudent = async (req, res, next) => {
//     student.create(req.body, (err, result) => {
//         res.send('Added Successful');
//     });
// }

const classWiseStudents = async (req, res, next) => {
    console.log(req.params.id);
    const students = await student.find({'class': req.params.id});
    res.send({ message: 'Data retrieve successfully!!', data: students, status: 200 })
}

const getStudentDetails = async (req, res, next) => {
    console.log(req.params.id);
    await student.findOne({'_id': req.params.id}).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Data not retrieved', data: result, status: 404});
        }
    });
}

module.exports = { getAllStudents, classWiseStudents, getStudentDetails }