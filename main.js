function ShowHome() {
  var divProg = document.getElementById("container_prog");
  var divEng = document.getElementById("container_eng");
  var divSobre = document.getElementById("container_sobre");

  var radioHome = document.getElementById("radio_home");

  var circleEng_0 = document.getElementById("circle_eng_0");
  var circleEng_1 = document.getElementById("circle_eng_1");
  var circleEng_2 = document.getElementById("circle_eng_2");
  var circleEng_3 = document.getElementById("circle_eng_3");

  divEng.style.display = "none";
  divProg.style.display = "none";
  divSobre.style.display = "none";

  radioHome.checked = true;

  var circle = document.getElementsByClassName("circle");
  var circle2 = document.getElementsByClassName("circle2");
  for (var i = 0; i < circle.length; i++) {
    circle[i].style.color="transparent";
    circle[i].style.width="100%";
    circle[i].style.height="100%";
    circle[i].style.transition="1s linear";
  }
  for (var i = 0; i < circle2.length; i++) {
    circle2[i].style.color="transparent";
    circle2[i].style.width="100%";
    circle2[i].style.height="100%";
    circle2[i].style.transition="1s linear";
  }

  circleEng_0.style.borderColor = "gray";
  circleEng_1.style.borderColor = "gray";
  circleEng_2.style.borderColor = "gray";
  circleEng_3.style.borderColor = "gray";
}

function ShowDivEng() {
  var divProg = document.getElementById("container_prog");
  var divEng = document.getElementById("container_eng");
  var divSobre = document.getElementById("container_sobre");

  var radioEng = document.getElementById("radio_eng");

  var circleEng_0 = document.getElementById("circle_eng_0");
  var circleEng_1 = document.getElementById("circle_eng_1");
  var circleEng_2 = document.getElementById("circle_eng_2");
  var circleEng_3 = document.getElementById("circle_eng_3");
  
  divEng.style.display = "block";
  divProg.style.display = "none";
  divSobre.style.display = "none";

  radioEng.checked = true;
  
  var circle = document.getElementsByClassName("circle");
  var circle2 = document.getElementsByClassName("circle2");
  for (var i = 0; i < circle.length; i++) {
    circle[i].style.width="100%";
    circle[i].style.height="100%";
    circle[i].style.transition="1s linear";
    circle[i].style.color="black";
  }
  for (var i = 0; i < circle2.length; i++) {
    circle2[i].style.width="80%";
    circle2[i].style.height="80%";
    circle2[i].style.transition="1s linear";
    circle2[i].style.color="transparent";
  }

  var screen = window.matchMedia("(max-width: 1280px)")
  if (screen.matches) { // If media query matches
    window.scrollTo(0,180);
  }
} 

function ShowDivProg() {
  var divProg = document.getElementById("container_prog");
  var divEng = document.getElementById("container_eng");
  var divSobre = document.getElementById("container_sobre");

  var radioProg = document.getElementById("radio_prog");

  var circleEng_0 = document.getElementById("circle_eng_0");
  var circleEng_1 = document.getElementById("circle_eng_1");
  var circleEng_2 = document.getElementById("circle_eng_2");
  var circleEng_3 = document.getElementById("circle_eng_3");

  divEng.style.display = "none";
  divProg.style.display = "block";
  divSobre.style.display = "none";

  radioProg.checked = true;
 
  var circle = document.getElementsByClassName("circle");
  var circle2 = document.getElementsByClassName("circle2");
  for (var i = 0; i < circle.length; i++) {
    circle[i].style.width="80%";
    circle[i].style.height="80%";
    circle[i].style.transition="1s linear";
    circle[i].style.color="transparent";
  }
  for (var i = 0; i < circle2.length; i++) {
    circle2[i].style.width="100%";
    circle2[i].style.height="100%";
    circle2[i].style.transition="1s linear";
    circle2[i].style.color="black";
  }

  circleEng_0.style.borderColor = "gray";
  circleEng_1.style.borderColor = "gray";
  circleEng_2.style.borderColor = "gray";
  circleEng_3.style.borderColor = "gray";

  var screen = window.matchMedia("(max-width: 1280px)")
  if (screen.matches) { // If media query matches
    window.scrollTo(0,180);
  }
} 

