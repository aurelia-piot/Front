alert("hello.22");
var branche =prompt("choix du nombre d'etages du sapin");
//on itere le nombre d'etages du sapin



for(var etage=1 ; etage<=branche ; etage++){ 
   //1 pour chaque etages, nous avons i=e+3 lignes
for(var i=0 ;i<etage+3 ; i++){
    //2 pour chaque ligne i; nous avons ((etage + i)*2)-1; etoiles
    for(var nb_etoile=1; nb_etoile<=((etage+i)*2)-1; nb_etoile++){
        document.getElementById("sapin").innerHTML+='*';
        sapin.style.color="green";
    }
    document.getElementById("sapin").innerHTML+='<br/>';
}//fin lignes
}//fin étage
//on affiche le pied
for( var s=1; s<=branche; s++){
    document.getElementById('sapin').innerHTML+='||||';
    document.getElementById('sapin').innerHTML +='</br>'
}
//la propriete Element .innerHTML de Element recupere ou definit la syntaxe 
//HTML decrivant  les descendants de l'element .

/* La methode getElementById() de Document renvoie un objet Element representant l'element
dont la propriete id correspond à la chaine de caracteres specifiee.Etant donne que les ID d'elements
doivent etre uniques, s'ils sont specifies,
ils constituent un moyens utile d'acceder rapidement a un element  specifique*/