// document.addEventListener('scroll', ()=>{
//     let nav = document.getElementById('nav');
    
//     if (window.scrollY > 870){
//         nav.style.backgroundColor = 'black';
//         nav.style.height = '100px';
//         // nav.ul.style.color = 'blue';
//     }else{
//         nav.style.backgroundColor = '';
//     }
// }
// )


function navOnScroll () {
  var nav = document.getElementById('nav');
//   console.log(window.scrollY)
  if(window.scrollY > 870 & window.scrollY < 1800){
   nav.className = 'nav_2'
//    nav.classList.add('nav_2')
  }else if(window.scrollY >= 1800){
      nav.className = 'nav_3'
  }else if(window.scrollY > 2100){
    nav.style.top = '0';
  }else {
    nav.className = '' 
  }
}

function tap() {
 let popUp = document.getElementById('pop');
 
 if(popUp){
  alert('what exactly do you want?')
  alert.innerHTML.style.color = 'red'
 }else{
  alert('')
 }
}


// function hideElement(x) {
//     var content = document.getElementById(x)
//     content.style.display = 'none';

// }

function clickMe() {
  let flow = document.getElementById('clickMe')
  
  if (window.screenY > 10000){
    flow.classList.add('.mother-1')
    // console.log(clickMe)

  }else{
    flow.className = ''
  }
}

// document.addEventListener('scroll', () => {
//     let nav = document.getElementById ('nav');
    
//     if (window.scrollY > 1900){
//         nav.style.backgroundColor = 'white';
//         li.style.color = 'red';
//     }else{
//         nav.style.backgroundColor = '';
//     }
// })