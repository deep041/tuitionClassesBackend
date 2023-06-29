const result = require('../modals').results;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const addResult = async (req, res, next) => {
    result.insertMany(req.body, (err, result) => {
            if (result) {
                res.send({message: 'Added Successful', data: result, status: 200});
            } else {
                res.send({message: 'Something want wrong!', data: err, status: 404});
            }
    })
}

const getStudentResultDetails = async (req, res, next) => {
    result.aggregate(
        [
            { $match: { studentId: ObjectId(req.params.id) } },
            {
                $group: {
                    _id: { subject: '$subject' },
                    result: { $push: "$$ROOT" }
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

module.exports = { addResult, getStudentResultDetails }