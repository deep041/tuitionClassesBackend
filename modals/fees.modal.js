const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    studentId: { type: mongoose.Schema.ObjectId },
    registrationFee: { type: Number },
    discount: { type: Number },
    totalFees: { type: Number },
    feesPartitions: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    fees: { type: Object },
    type: { type: String },
    isPaid: { type: Boolean },
    razorpay_order_id: { type: String },
    razorpay_payment_id: { type: String },
    razorpay_signature: { type: String }
})