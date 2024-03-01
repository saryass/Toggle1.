const myBTN =document.getElementById('myBTN');
const carBox = document.getElementById('carBox');
// const car1=document.getElementById('car1');
// const car2=document.getElementById('car2');    
// const car3=document.getElementById('car3');   

let saryass = false;

myBTN.addEventListener('click', e => {
    saryass= !saryass;
    if(saryass) {    //write the changes you wanna see after the first click.
        myBTN.textContent='Show';
        carBox.style.visibility='hidden';
    }
    else{    // write the change u wanna see after second click, 99.99% you want to revert/getting back to the original state. ;)
        myBTN.textContent='Hide'; 
        carBox.style.visibility='visible';
    }
})












// if( carBox.style.visibility==='hidden') {    //Toggling between hiding and showing the  carBox HTML element..  
     
//     carBox.style.visibility='visible'; 
//     myBTN.textContent='Hide';
// }
// else{
//     carBox.style.visibility='hidden'; 
//     myBTN.textContent='Show';
// } 






























