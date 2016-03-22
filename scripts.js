var Die = (function () {
    function Die() {
    }
    Die.prototype.newDie = function () {
        var newdiv = document.createElement('div');
        this.div = newdiv;
        newdiv.className = 'die';
        this.roll();
        newdiv.innerText = String(this.value);
        document.getElementById('dieContainer').appendChild(newdiv);
    };
    ;
    Die.prototype.roll = function () {
        var num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerText = String(num);
    };
    ;
    return Die;
}());
;
var loadedDie = [];
function addDie() {
    var dice = new Die;
    dice.newDie();
    loadedDie.push(dice);
    console.log(loadedDie);
}
;
function rollDice() {
    console.log('clicked');
    for (var i = 0; i < loadedDie.length; i++) {
        loadedDie[i].roll();
    }
    ;
}
;
