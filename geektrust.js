const fs = require("fs")
const filename = process.argv[2]
const User=require("./Components/balance")
const check_in=require("./Components/check_in")
const print_summary=require("./Components/print")
fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err
    var inputLines = data.toString().split("\n")
    let users=[];
    let tickets=[];
    for(let i=0;i<inputLines.length;i++){
        if(inputLines[i].substring(0,1)=="B"){
            const [cmd,id,bal]=inputLines[i].trim().split(" ");
            let new_user=new User(id,bal);
            users.push(new_user);
        }
        else if(inputLines[i].substring(0,1)=="C"){
            const [cmd,id,type,from]=inputLines[i].trim().split(" ");
            let new_ticket=check_in(id,type,from,users);
            tickets.push(new_ticket);
        }
        else if(inputLines[i].substring(0,1)=="P") {
           print_summary(tickets);
        }

    } 
})

