import http from "http";
import {percentage} from "./module_demo.js";
import fs from "fs";

// console.log(pi());

const server = http.createServer((req, res) => {

    if(req.url === "/about"){
        
    res.end(`<h1> Your chances of dying is ${percentage()}</h2>`);


    }
    else{

        fs.readFile("./index.html", (err,data) => {
            res.end(data);
         })
      
    }


});


server.listen(5000, () => {
    console.log("server is working ");
})