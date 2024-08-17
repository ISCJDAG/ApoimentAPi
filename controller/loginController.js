const mysqlConnection = require('../connections/dbconnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//login User
exports.loginOwnerOrEmployee = async(req, res) => {
    try {
        const {email,password} = req.body;
        const encryptedPassword = await bcrypt.hash(password)
        let userCredentials = {
            'email':email,
            'pass':encryptedPassword
        }
        const sql = "SELECT users.id,users.name,users.email,users.type_user_id,users.avatar,users.company_id, type_user.name, company.logo, company.name,company.mempreship, company.start_date_membreship, company.end_date_membreship" +
        "FROM users " +
        "JOIN type_user on users.type_user_id = type_user.id" +
        "JOIN company on users.company_id = company.id" +
        "WHERE users.email = ? AND pass = ?";

        await mysqlConnection.query(sql, userCredentials, async(error,results) => {
           // const comparison = await bcrypt.compare(password, results[0].password) 
            if (error) {
                console.error(error.message);
                return res.status(500).json({ message: 'Internal server error' });
            }
            if (results.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }else{
                res.send({                
                    "code":200,                
                    "success":"login successful",
                    "user":results[0]                            
                    }) 
            }
        })
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}