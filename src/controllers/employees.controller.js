import pool from "../databases/mysql.js"

const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee')
  res.json(rows) 
}

const getEmployee = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ? LIMIT 1', [req.params.id])

  if(rows[0]) {
    res.status(200)
    res.json(rows[0]) 
  }
  else {
    res.status(404)
    res.json({ message :'no se encontro dato'})
  }
}

const createEmployees = async (req, res) => {
  const {name, salary} = req.body
  const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
  res.json({id: rows.insertId, ...req.body}) 
}

const updateEmployees = async (req, res) => {
  const {name, salary} = req.body
  const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?',[name, salary, req.params.id])
  if(result.affectedRows){
    res.status(200)
    res.json({id: req.params.id, ...req.body}) 
  }
  else {
    res.status(404)
    res.json({message: "no se encontro employee"})
  }
}

const deleteEmployees = async (req, res) => {
  const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])
  if(result.affectedRows){
    res.sendStatus(204) 
  }
  else{
    res.status(404)
    res.json({message: "no se encontro employee"})
  }
}

export {
  getEmployees,
  getEmployee,
  createEmployees,
  updateEmployees,
  deleteEmployees
}