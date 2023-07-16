const classes = require('../modals').classes;

// const addFees = async (req, res, next) => {
//     fees.create(req.body, (err, result) => {
//         if (result) {
//             res.send({message: 'Added Successful', data: result, status: 200});
//         } else {
//             res.send({message: 'Something want wrong!', data: err, status: 404});
//         }
//     });
// }

const getClassesDetails = async (req, res, next) => {
    await classes.findOne({'_id': req.params.id}).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Data not retrieved', data: err, status: 404});
        }
    });
}

module.exports = { getClassesDetails }