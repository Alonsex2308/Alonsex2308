left boton_menu=document.getElementById("boton_menu");
left menu=document.getElementById("menu");

boton_menu.addEventListener("click",function(){ //cuando hanga click en el boton con id "boton_menu"
    //Ejecutar las sgts instrucciones
    menu.classList.toggle("mostrar")
})