const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(arr, event){
    const messages = [];
    for (let i = 0; i < arr.length; i++){
        let message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
console.log(writeCards(names, "surprise"));

function countDown(num){
    let i = 0;
    while (i <= num){
        console.log(num);
        num--;
    }
    return i;
}
console.log(countDown(10));