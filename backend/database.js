const mysql =  require("mysql2");
const pool = mysql.createPool({
    host: "localhost", 
    user:"root",
    password:"mcoding",
    database:"Hospital"
}).promise();

const patientlogin = async (username,password)=>{
    const [result] = await pool.query('SELECT * FROM Patient WHERE username=? AND password=?',[username,password]);
    if(length(result) === 0){
        return {error: "invalid credentials"}
    }
    return result;
}
const doctorlogin = async (username,password)=>{
    const [result] = await pool.query('SELECT * FROM Doctors WHERE username=? AND password=?',[username,password]);
    if(length(result) === 0){
        return {error: "invalid credentials"}
    }
    return result;
}
const pharmalogin = async (username,password)=>{
    const [result] = await pool.query('SELECT * FROM Pharmacist WHERE username=? AND password=?',[username,password]);
    if(length(result) === 0){
        return {error: "invalid credentials"}
    }
    return result;
}
module.exports = {
    
}