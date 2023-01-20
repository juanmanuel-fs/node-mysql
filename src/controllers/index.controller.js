import pool from "../databases/mysql.js"

const indexController = async (req, res) => {
  res.send({message: 'Home'})
}
export {
  indexController
}