const mysqlConnection = require('.../connections/dbconnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//login User
exports.createUser = async(req, res) => {
    try {
        const {name,email,pass,avatar,phone,address,type_user_id,company_id} = req.body;
        const encryptedPassword = await bcrypt.hash(pass, saltRounds)
        let userData = {
            'name':name,
            'avatar':avatar,
            'phone':phone,
            'address':address,
            'type_user_id':type_user_id,
            'company_id':company_id,
            'email':email,
            'pass':encryptedPassword
        }
        const sql = "INSER INTO users SET ?";

        await mysqlConnection.query(sql, userData, (error,results, fileds) => {
            if (error) {        
                res.send({          
                "code":400,          
                "failed":"error occurred",          
                "error" : error})      
                } else {        
                res.send({          
                "code":200,          
                "success":"user registered sucessfully"            
                });        
                }
        })
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}