const frontEnd = require('../modals').frontEnd;

const getAllFrontEndDetails = async (req, res, next) => {
    console.log('Details');
    const allDetails = await frontEnd.find();
    res.send(JSON.stringify({ data: allDetails[0], message: 'Data retrieved successfully!!', status: 200}));
}

module.exports = { getAllFrontEndDetails };