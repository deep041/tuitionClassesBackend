const student = require('../modals').student;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getAllStudents = async (req, res, next) => {
    // const allStudents = await student.find();
    // res.send({ message: 'Data retrieve successfully!!', data: allStudents, status: 200});

    student.aggregate(
        [
            {
                $group: {
                    _id: '$class',
                    students: { $push: "$$ROOT" }
                }
            },
            { $sort: { "_id": 1 } }
        ]
    ).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Err', data: err, status: 200});
        }
    })
}

// const addStudent = async (req, res, next) => {
//     student.create(req.body, (err, result) => {
//         res.send('Added Successful');
//     });
// }

const classWiseStudents = async (req, res, next) => {
    const students = await student.find({'class': req.params.id,'batch': req.query.batch});
    res.send({ message: 'Data retrieve successfully!!', data: students, status: 200 })
}

const getStudentDetails = async (req, res, next) => {
    await student.findOne({'_id': req.params.id}).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Data not retrieved', data: result, status: 404});
        }
    });
}

const getStudentAllDetails = async (req, res, next) => {
    await student.aggregate(
        [
            { $match: { "_id":  ObjectId(req.params.id) } },
            { $lookup: { 
                from: "attendances", 
                localField: "_id", 
                foreignField: "studentId", 
                pipeline: [
                    {
                        $group: {
                            _id: { $month: '$date' },
                            attendance: { $push: "$$ROOT" },
                        }
                    }
                ],
                as: "attendance" }
            },
            { $lookup: { 
                from: "results", 
                localField: "_id", 
                foreignField: "studentId", 
                pipeline: [
                    {
                        $group: {
                            _id: { subject: '$subject' },
                            result: { $push: "$$ROOT" }
                        }
                    }
                ],
                as: "result" }
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

const classWiseStudentsForAttendance = async (req, res, next) => {
    let year = new Date(req.query.date).getFullYear();
    let month = new Date(req.query.date).getMonth();
    let day = new Date(req.query.date).getDate();
    await student.aggregate(
        [
            { "$lookup": { 
                "from": "attendances", 
                "localField": "_id", 
                "foreignField": "studentId", 
                "pipeline": [
                    {"$match": { "date": {
                        "$gte": new Date(year + '-' + (month + 1) + '-' + day),
                        "$lt": new Date(year + '-' + (month + 1) + '-' + (day + 1))
                    } }}
                ],
                "as": "result" }},
            { "$match": { "class": req.params.id, "batch": req.query.batch } }
        ]
    ).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Err', data: err, status: 200});
        }
    })
}

const classWiseStudentsForKit = async (req, res, next) => {
    await student.aggregate(
        [
            { "$lookup": { 
                "from": "kits", 
                "localField": "_id", 
                "foreignField": "studentId", 
                "pipeline": [
                    {"$match": { "kitType": req.query.kitType }}
                ],
                "as": "result" }},
            { "$match": { "class": req.params.id, "batch": req.query.batch } }
        ]
    ).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Err', data: err, status: 200});
        }
    })
}

const classWiseStudentsForMaterial = async (req, res, next) => {
    await student.aggregate(
        [
            { "$lookup": { 
                "from": "materials", 
                "localField": "_id", 
                "foreignField": "studentId", 
                "pipeline": [
                    {"$match": { "subject": req.query.subject }}
                ],
                "as": "result" }},
            { "$match": { "class": req.params.id, "batch": req.query.batch } }
        ]
    ).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Err', data: err, status: 200});
        }
    })
}

module.exports = { getAllStudents, classWiseStudents, getStudentDetails, classWiseStudentsForAttendance, getStudentAllDetails, classWiseStudentsForKit, classWiseStudentsForMaterial }