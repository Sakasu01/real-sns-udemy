const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

//データベース接続
mongoose
    .connect(process.env.MONGOURL)
    .then(() => { //非同期なのでthenメソッドが×
        console.log("DBと接続中・・・");
    })
    .catch((err) => {
        console.log(err);
    });


//ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute); //エンドポイントも変えた(user->auth)
app.use("/api/posts", postsRoute); 

app.get("/", (req, res) => {
    res.send("hello express");
});

app.listen(PORT, () => console.log("サーバーが起動しました"))