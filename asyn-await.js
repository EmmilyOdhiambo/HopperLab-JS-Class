function greet (){
    console.log("Welcome to our site");
};
let data =[{}];
let character = new Promise((resolve,reject)=>{
    if (data){
        setTimeout(()=>{resolve("User successfuly created");},5000);
    // resolve("User successfulycreated");
}
    else{
        setTimeout(()=>{resolve("User successfuly created");},5000);
        // reject("User already exist");
    }

});
async function createUserAccount(){
    let response = await createUser ;
    console.log({response});
}
createUserAccount();