
//configuring login
module.exports.logout = (req, res, next)=>{
    console.log("🏍🏍🏍🏍🏍🏍🏍🏍🏍🏍🏍🏍")
    console.log(req.session)
    req.session.passengerId  = null;
    
    return res.redirect('/login');


}