function ShowDivSobre() {
  var divProg = document.getElementById("container_prog");
  var divEng = document.getElementById("container_eng");
  var divSobre = document.getElementById("container_sobre");

  var radioSobre = document.getElementById("radio_sobre");

  var circleEng_0 = document.getElementById("circle_eng_0");
  var circleEng_1 = document.getElementById("circle_eng_1");
  var circleEng_2 = document.getElementById("circle_eng_2");
  var circleEng_3 = document.getElementById("circle_eng_3");

  divEng.style.display = "none";
  divProg.style.display = "none";
  divSobre.style.display = "block";

  radioSobre.checked = true;

  var circle = document.getElementsByClassName("circle");
  var circle2 = document.getElementsByClassName("circle2");
  for (var i = 0; i < circle.length; i++) {
    circle[i].style.color="transparent";
    circle[i].style.width="100%";
    circle[i].style.height="100%";
    circle[i].style.transition="1s linear";
  }
  for (var i = 0; i < circle2.length; i++) {
    circle2[i].style.color="transparent";
    circle2[i].style.width="100%";
    circle2[i].style.height="100%";
    circle2[i].style.transition="1s linear";
  }

  circleEng_0.style.borderColor = "gray";
  circleEng_1.style.borderColor = "gray";
  circleEng_2.style.borderColor = "gray";
  circleEng_3.style.borderColor = "gray";

  var screen = window.matchMedia("(max-width: 1280px)")
  if (screen.matches) { // If media query matches
    window.scrollTo(0,180);
  }
}

function ButtonEng_eng() {
  var menuEng = document.getElementById("menu_icon_eng");
  var menuSw = document.getElementById("menu_icon_sw");
  var menuPdm = document.getElementById("menu_icon_pdm");
  var circleEng_0 = document.getElementById("circle_eng_0");
  var circleEng_1 = document.getElementById("circle_eng_1");
  var circleEng_2 = document.getElementById("circle_eng_2");
  var circleEng_3 = document.getElementById("circle_eng_3");
  
  
  menuEng.src = "images/engeneering-1.png";
  menuEng.style.border = "1px solid --cor_primaria1";
  menuEng.style.borderRadius = "10px";

  menuSw.src = "images/solidworks-0.png";
  menuSw.style.border = "none";

  menuPdm.src = "images/solidworks_pdm-0.png";
  menuPdm.style.border = "none";

  circleEng_0.style.borderColor = "red";
  circleEng_0.style.color = "red";
  circleEng_1.style.borderColor = "orange";
  circleEng_1.style.color = "orange";
  circleEng_2.style.borderColor = "gray";
  circleEng_2.style.color = "gray";
  circleEng_3.style.borderColor = "gray";
  circleEng_3.style.color = "gray";

  var painelEng = document.getElementById("painel_eng");
  var painelSw = document.getElementById("painel_sw");
  var painelPdm = document.getElementById("painel_pdm");
  painelEng.style.display = "inline";
  painelSw.style.display = "none";
  painelPdm.style.display = "none";
}

function ButtonEng_sw() {
  var menuEng = document.getElementById("menu_icon_eng");
  var menuSw = document.getElementById("menu_icon_sw");
  var menuPdm = document.getElementById("menu_icon_pdm");
  var circleEng_0 = document.getElementById("circle_eng_0");
  var circleEng_1 = document.getElementById("circle_eng_1");
  var circleEng_2 = document.getElementById("circle_eng_2");
  var circleEng_3 = document.getElementById("circle_eng_3");

  menuEng.src = "images/engeneering-0.png";
  menuEng.style.border = "none";

  menuSw.src = "images/solidworks-1.png";
  menuSw.style.border = "1px solid --cor_primaria1";
  menuSw.style.borderRadius = "10px";

  menuPdm.src = "images/solidworks_pdm-0.png";
  menuPdm.style.border = "none";

  circleEng_0.style.borderColor = "red";
  circleEng_0.style.color = "red";
  circleEng_1.style.borderColor = "orange";
  circleEng_1.style.color = "orange";
  circleEng_2.style.borderColor = "blue";
  circleEng_2.style.color = "blue";
  circleEng_3.style.borderColor = "gray";
  circleEng_3.style.color = "gray";

  var painelEng = document.getElementById("painel_eng");
  var painelSw = document.getElementById("painel_sw");
  var painelPdm = document.getElementById("painel_pdm");
  painelEng.style.display = "none";
  painelSw.style.display = "inline";
  painelPdm.style.display = "none";
}

