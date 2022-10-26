

function a () {
var grade1 = document.getElementById("grade1").value;
var grade2 = document.getElementById("grade2").value;
var grade3 = document.getElementById("grade3").value;
var grade4 = document.getElementById("grade4").value;

var credit1 = Number(document.getElementById("credit1").value);
var credit2 = Number(document.getElementById("credit2").value);
var credit3 =Number(document.getElementById("credit3").value);
var credit4 = Number(document.getElementById("credit4").value);




switch (grade1) {
    case "AA":
        grade1=4
        break;
    case "BA":
        grade1=3.5
        break;
    case "BB":
        grade1=3
        break;
    case "CB":
        grade1=2.5
        break;
    case "CC":
        grade1=2
        break;
    case "DC":
        grade1=1.5
        break;
    case "DD":
        grade1=1
        break;
    case "FD":
        grade1=0.5
        break;
    case "FF":
        grade1=0
        break;
};
switch (grade2) {
    case "AA":
        grade2=4
        break;
    case "BA":
        grade2=3.5
        break;
    case "BB":
        grade2=3
        break;
    case "CB":
        grade2=2.5
        break;
    case "CC":
        grade2=2
        break;
    case "DC":
        grade2=1.5
        break;
    case "DD":
        grade2=1
        break;
    case "FD":
        grade2=0.5
        break;
    case "FF":
        grade2=0
        break;
};
switch (grade3) {
    case "AA":
        grade3=4
        break;
    case "BA":
         grade3=3.5
        break;
    case "BB":
         grade3=3
        break;
    case "CB":
         grade3=2.5
        break;
    case "CC":
         grade3=2
        break;
    case "DC":
         grade3=1.5
        break;
    case "DD":
         grade3=1
        break;
    case "FD":
         grade3=0.5
        break;
    case "FF":
         grade3=0
        break;
};
switch (grade4) {
    case "AA":
        grade4=4
        break;
    case "BA":
        grade4=3.5
        break;
    case "BB":
        grade4=3
        break;
    case "CB":
        grade4=2.5
        break;
    case "CC":
        grade4=2
        break;
    case "DC":
        grade4=1.5
        break;
    case "DD":
        grade4=1
        break;
    case "FD":
        grade4=0.5
        break;
    case "FF":
        grade4=0
        break;
};

    function topCredit () {
       let firstClass = Number(grade1*credit1) ;
       let secondClass = Number(grade2*credit2);
       let thirdClass= Number(grade3*credit3);
       let fourthClass = Number(grade4*credit4);
       let top= firstClass + secondClass + thirdClass + fourthClass;
       let toplamKredi= credit1 + credit2 + credit3 + credit4;
       let anan= top/toplamKredi;
       
       
       console.log(anan);
        return anan;
    };
    



    topCredit();
    
   


    

};
