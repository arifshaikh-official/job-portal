import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from '@clerk/express'

dotenv.config()
const app = express()
await connectDb()
await connectCloudinary()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get("/",(req, res) => res.send("Api working"))

app.use('/api/company',companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})