function ButtonEng_pdm() {
  var menuEng = document.getElementById("menu_icon_eng");
  var menuSw = document.getElementById("menu_icon_sw");
  var menuPdm = document.getElementById("menu_icon_pdm");
  var circleEng_0 = document.getElementById("circle_eng_0");
  var circleEng_1 = document.getElementById("circle_eng_1");
  var circleEng_2 = document.getElementById("circle_eng_2");
  var circleEng_3 = document.getElementById("circle_eng_3");

  menuEng.src = "images/engeneering-0.png";
  menuEng.style.border = "none";

  menuSw.src = "images/solidworks-0.png";
  menuSw.style.border = "none";

  menuPdm.src = "images/solidworks_pdm-1.png";
  menuPdm.style.border = "1px solid --cor_primaria1";
  menuPdm.style.borderRadius = "10px";

  circleEng_0.style.borderColor = "red";
  circleEng_0.style.color = "red";
  circleEng_1.style.borderColor = "orange";
  circleEng_1.style.color = "orange";
  circleEng_2.style.borderColor = "blue";
  circleEng_2.style.color = "blue";
  circleEng_3.style.borderColor = "blue";
  circleEng_3.style.color = "blue";

  var painelEng = document.getElementById("painel_eng");
  var painelSw = document.getElementById("painel_sw");
  var painelPdm = document.getElementById("painel_pdm");
  painelEng.style.display = "none";
  painelSw.style.display = "none";
  painelPdm.style.display = "inline";
}

function ButtonProg_py() {
  var menuPy = document.getElementById("menu_icon_py");
  var menuFlask = document.getElementById("menu_icon_flask");
  var menuFront = document.getElementById("menu_icon_front");
  var menuKivy = document.getElementById("menu_icon_kivy");
  var menuVb = document.getElementById("menu_icon_vb");

  menuPy.src = "images/python-1.png";
  menuPy.style.border = "1px solid --cor_primaria1";
  menuPy.style.borderRadius = "10px";

  menuFlask.src = "images/flask-0.png";
  menuFlask.style.border = "none";

  menuFront.src = "images/front-0.png";
  menuFront.style.border = "none";

  menuKivy.src = "images/kivy-0.png";
  menuKivy.style.border = "none";

  menuVb.src = "images/vb-0.png";
  menuVb.style.border = "none";

  var painelPy = document.getElementById("painel_py");
  var painelFlask = document.getElementById("painel_flask");
  var painelFront = document.getElementById("painel_front");
  var painelKivy = document.getElementById("painel_kivy");
  var painelVb = document.getElementById("painel_vb");
  painelPy.style.display = "inline";
  painelFlask.style.display = "none";
  painelFront.style.display = "none";
  painelKivy.style.display = "none";
  painelVb.style.display = "none";

  var circleProg_0 = document.getElementById("circle_prog_0");
  var circleProg_1 = document.getElementById("circle_prog_1");
  var circleProg_2 = document.getElementById("circle_prog_2");
  var circleProg_3 = document.getElementById("circle_prog_3");
  var circleProg_4 = document.getElementById("circle_prog_4");
  var circleProg_5 = document.getElementById("circle_prog_5");
  var circleProg_6 = document.getElementById("circle_prog_6");
  var circleProg_7 = document.getElementById("circle_prog_7");

  circleProg_0.style.borderColor = "red";
  circleProg_0.style.color = "red";
  circleProg_1.style.borderColor = "gray";
  circleProg_1.style.color = "gray";
  circleProg_2.style.borderColor = "gray";
  circleProg_2.style.color = "gray";
  circleProg_3.style.borderColor = "gray";
  circleProg_3.style.color = "gray";
  circleProg_4.style.borderColor = "gray";
  circleProg_4.style.color = "gray";
  circleProg_5.style.borderColor = "gray";
  circleProg_5.style.color = "gray";
  circleProg_6.style.borderColor = "gray";
  circleProg_6.style.color = "gray";
  circleProg_7.style.borderColor = "gray";
  circleProg_7.style.color = "gray";
}

