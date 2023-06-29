const attendance = require('../modals').attendance;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const addAttendance = async (req, res, next) => {
    attendance.insertMany(req.body, (err, result) => {
            if (result) {
                res.send({message: 'Added Successful', data: result, status: 200});
            } else {
                res.send({message: 'Something want wrong!', data: err, status: 404});
            }    
    })
}

const getStudentAttendanceDetails = async (req, res, next) => {

    attendance.aggregate(
        [
            { $match: { studentId: ObjectId(req.params.id) } },
            {
                $group: {
                    _id: { $month: '$date' },
                    attendance: { $push: "$$ROOT" }
                }
            }
        ]
    ).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Err', data: err, status: 200});
        }
    })
}

module.exports = { addAttendance, getStudentAttendanceDetails }