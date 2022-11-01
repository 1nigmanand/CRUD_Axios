const input = require("readline-sync");

function deleted(data){
    let opt = input.question("--- Do you want to delete all data or specific id data-:\n---- 1.All Data\n---- 2.Specific Id Data\n---- \n")
    if (opt==1){
        while (true){
            if (data.length==0){
                break
            }
            else data.pop()
        }
        return data
    }
    else if (opt==2){
        let courseId = input.question("---- Enter Id:- ")
        let id_list = []
        data.forEach((element) => {
            id_list.push(element["id"])
        })
        if(id_list.includes(courseId)){
            for (i in data){
                if (data[i]["id"] == courseId){
                    data.splice(i,1)
                    return data
                }

            }
            

        }
        else console.log("--- ID not found")

    }
    else console.log("---- Invalid Request: ");

}

module.exports = deleted