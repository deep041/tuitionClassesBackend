const frontEnd = require('../modals').frontEnd;

const getAllFrontEndDetails = async (req, res, next) => {
    console.log(req.query)
    const allDetails = await frontEnd.find();
    if (req.query.isAdmin === 'true') {
        console.log('A')
        allDetails[0].modules = allDetails[0].modules.filter((d) => d.isAdmin);
    } else {
        console.log('B')
        allDetails[0].modules = allDetails[0].modules.filter((d) => !d.isAdmin);
    }
    // allDetails[0].modules = await allDetails[0].modules.filter((d) => req.query.isAdmin ? d.isAdmin : !d.isAdmin);
    res.send(JSON.stringify({ data: allDetails[0], message: 'Data retrieved successfully!!', status: 200}));
}

module.exports = { getAllFrontEndDetails };