var daysUntilMyBirthday = 60;

while(daysUntilMyBirthday>=0){
  if(daysUntilMyBirthday>30){
    console.log(daysUntilMyBirthday +"days until my birthday. Such a long time... :(");
  }
  if(daysUntilMyBirthday<30 && daysUntilMyBirthday>5){
    console.log(daysUntilMyBirthday +"days until my birthday. I am so excited");
  }
  if(daysUntilMyBirthday<5 && daysUntilMyBirthday!=0){
    console.log(daysUntilMyBirthday +"days until my birthday. I AM SO EXCITED");
  }
  if(daysUntilMyBirthday==0){
    console.log(daysUntilMyBirthday +"days until my birthday. PARTY TIMEEEEE");
  }
  daysUntilMyBirthday--
}
