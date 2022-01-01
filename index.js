import express from "express"
import mongoose from "mongoose"
import routeTag from "./routes/index.js"

const app = express()
const port = 3000

//koneksi mongodb
mongoose.connect("mongodb://localhost:27017/todoAPI",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

//jika terjadi error
db.on('error',(error)=>console.log(error));
//jika sudah berhasil masuk
db.once('open', () => console.log("Database Terkoneksi"));

//untuk melakukan convert data expressJS menjadi JSON
app.use(express.json());

//route yang digunakan
app.use('/api/tag', routeTag);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})