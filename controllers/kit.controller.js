const kit = require('../modals').kits;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const addKit = async (req, res, next) => {
    kit.insertMany(req.body, (err, result) => {
            if (result) {
                res.send({message: 'Added Successful', data: result, status: 200});
            } else {
                res.send({message: 'Something want wrong!', data: err, status: 404});
            }    
    });
}

const getStudentKitDetails = async (req, res, next) => {
    kit.aggregate(
        [
            { $match: { studentId: ObjectId(req.params.id) } }
        ]
    ).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Err', data: err, status: 200});
        }
    })
}

const updateKit = async (req, res, next) => {
    let data = req.body;
    let createdData = [];
    data.forEach((d) => {
        createdData.push(
            {
                updateOne: {
                    filter: { _id: ObjectId(d._id) },
                    update: { $set: {status: d.status}  }
                }
            }
        );
    });
    kit.bulkWrite(createdData).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Err', data: err, status: 200});
        }
    });
}

module.exports = { addKit, getStudentKitDetails, updateKit }