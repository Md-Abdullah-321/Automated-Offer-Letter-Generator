import cors from 'cors';
import express from 'express';
const app = express();


app.use(cors({
    origin: ["https://deploy-mern-lwhq.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))

app.get('/', (req, res, next) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
})