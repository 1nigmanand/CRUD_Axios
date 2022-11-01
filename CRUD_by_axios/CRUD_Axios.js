const fs = require("fs")
const input = require("readline-sync")
const create = require("./create.js")
const read = require("./read.js")
const deleted = require("./delete.js")
const update = require("./update.js")
const axios = require("axios")
var data;

async function code_run(){
    const fetchData = async()=>{
    const info = await axios('http://saral.navgurukul.org/api/courses')
    let data  = info.data.availableCourses
    fs.writeFileSync("coursesData.json",JSON.stringify(data,null,4))
    }

    if(!fs.existsSync("coursesData.json")){
        await fetchData()
    }
    else{
        let data = JSON.parse(fs.readFileSync("coursesData.json"))
        if(data.length == 0){
            await fetchData()
        }
    }
    data = JSON.parse(fs.readFileSync("coursesData.json"))

    console.log("----- Welcome to in Courses: ");
    while(true){
        let opt = input.questionInt("--- enter your Operation:\n--- 1.Create\n--- 2.Read\n--- 3.Update\n--- 4.Delete\n--- 5.Fetch\n--- 6.Exit\n-: ")
        let updatedData
        if(opt == 1) updatedData = create(data)
        else if (opt == 2){
            read(data)
            updatedData = data
        }
        else if (opt == 3) updatedData = update(data)
        else if (opt == 4) updatedData = deleted(data)
        else if (opt == 5) await fetchData()
        else if (opt == 6) break
        else console.log("--- Invalid Request: ");
        if(updatedData) fs.writeFileSync("coursesData.json",JSON.stringify(updatedData,null,4))

    }

}



code_run()