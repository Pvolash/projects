function tellStory(){
    var txtName= document.getElementById("txtName");
    var userName= txtName.value;

    var mesage= "hi,"+ userName + "!";
    
    output.innerHTML=mesage; 
    }
    
console.log("It works");