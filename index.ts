import express, { Express, Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`[server]: Server is ru123nn12inewg at localhost:${PORT}`);
});

app.post("/post", (req:Request, res:Response) => {
    res.json({
        username:"123",
        password:"23122"
    })
});

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!");
});
