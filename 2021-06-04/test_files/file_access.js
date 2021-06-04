const fs = require("fs");

// fs.open("data.txt", "r+", function(err, file){
//     if (err) {
//         console.log("Error opening this file!");
//     }
//     else {
//         console.log("File opened successfully!")
//     }
// })

// //Read file sync
// const data = fs.readFileSync("data.txt");
// console.log(data.toString());

// //Read file asynchronous
// fs.readFile("data.txt", function(err, data){
//     if(err){
//         console.log("Error reading file!");
//     }
//     else {
//         console.log(data.toString());
//     }
// });

// //Write file
// fs.writeFile("data.txt", "Abccccccccccccc", function(err){
//     if(err){
//         console.log("ERROR WRITING ON FILE!");
//     }
//     else {
//         fs.readFile("data.txt", function(err, data){
//             if(err){
//                 console.log("Error reading file!!!");
//             }
//             else{
//                 console.log(data.toString());
//             }
//         })
//     }
// })

//Create folder
fs.mkdir("new_folder", function(err){
    if(err){
        console.log("Error");
    }
    else {
        console.log("Success");
    }
})