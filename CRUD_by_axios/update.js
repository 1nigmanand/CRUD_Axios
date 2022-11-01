const input = require("readline-sync")
// const deleted = require("./delete")

function update(ver){
    let courseId = input.question("---- Enter Id:- ")
    let id_list = []
    ver.forEach((element) => {
        id_list.push(element["id"])
    })
    if(id_list.includes(courseId)){
        while(true){
            let Operation = input.question("Do you want to change.\n1.id\n2.name\n3.type\n4.logo\n5.short_description\n6.Stop_editing\n:-")
            if (Operation==1){
                let new_id = input.question("Enter new ID-:")
                ver[id_list.indexOf(courseId)]["id"]=new_id
            }
            else if (Operation==2){
                let new_name = input.question("Enter new Name-:")
                ver[id_list.indexOf(courseId)]["name"]=new_name
            }
            else if (Operation==3){
                let new_type = input.question("Enter new type-:")
                ver[id_list.indexOf(courseId)]["type"]=new_type
            }
            else if (Operation==4){
                let new_logo = input.question("Enter new logo-:")
                ver[id_list.indexOf(courseId)]["logo"]=new_logo
            }
            else if (Operation==5){
                let new_dic = input.question("Enter new description-:")
                ver[id_list.indexOf(courseId)]["short_description"]=new_dic
            }
            else if (Operation==6) break
            else console.log("---- Invalid Request: ");

        }
        return ver
    }
    else console.log("--- ID not found")
}

module.exports = update