// Code your solutions in this file
function writeCards(names, event) {
    let thankYouCard = []
    for (let i = 0; i < names.length; i++){
        thankYouCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCard;
}

function countDown(number){
    let value = number;
    while (value >= 0){
        console.log(value--);
    }
    return number;
}
