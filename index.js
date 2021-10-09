const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const os = require("os");
architecture=()=>{
    console.log("architecture :"+os.arch());
    repeat();
}
platform=()=>{
    console.log("platform :"+os.platform());
    repeat();
}
userinfo=()=>{
    console.log("user info :"+os.userInfo());
    repeat();
}
freememory=()=>{
    console.log("free memory :"+os.freemem()/(1024*1024*1024)+" GB");
    repeat();
}
totalmemory=()=>{
    console.log("total memory :"+os.totalmem()/(1024*1024*1024)+" GB");
    repeat();
}

var instruction = () => {
    console.log("\n1.OS CPU architecture");
    console.log("2.Free memory of the system");
    console.log("3.Total memory of the system");
    console.log("4.OS platform");
    console.log("5.Information about the current user");
    console.log("6.Exit");
}
var start = () => {
    rl.question("Enter Your Choice :", (answer) => {
        if (answer == "1") {
            architecture();
        }
        else if(answer == "2"){
            freememory();
        }
        else if(answer == "3"){
            totalmemory();
        }
        else if(answer == "4"){
            platform();
        }
        else if(answer == "5"){
            userinfo();
        }
        else if (answer == "6") {
            rl.close();
        }
        else {
            console.log("Wrong choice");
            start();
        }
    });
}

var repeat = () => {
    instruction();
    start();
}
console.log("Welcome to  OS System");
repeat();
