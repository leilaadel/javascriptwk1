function numarray(array){
    var number=[];
    for(var i=0; i<array.length; i++){
        if(typeof array[i] === 'number'){
            number.push(array[i]);
        }
    }
    return number;
}
