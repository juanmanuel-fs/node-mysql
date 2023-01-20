import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import { NODE_LOCAL_PORT } from './config/index.js'

const app = express()
app.set('appName', 'NodeMySql')

app.use(express.json())

app.use(indexRoutes)
app.use('/api',employeesRoutes)
app.use((req, res, next) => {
  return res.status(404).json({message: 'Page not found'})
})

app.listen(NODE_LOCAL_PORT, () => {
  console.log(`Sevidor ${app.get('appName')} en ${NODE_LOCAL_PORT}`)
})