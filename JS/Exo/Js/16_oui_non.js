alert("hello.16");

var disMoi= "";
var i = 0 ;
while ((disMoi !=="oui")&&(disMoi!=="non")){
    disMoi = prompt("Alors on joue au ni Oui ni Non ?")
    document.write(disMoi + " pour la " +i + "° fois, dis moi Oui ou Non ! <br/>");
    i++
}
document.write("<h1 style ='background-color:cyan; text-align:center;'> Fini ;) !</h1>");
