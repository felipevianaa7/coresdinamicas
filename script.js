let total = [];
let letras = ['a','b','c','d','e','f'];
let numb;
let sorte;
let aleatorio;
let txt1 = document.querySelector(`input#txt1`);
let txt2 = document.querySelector(`input#txt2`);
let txt3 = document.querySelector(`input#txt3`);
let bto1 = document.querySelector(`input#bto1`);
let bto2 = document.querySelector(`input#bto2`);
let bto3 = document.querySelector(`input#bto3`);


function alterar(checar) {      
    if(checar == 1) {
        txt1.style.background = `rgb(241, 42, 42)`;
    } if (checar == 2) {
        txt2.style.background = `rgb(30, 196, 30)`;
    } if (checar == 3) {
        txt3.style.background = `rgb(28, 99, 250)`;      
    }
    
}

function roletar(checar) {    
    for(let cont = 0;cont <= 5;cont++) {
        sorte = `${Math.floor(Math.random() * 5)}`;
        if(sorte <= 2) {
            numb = `${Math.floor(Math.random() * 9)}`;
            total[cont] = numb;

        } if(sorte > 2) {
            total[cont] = `${letras[Math.floor(Math.random() * letras.length)]}`;
            
        }            
    }   
    aleatorio = `${total[0]}${total[1]}${total[2]}${total[3]}${total[4]}${total[5]}`; 
    console.log(aleatorio);
    if (checar == 1) {
        txt1.style.background = `#${aleatorio}`;
        bto1.style.background = `#${aleatorio}`;
    } if (checar == 2) {
        txt2.style.background = `#${aleatorio}`;
        bto2.style.background = `#${aleatorio}`;
    } if (checar == 3) {
        txt3.style.background = `#${aleatorio}`;
        bto3.style.background = `#${aleatorio}`;  
    }   
      
    
}


function testar() {
    setInterval(mudarCor,1000);
} 


function mudarCor() {    
    for(let cont = 0;cont <= 5;cont++) {
        sorte = `${Math.floor(Math.random() * 5)}`;
        if(sorte <= 2) {
            numb = `${Math.floor(Math.random() * 9)}`;
            total[cont] = numb;

        } if(sorte > 2) {
            total[cont] = `${letras[Math.floor(Math.random() * letras.length)]}`;
            
        }            
    }
   
  aleatorio = `${total[0]}${total[1]}${total[2]}${total[3]}${total[4]}${total[5]}`; 
  console.log(aleatorio);
  document.body.style.background = `#${aleatorio}`;        
}
