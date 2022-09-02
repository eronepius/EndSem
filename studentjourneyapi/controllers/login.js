const studentDetailsModel = require("../schema/studentdetails")

const login = async (req, res, next) => {
    const body = req.body;
    // const sj = new studentDetailsModel({ "username": body['username'], "newPassword": body['newpassword'],
    //             "confirmPassword":body['confirmpassword']})
    // console.log(sj)
    // await sj.save()
    const sj = new studentDetailsModel.findOne({"username": body['username']})
    res.json({ "message": "Success" })

}

module.exports = login


