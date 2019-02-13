// alert("hello.15");
// Function table_multiplication(nombre){
//     var nbr =0;
//     for(nbr =1; nbr<=10; nbr++){
//         resultat= nombre* nbr;
//         document.write(nbr+"x"+nbr+"="nombre*nbr+"<br>");
//     }
// }
// nombre = prompt
var choix = prompt("choisis un nombre:")
if((choix >=2)&&(choix<=9)){
    for(var i =1; i<=10 ; i++){
        var res = choix * i;
        document.write(choix + "x" + i + "=" + res + "<br/>");
    }
} else {
    document.write("<h4>Le chiffre doit être entre 2 et 9! </h4>")
}