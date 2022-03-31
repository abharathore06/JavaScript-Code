const items=[
    {
        sno:1,
        name:"mobile"
    },
    {
        sno:2,
        name:"tv"
    },
    {
        sno:3,
        name:"charger"
    },
    {
        sno:4,
        name:"ac"
    },
    {
        sno:5,
        name:"dvd"
    },
    
];

function getItem(){
    
    setTimeout(()=>{
    let displayItem=""
    items.forEach((item) => {
        console.log(item)
    })
    }, 1000)
}

function createItem(newItem){
    
    return new Promise(
        (resolve, reject) => {
            setTimeout(() =>{
                items.push(newItem)
                let flag=true;
                if(flag){
                    resolve();
                }
                else{
                    reject("There is a problem")
                }
            }, 5000)
        }
    )
}        



createItem({sno:6, name:"washing machine"}).then(getItem).catch(err=>console.log(err))