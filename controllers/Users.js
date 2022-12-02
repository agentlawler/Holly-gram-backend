
const getUsers = (req, res)=>{
    res.send({msg: `Found users with an id of ${req.params.userId}`})
}