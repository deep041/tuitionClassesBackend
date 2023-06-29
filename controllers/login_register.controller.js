const student = require('../modals').student;

const login = async (req, res, next) => {

    // .aggregate([{
    //     '$lookup': {
    //       'from': 'fees', 
    //       'localField': '_id', 
    //       'foreignField': 'studentId',
    //       'as': 'result'
    //     }
    //   }])

    await student.findOne({'email': req.body.email, 'password': req.body.password}).then((result, err) => {
        if (result) {
            res.send({message: 'Login Successfully', data: result, status: 200});
        } else {
            res.send({message: 'Login Failed', data: result, status: 404});
        }
    });
}

const register = async (req, res, next) => {

    let studentData = {
        surname: req.body.surname,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        dob: req.body.dob,
        board: req.body.board,
        class: req.body.class,
        gender: req.body.gender,
        address: req.body.address,
        fatherNumber: req.body.fatherNumber,
        motherNumber: req.body.motherNumber,
        otherNumber: req.body.otherNumber,
        whatsAppNumber: req.body.whatsAppNumber,
        email: req.body.email,
        parentsOccupation: req.body.parentsOccupation,
        parentsOccupationAddress: req.body.parentsOccupationAddress,
        presentSchool: req.body.presentSchool,
        previousResult:req.body.previousResult,
        password: req.body.password
    }

    await student.findOne({'email': req.body.email}).then((result, err) => {
        if (result) {
            res.send({message: 'Email already exist.', data: [], status: 403});
        } else {
            student.create(studentData).then((result2, err) => {
                if (result2) {
                    res.send({message: 'Registered Successfully', data: result2, status: 200});
                } else {
                    res.send({message: 'Registered Failed', data: result2, status: 404});
                }
            });
        }
    });
}

module.exports = { login, register }