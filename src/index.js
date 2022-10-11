
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();
// module.exports = {app};
var corsOptions = {
  origin: "http://localhost:4000"
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));
app.use("/create/category",(req,res)=>{
    const {name} = req.body;
    const {image} = req.files;
    
    return res.json("success");
})



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});