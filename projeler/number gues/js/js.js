


function magic() {

    var output= document.getElementById("output");
    var guesst=parseInt(document.getElementById("guesst").value);
    var ranNum= Math.floor(Math.random() * 321);
    

    if (guesst === ranNum) {
        output.innerHTML="wow you really grinded that huh?";

    } else {
        output.innerHTML="Thats what I tought so!";
    };

    console.log( "computer picked "+ranNum);
    console.log("you guested "+guesst);
    





};




