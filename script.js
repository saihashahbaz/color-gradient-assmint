const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn= document.querySelector("refresh");

  

const generateGradient = () =>{

  

  //creating a gradeint string using the color  input values
const  gradient = `linear-gradient(${selectMenu.value},    ${colorInputs[0].value}, ${colorInputs[1].value})`;
gradientBox.style.background = gradient;
textarea.value= `background: ${gradient};`;
}



colorInputs.forEach(input =>{
// calling generateGradient funcion on each color input clicks
input.addEventListener("input",generateGradient);
});
  
selectMenu.addEventListener("change", generateGradient);
