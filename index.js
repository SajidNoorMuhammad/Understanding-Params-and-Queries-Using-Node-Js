import express from "express"
import morgan from "morgan";
import userRoutes from './routers/users.js'
import coursesRoutes from './routers/courses.js'

const tasks = [
    {
        id: 1,
        task: "Drink Water"
    },
    {
        id: 2,
        task: "Complete Work"
    },
    {
        id: 3,
        task: "Playing Games"
    }
]


const app = express();
const PORT = 4000;

app.use(morgan('tiny'))

function middleware(req, res, next) {
    req.requestBy = "Sajid Noor Muhammad";
    next();
}

app.use(express.json())

app.use(middleware)
app.use('/user', userRoutes)
app.use('/courses', coursesRoutes)

app.get('/', (req, res) => {
    console.log("req.requestBy", req.requestBy)
    res.status(200).send(tasks);
})

app.post('/', (req, res) => {
    res.send('Post Request Called')
})

app.put('/', (req, res) => {
    res.send('Put Request Called')
})

app.delete('/', (req, res) => {
    res.send('Delete Request Called')
})

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
})