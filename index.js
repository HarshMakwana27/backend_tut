import http from "http";
import {percentage} from "./module_demo.js";

// console.log(pi());

const server = http.createServer((req, res) => {

    if(req.url === "/about"){
        
    res.end(`<h1> Your chances of dying is ${percentage()}</h2>`);

    }
    else{
        res.end("<h1> Empty page</h2>");
    }


});


server.listen(5000, () => {
    console.log("server is working");
})