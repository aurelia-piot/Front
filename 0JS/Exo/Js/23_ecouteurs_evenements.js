alert("hello 23");
/******************  1 VARIABLES ******************************/
//recherche du bouton dans l'arbre DOM
// le DOM: Document Object Model est une interface d'application.
//(API) pour des Documents HTML valides et XML bien formés. il définit la structure
//logique d'un document (au sens large du terme) et la manière d'y accéder et de le 
//manipuler .

var bouton = document.getElementById('toggle-rectangle');
//recherche du rectangle dans l'arbre DOM.
var rectangle = document.querySelector('.rectangle');



/*********************  2 FONCTIONS  ***************************************/

/* 1-function au click sur le bouton */

//La méthode .toggle() va ajouter ou supprimer la class (tel un interrupteur) 

function surClicBouton(){
    rectangle.classList.toggle('hide');
}

/*2-Fonction au double-click ssur le rectancle */

function auDoubleClicRectangle(){
    rectangle.classList.toggle('good');
}
/* 3-A l'entree du survol du rectangle*/
//la methode .add()va ajouter la class css.
function auSurvolSourisRectangle(){
    rectangle.classList.add('important');

}
/*4-a la sortie du survole du rectangle*/
//la methode .remove() va ajouter la class CSS.
function aSortieSourisRectangle(){
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
} 
/********************* 3 ECOUTEURS D'EVENEMENTS *******************************/

/************* -parametre : l'evenement *************************/
/***** 2nd parametre: la fonction à executer  *****************/

/* 1-Installation d'un gestionnaire d'evenement au clic sur le bouton*/
bouton.addEventListener('click',surClicBouton);

/*La Methode addEventListener() met en place une fonction a appeler chaque fois que l'evenement specifier est remis à la cible. Les cibles courantes sont un "Element", le "Document" lui meme et une "windows", mais elle peut etre tout objet prenant en charge les evenements (XMLHttpRequest)*/

/*2-Installation d'un gestionnaire d'evenement au double clic sur le rectangle*/
rectangle.addEventListener('dblclick',auDoubleClicRectangle);

/*3-Installation d'un gestionnaire d'evenement au survol sur le rectangle.*/
rectangle.addEventListener('mouseover',auSurvolSourisRectangle);

/*4-Installation d'un gestionnaire d'evenement a la sortie du survol sur le rectangle*/
rectangle.addEventListener('mouseout',aSortieSourisRectangle);