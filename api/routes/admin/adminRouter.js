const {router, env, sha1, mysql, mypool} = require('../../util')

// SUB-ROUTES
// http://servername/admin/*
// GET
const getalljobs = require('./getalljobs')
router.get('/getalljobs', getalljobs)

const getallemployers = require('./getallemployers')
router.get('/getallemployers', getallemployers)

const getallstudents = require('./getallstudents')
router.get('/getallstudents', getallstudents)


// PUT
const editemployer = require('./editemployer')
router.put('/editemployer/:id', editemployer)

const editstudent = require('./editstudent')
router.put('/editstudent/:id', editstudent)

router.get('/', (req, res) => {
    res.send('hello from backend server, admin route')
})

module.exports = router