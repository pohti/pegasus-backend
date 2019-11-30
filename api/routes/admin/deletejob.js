const {router, env, sha1, mysql, mypool} = require('../../util')

const deletejob = (req,res) => {
    const id = req.params.id
    //res.send('request to delete job, id: ' + id)

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            
            let queryString1 = `DELETE FROM pegasus.jobapplication WHERE jobid=${id}`
            connection.query(queryString1, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    console.log('deleted from child tables')
                }
            })
        }
        connection.release()
    })

    mypool.getConnection((err, connection) => {
        if(err) {
            connection.release()
            console.log(`Error getting mysql_pool connection: ${err}`)
            throw err
        }
        else {
            
            let queryString = `DELETE FROM pegasus.job WHERE id=${id}`
            connection.query(queryString, (err) => {
                if(err) {
                    res.status(500).json({ message: err })
                }
                else {
                    res.send(`successfully deleted job`)
                }
            })
        }
        connection.release()
    })
    
}

module.exports = deletejob