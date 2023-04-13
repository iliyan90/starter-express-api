import express from 'express'
import cors from 'cors'
import authRoutes  from './routes/auth.js';
import { obj, pickObj } from './json/axios.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: '*', // allow only requests from this origin
    methods: ['GET'], // allow only these methods
    // allowedHeaders: ['Content-Type'] // allow only these headers
  }));
app.get('/', async (req, res) =>{
    try {
        const data = await pickObj();
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
app.use('/', authRoutes);

pickObj();

