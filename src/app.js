import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.SERVER_PORT;
app.use(express.json());
app.use(cookieParser());
// app.use("/api", router);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
