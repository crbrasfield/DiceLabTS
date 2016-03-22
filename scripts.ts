class Die {
    value: number;
    div: HTMLDivElement;

    newDie() {
        let newdiv = document.createElement('div');
        this.div = newdiv;
        newdiv.className = 'die';
        this.roll();
        newdiv.innerText = String(this.value);
        document.getElementById('dieContainer').appendChild(newdiv);
    };

    roll() {
        let num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerText = String(num);
    };
};




let loadedDie = [];


function addDie() {
    let dice = new Die;
    dice.newDie();
    loadedDie.push(dice);
    console.log(loadedDie);
};

function rollDice() {
    console.log('clicked');
    for (let i = 0; i < loadedDie.length; i++) {
        loadedDie[i].roll();
    };
};



