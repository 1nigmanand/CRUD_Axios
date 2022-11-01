const input = require("readline-sync")

function create(data){
    let id = input.question("Enter ID-:")
    if(id == ''){
        console.log("---- Id cannot be Empty: ");
        return false
    }
    let id_list = []
    data.forEach((element) => {
        if(element!=null){
            id_list.push(element["id"])
        }
    })
    if(!id_list.includes(id)){
        var dict = {
            "id":id,
            "name":input.question("Enter Name-:"),
            "type":input.question("Enter Type-:"),
            "logo":input.question("Enter logo-:"),
            "short_description":input.question("Enter short_description-:")
        }
        for (i in dict){
            if(dict[i] == ''){
                dict[i] = null
            }
        }
        data.push(dict)
        return data
    }
    else{
        console.log("------ Id already exists or Invalid Id. try another id: ");
        return false
    }

}

module.exports = create