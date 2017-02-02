var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if(MINUTE<30 && PERIOD === "AM"){
    console.log("It's just after "+HOUR+" in the in the morning");
}
if(MINUTE<30 && PERIOD === "PM"){
    console.log("It's just after "+HOUR+" in the in the evening");
}
if(MINUTE>30 && PERIOD === "AM"){
    console.log("It's just after "+HOUR+" in the in the morning");
}
if(MINUTE>30 && PERIOD === "PM"){
    console.log("It's just after "+HOUR+" in the in the evening");
}