function ButtonProg_flask() {
  var menuPy = document.getElementById("menu_icon_py");
  var menuFlask = document.getElementById("menu_icon_flask");
  var menuFront = document.getElementById("menu_icon_front");
  var menuKivy = document.getElementById("menu_icon_kivy");
  var menuVb = document.getElementById("menu_icon_vb");

  menuPy.src = "images/python-0.png";
  menuPy.style.border = "none";

  menuFlask.src = "images/flask-1.png";
  menuFlask.style.border = "1px solid --cor_primaria1";
  menuFlask.style.borderRadius = "10px";

  menuFront.src = "images/front-0.png";
  menuFront.style.border = "none";

  menuKivy.src = "images/kivy-0.png";
  menuKivy.style.border = "none";

  menuVb.src = "images/vb-0.png";
  menuVb.style.border = "none";

  var painelPy = document.getElementById("painel_py");
  var painelFlask = document.getElementById("painel_flask");
  var painelFront = document.getElementById("painel_front");
  var painelKivy = document.getElementById("painel_kivy");
  var painelVb = document.getElementById("painel_vb");
  painelPy.style.display = "none";
  painelFlask.style.display = "inline";
  painelFront.style.display = "none";
  painelKivy.style.display = "none";
  painelVb.style.display = "none";

  var circleProg_0 = document.getElementById("circle_prog_0");
  var circleProg_1 = document.getElementById("circle_prog_1");
  var circleProg_2 = document.getElementById("circle_prog_2");
  var circleProg_3 = document.getElementById("circle_prog_3");
  var circleProg_4 = document.getElementById("circle_prog_4");
  var circleProg_5 = document.getElementById("circle_prog_5");
  var circleProg_6 = document.getElementById("circle_prog_6");
  var circleProg_7 = document.getElementById("circle_prog_7");

  circleProg_0.style.borderColor = "red";
  circleProg_0.style.color = "red";
  circleProg_1.style.borderColor = "orange";
  circleProg_1.style.color = "orange";
  circleProg_2.style.borderColor = "gray";
  circleProg_2.style.color = "gray";
  circleProg_3.style.borderColor = "gray";
  circleProg_3.style.color = "gray";
  circleProg_4.style.borderColor = "gray";
  circleProg_4.style.color = "gray";
  circleProg_5.style.borderColor = "gray";
  circleProg_5.style.color = "gray";
  circleProg_6.style.borderColor = "gray";
  circleProg_6.style.color = "gray";
  circleProg_7.style.borderColor = "gray";
  circleProg_7.style.color = "gray";
}

function ButtonProg_front() {
  var menuPy = document.getElementById("menu_icon_py");
  var menuFlask = document.getElementById("menu_icon_flask");
  var menuFront = document.getElementById("menu_icon_front");
  var menuKivy = document.getElementById("menu_icon_kivy");
  var menuVb = document.getElementById("menu_icon_vb");

  menuPy.src = "images/python-0.png";
  menuPy.style.border = "none";

  menuFlask.src = "images/flask-0.png";
  menuFlask.style.border = "none";

  menuFront.src = "images/front-1.png";
  menuFront.style.border = "1px solid --cor_primaria1";
  menuFront.style.borderRadius = "10px";

  menuKivy.src = "images/kivy-0.png";
  menuKivy.style.border = "none";

  menuVb.src = "images/vb-0.png";
  menuVb.style.border = "none";

  var painelPy = document.getElementById("painel_py");
  var painelFlask = document.getElementById("painel_flask");
  var painelFront = document.getElementById("painel_front");
  var painelKivy = document.getElementById("painel_kivy");
  var painelVb = document.getElementById("painel_vb");
  painelPy.style.display = "none";
  painelFlask.style.display = "none";
  painelFront.style.display = "inline";
  painelKivy.style.display = "none";
  painelVb.style.display = "none";

  var circleProg_0 = document.getElementById("circle_prog_0");
  var circleProg_1 = document.getElementById("circle_prog_1");
  var circleProg_2 = document.getElementById("circle_prog_2");
  var circleProg_3 = document.getElementById("circle_prog_3");
  var circleProg_4 = document.getElementById("circle_prog_4");
  var circleProg_5 = document.getElementById("circle_prog_5");
  var circleProg_6 = document.getElementById("circle_prog_6");
  var circleProg_7 = document.getElementById("circle_prog_7");

  circleProg_0.style.borderColor = "red";
  circleProg_0.style.color = "red";
  circleProg_1.style.borderColor = "orange";
  circleProg_1.style.color = "orange";
  circleProg_2.style.borderColor = "green";
  circleProg_2.style.color = "green";
  circleProg_3.style.borderColor = "blue";
  circleProg_3.style.color = "blue";
  circleProg_4.style.borderColor = "blue";
  circleProg_4.style.color = "blue";
  circleProg_5.style.borderColor = "blue";
  circleProg_5.style.color = "blue";
  circleProg_6.style.borderColor = "gray";
  circleProg_6.style.color = "gray";
  circleProg_7.style.borderColor = "gray";
  circleProg_7.style.color = "gray";
}

