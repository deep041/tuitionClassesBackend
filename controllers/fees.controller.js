const fees = require('../modals').fees;
const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id: 'rzp_test_PU3DgPSW4kSDtx',
    key_secret: 'jnhE3hFKJzMeCQYNXfjCGRRi'
});


const addFees = async (req, res, next) => {
    fees.create(req.body, (err, result) => {
        if (result) {
            res.send({message: 'Added Successful', data: result, status: 200});
        } else {
            res.send({message: 'Something want wrong!', data: err, status: 404});
        }
    });
}

const getStudentFeeDetails = async (req, res, next) => {
    await fees.findOne({'studentId': req.query.id}).then((result, err) => {
        if (result) {
            res.send({message: 'Data retrieved successfully', data: result, status: 200});
        } else {
            res.send({message: 'Data not retrieved', data: err, status: 404});
        }
    });
}

const razorPayOrder = async (req, res, next) => {
    let options = {
        amount: req.body.amount*100,
        currency: 'INR',
        receipt: 'Order041',
        payment_capture: 0
    };

    instance.orders.create(options, (err, order) => {
        if (err) {
            console.log('err', err);
            res.send({message: 'Data not retrieved', data: err, status: 404});
        }

        if (order) {
            res.send({message: 'Data retrieved successfully', data: order, status: 200, key: 'rzp_test_PU3DgPSW4kSDtx'});
        }
    })
}

module.exports = { addFees, getStudentFeeDetails, razorPayOrder }