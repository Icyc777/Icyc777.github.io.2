let bot_score = 0;
let tvoi_score = 0;
let bot_score2 = 0;
let tvoi_score2 = 0;
i=0;
const cards = [
  {name:"6", value:6},
  {name:"7", value:7},
  {name:"8", value:8},
  {name:"9", value:9},
  {name:"10", value:10},
  {name:"V", value:2},
  {name:"Q", value:3},
  {name:"K", value:4},
  {name:"T", value:11}
];
function randomCard(){
    return cards[Math.floor(Math.random()*cards.length)];
}
function zagruzka(){
    let nik = prompt("ведіть нік","");
    document.getElementById("nik").value=nik;
    if (nik==""){
        alert("Ви не вели нік");
        const nik = "You";
        document.getElementById("nik").value=nik;
        document.getElementById("nikfalse").value=nik;

    }    
}
function pass() {
    if(bot_score<16){
        let bot_Card = randomCard();
        bot_score+= bot_Card.value;
        document.getElementById("bot_score").value=bot_score;
        if(bot_score>=16){
            check()
        }
    }
}
function raund(){
    if(i>=3){
        check2()
        return
    }
    const tvoi_Card = randomCard();
    tvoi_score2 += tvoi_Card.value;
    document.getElementById("tvoi_scorefalse").value=tvoi_score2;
    const bot_Card = randomCard();
    bot_score2+= bot_Card.value;
    document.getElementById("bot_scorefalse").value=bot_score2;
    i++;
}

function add(){
    const tvoi_Card = randomCard();
    tvoi_score += tvoi_Card.value;
    document.getElementById("tvoi_score").value=tvoi_score;
}

function check2(){
    
    let nik = document.getElementById("nik").value;
    if(tvoi_score2==bot_score2){
        alert("Ніч'я");
    }
    if(tvoi_score2>bot_score2){
            alert(nik +' WIN');
        } 
   if(bot_score2>tvoi_score2){
            alert('Bot WIN');
    } 
}
function check(){
    let nik = document.getElementById("nik").value;

    if(bot_score<16){
        pass()
    }
    if(tvoi_score==bot_score|| tvoi_score>21&&bot_score>21){
        alert("Ніч'я");
    }
    if(tvoi_score>bot_score && tvoi_score<=21||tvoi_score<bot_score&&bot_score>21){
            alert(nik +' WIN');
        } 
   if(bot_score>tvoi_score && bot_score<=21||bot_score<tvoi_score&&tvoi_score>21){
            alert('Bot WIN');
    } 
}
