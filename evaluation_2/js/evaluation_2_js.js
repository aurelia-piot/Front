$(function(){
    console.log("ok");


    $(".l1").click(function(){
        $(".image1").css('background-image',"url('images/vehicule4.png')")
    });

    $(".r1").click(function () {
        $(".image1").css('background-image', "url('images/vehicule2.png')")
    });


    $(".l2").click(function () {
        $(".image2").css('background-image', "url('images/vehicule1.png')")
    });

    $(".r2").click(function () {
        $(".image2").css('background-image', "url('images/vehicule3.png')")
    });
    
    
    $(".l3").click(function () {
        $(".image3").css('background-image', "url('images/vehicule2.png')")
    });

    $(".r3").click(function () {
        $(".image3").css('background-image', "url('images/vehicule4.png')")
    });




    $(".l4").click(function () {
        $(".image4").css('background-image', "url('images/vehicule3.png')")
    });

    $(".r4").click(function () {
        $(".image4").css('background-image', "url('images/vehicule1.png')")
    });

$(".resultat").html('<strong>'+'7'+'</strong>'+' résultats');

})