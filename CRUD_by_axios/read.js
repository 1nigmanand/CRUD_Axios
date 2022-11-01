const input = require("readline-sync")

function read(ver){
    let opt = input.question("Do you want to read all data or specific id data-:\n---- 1.All Data\n---- 2.Specific Id Data\n---- \n")
    if(opt == 2){
        let courseId = input.question("---- Enter Id:- ")
        let id_list = []
        ver.forEach((element) => {
            id_list.push(element["id"])
        })
        if(id_list.includes(courseId)){
            ver.forEach((element) => {
                if (element["id"]==courseId){
                    console.log(element);
                }
            })
        }
        else console.log("--- ID not found")

    }
    else if(opt == 1){
        for (let i of ver){
            console.log(i);
        };
    }
    else console.log("---- Invalid Request: ");
}

module.exports = read