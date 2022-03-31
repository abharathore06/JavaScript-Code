const student=[
    {
        name:"abc",
        score:21
    },
    {
        name:"bcd",
        score: 56
    },
    {
        name:"efg",
        score: 65
    },
    {
        name:"ghi",
        score: 42
    },
    {
        name:"ijk",
        score: 73
    },
    
];

function getItem(){
    
    setTimeout(()=>{
    let displayItem=""
    student.forEach((item) => {
        console.log(item)
    })
    }, 1000)
}

function createItem(newItem){
    
    return new Promise(
        (resolve, reject) => {
            setTimeout(() =>{
                student.push(newItem)
                let flag=true;
                if(flag){
                    resolve();
                }
                else{
                    reject("There is a problem")
                }
            }, 3000)
        }
    )
}        



createItem({name: "jkl", score:48}).then(getItem).catch(err=>console.log(err))