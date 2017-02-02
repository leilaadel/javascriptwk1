var winnum;
var winnings;
function slots(quarters){
  while(quarters>0){
    winnum = Math.floor((Math.random()*100)+1);
    if(winnum == 4){
      winnings = Math.floor((Math.random()*50)+50);
      console.log("player wins " +winnings+ " coins");
      return winnings+quarters;
    }
    quarters--;
    if(quarters === 0){
        return 0;
    }
}
}
