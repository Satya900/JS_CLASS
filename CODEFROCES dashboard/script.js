fetch('https://codeforces.com/api/user.info?handles=Satya900&checkHistoricHandles=false')
.then((response)=> response.json())
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);

})