function ButtonProg_kivy() {
  var menuPy = document.getElementById("menu_icon_py");
  var menuFlask = document.getElementById("menu_icon_flask");
  var menuFront = document.getElementById("menu_icon_front");
  var menuKivy = document.getElementById("menu_icon_kivy");
  var menuVb = document.getElementById("menu_icon_vb");

  menuPy.src = "images/python-0.png";
  menuPy.style.border = "none";

  menuFlask.src = "images/flask-0.png";
  menuFlask.style.border = "none";

  menuFront.src = "images/front-0.png";
  menuFront.style.border = "none";

  menuKivy.src = "images/kivy-1.png";
  menuKivy.style.border = "1px solid --cor_primaria1";
  menuKivy.style.borderRadius = "10px";

  menuVb.src = "images/vb-0.png";
  menuVb.style.border = "none";

  var painelPy = document.getElementById("painel_py");
  var painelFlask = document.getElementById("painel_flask");
  var painelFront = document.getElementById("painel_front");
  var painelKivy = document.getElementById("painel_kivy");
  var painelVb = document.getElementById("painel_vb");
  painelPy.style.display = "none";
  painelFlask.style.display = "none";
  painelFront.style.display = "none";
  painelKivy.style.display = "inline";
  painelVb.style.display = "none";

  var circleProg_0 = document.getElementById("circle_prog_0");
  var circleProg_1 = document.getElementById("circle_prog_1");
  var circleProg_2 = document.getElementById("circle_prog_2");
  var circleProg_3 = document.getElementById("circle_prog_3");
  var circleProg_4 = document.getElementById("circle_prog_4");
  var circleProg_5 = document.getElementById("circle_prog_5");
  var circleProg_6 = document.getElementById("circle_prog_6");
  var circleProg_7 = document.getElementById("circle_prog_7");

  circleProg_0.style.borderColor = "red";
  circleProg_0.style.color = "red";
  circleProg_1.style.borderColor = "orange";
  circleProg_1.style.color = "orange";
  circleProg_2.style.borderColor = "green";
  circleProg_2.style.color = "green";
  circleProg_3.style.borderColor = "blue";
  circleProg_3.style.color = "blue";
  circleProg_4.style.borderColor = "blue";
  circleProg_4.style.color = "blue";
  circleProg_5.style.borderColor = "blue";
  circleProg_5.style.color = "blue";
  circleProg_6.style.borderColor = "blue";
  circleProg_6.style.color = "blue";
  circleProg_7.style.borderColor = "gray";
  circleProg_7.style.color = "gray";
}

function ButtonProg_vb() {
  var menuPy = document.getElementById("menu_icon_py");
  var menuFlask = document.getElementById("menu_icon_flask");
  var menuFront = document.getElementById("menu_icon_front");
  var menuKivy = document.getElementById("menu_icon_kivy");
  var menuVb = document.getElementById("menu_icon_vb");

  menuPy.src = "images/python-0.png";
  menuPy.style.border = "none";

  menuFlask.src = "images/flask-0.png";
  menuFlask.style.border = "none";

  menuFront.src = "images/front-0.png";
  menuFront.style.border = "none";

  menuKivy.src = "images/kivy-0.png";
  menuKivy.style.border = "none";

  menuVb.src = "images/vb-1.png";
  menuVb.style.border = "1px solid --cor_primaria1";
  menuVb.style.borderRadius = "10px";

  var painelPy = document.getElementById("painel_py");
  var painelFlask = document.getElementById("painel_flask");
  var painelFront = document.getElementById("painel_front");
  var painelKivy = document.getElementById("painel_kivy");
  var painelVb = document.getElementById("painel_vb");
  painelPy.style.display = "none";
  painelFlask.style.display = "none";
  painelFront.style.display = "none";
  painelKivy.style.display = "none";
  painelVb.style.display = "inline";

  var circleProg_0 = document.getElementById("circle_prog_0");
  var circleProg_1 = document.getElementById("circle_prog_1");
  var circleProg_2 = document.getElementById("circle_prog_2");
  var circleProg_3 = document.getElementById("circle_prog_3");
  var circleProg_4 = document.getElementById("circle_prog_4");
  var circleProg_5 = document.getElementById("circle_prog_5");
  var circleProg_6 = document.getElementById("circle_prog_6");
  var circleProg_7 = document.getElementById("circle_prog_7");

  circleProg_0.style.borderColor = "red";
  circleProg_0.style.color = "red";
  circleProg_1.style.borderColor = "orange";
  circleProg_1.style.color = "orange";
  circleProg_2.style.borderColor = "green";
  circleProg_2.style.color = "green";
  circleProg_3.style.borderColor = "blue";
  circleProg_3.style.color = "blue";
  circleProg_4.style.borderColor = "blue";
  circleProg_4.style.color = "blue";
  circleProg_5.style.borderColor = "blue";
  circleProg_5.style.color = "blue";
  circleProg_6.style.borderColor = "blue";
  circleProg_6.style.color = "blue";
  circleProg_7.style.borderColor = "blue";
  circleProg_7.style.color = "blue";
}