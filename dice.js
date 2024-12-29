function RollDice(){
    const numberofdice=document.getElementById("numberofdice").value;
    const diceresult=document.getElementById("diceresult");
     const imageresult=document.getElementById("imageresult");
     const values = [];
     const images = [];
    for(let i = 0; i<numberofdice ; i++){
      const value= Math.floor(Math.random() * 6)  + 1;
      values.push(value);
      images.push(`<img src="images/${value}.png" alt="dice ${value}">`);
    
    }
    diceresult.textContent =`dice: ${values.join(', ')}`;
    imageresult.innerHTML = images.join('');
    }