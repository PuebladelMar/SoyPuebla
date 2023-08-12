const getSuccess = async(req, res)=>{
    const info = req.query
    const infoJSON = JSON.stringify(info)
    try {
        res.status(200).redirect(`http://localhost:5173/home/?data=${encodeURIComponent(infoJSON)}`);
    } catch (error) {
        
    }
}

module.exports = getSuccess;