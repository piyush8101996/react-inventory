const Register = require("../model/register")

//add user
const registeruser = async (req, res) => {
    try {
        //existing user
        console.log(Register, "all user list")
        const existinguser = await Register.findOne({ email: req.body.email })
        if (existinguser) {
            console.log("existing user",existinguser)
            res.status(400)
            throw new Error({ msg: "Email already exists" });
        } else {
            const user = await new Register({
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
            })
            console.log(user)
            user.save((err) => {
                if (err) {
                    res.send(err)
                } else {
                    res.status(200).send({msg:"user created successfully"})
                }
            })

        }

    }
    catch (err) {
        res.send(err)
    }

}

module.exports = { registeruser }