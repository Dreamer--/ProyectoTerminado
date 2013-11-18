/*Inicio de menu*/
var nav= document.getElementById("bt-menu");
var link = document.createElement("a");
var texto = document.createTextNode("Menu");
link.setAttribute("href","#");
link.setAttribute("class", "bt-menu-trigger");

link.appendChild(texto);

/*Arreglo para las imagenes*/

var arrayIMG = new Array();

arrayIMG.push("imagenes/iconos/home.ico");
arrayIMG.push("imagenes/iconos/info.ico");
arrayIMG.push("imagenes/iconos/juegos.ico");
arrayIMG.push("imagenes/iconos/imagenes.ico");
arrayIMG.push("imagenes/iconos/video.ico");
arrayIMG.push("imagenes/iconos/contacto.ico");
arrayIMG.push("imagenes/iconos/info2.ico");

/*Inicio de la lista*/
/*Lista 1*/
var lista1 = document.getElementById("lista_1");
var a1 = document.createElement("a");
lista1.appendChild(a1);
a1.setAttribute("href","index.html#slider");
a1.setAttribute("class","transition");
var img = document.createElement("img");
img.setAttribute("src",arrayIMG[0]);
a1.appendChild(img);
/*Fin lista 1*/

/*Lista 2*/
var lista2 = document.getElementById("lista_2");
var a2 = document.createElement("a");
lista2.appendChild(a2);
a2.setAttribute("href","index.html#info");
a2.setAttribute("class","transition");
var img2 = document.createElement("img");
img2.setAttribute("src",arrayIMG[1]);
a2.appendChild(img2);
/*Fin lista 2*/

/*Lista 3*/
var lista3 = document.getElementById("lista_3");
var a3 = document.createElement("a");
lista3.appendChild(a3);
a3.setAttribute("href","index.html#juegos");
a3.setAttribute("class","transition");
var img3 = document.createElement("img");
img3.setAttribute("src",arrayIMG[2]);
a3.appendChild(img3);
/*Fin lista 3*/

/*Lista 4*/
var lista4 = document.getElementById("lista_4");
var a4 = document.createElement("a");
lista4.appendChild(a4);
a4.setAttribute("href","index.html#imagenes");
a4.setAttribute("class","transition");
var img4 = document.createElement("img");
img4.setAttribute("src",arrayIMG[3]);
a4.appendChild(img4);
/*Fin lista 4*/



/*Lista 5*/
var lista5 = document.getElementById("lista_5");
var a5 = document.createElement("a");
lista5.appendChild(a5);
a5.setAttribute("href","index.html#videos");
a5.setAttribute("class","transition");
var img5 = document.createElement("img");
img5.setAttribute("src",arrayIMG[4]);
a5.appendChild(img5);
/*Fin lista 5*/


/*Lista 6*/
var lista6 = document.getElementById("lista_6");
var a6 = document.createElement("a");
lista6.appendChild(a6);
a6.setAttribute("href","index.html#contacto");
a6.setAttribute("class","transition");
var img6 = document.createElement("img");
img6.setAttribute("src",arrayIMG[5]);
a6.appendChild(img6);
/*Fin lista 6*/


/*Lista 7*/
var lista7 = document.getElementById("lista_7");
var a7 = document.createElement("a");
lista7.appendChild(a7);
a7.setAttribute("href","informacion.html");
a7.setAttribute("class","transition");
var img7 = document.createElement("img");
img7.setAttribute("src",arrayIMG[6]);
a7.appendChild(img7);
/*Fin lista 7*/
/*Fin menu*/

