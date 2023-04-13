import express from 'express'

const routes = express.Router();

routes.get('/chat', (req, res) =>{
    res.send("user page")
})

export default routes

