// Code your solutions in this file

function writeCards(names, eventName){
    const cardMessages = [];
    for(let i=0 ; i<names.length ; i++){
        cardMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cardMessages;
}

function countDown(num){
    if (num<0) console.error("The Number should be a positive integer!")
    while(num>=0) {
        console.log(num);
        num--;
    }
}