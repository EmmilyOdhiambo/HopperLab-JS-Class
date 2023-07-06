let a = 50  //global variable
function add(b){
    console.log(a + b);
    let fruit = "Apple"  //Local scope variables can not be accesed outside the function:
    console.log(fruit);
}
add (100);


function great(){
    let Hello = "hi";
    function talk (){
        let c = "hi there";
        console.log('${hello} ${c}');
    }
    talk();
}
great();