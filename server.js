const express=require("express")
const app=express()
const path=require("path")

app.use(express.json())
app.use(express.static("public"))

let latestlocation={};
//API to get GPS location
app.post("/location",(req,res)=>{
    latestlocation=req.body;
    console.log("Location recived",latestlocation)
    res.json({message:"Location recived by Aditya Gupta 2023BCS0125 sucessfully"})
});
app.get("/location",(req,res)=>{
    res.json(latestlocation);
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`GPS Microservice by Aditya Gupta 2023BCS0125 running on port ${PORT}`);
});
