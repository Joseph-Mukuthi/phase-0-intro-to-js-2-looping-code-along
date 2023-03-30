const names = ["Guadalupe", "Ollie", "Aki"]; // Names to loop through

function writeCards(arr, event){
    /**Used to create thank you messages
     * from a list of names then appends to messages array
     */
    const messages = [];
    for (let i = 0; i < arr.length; i++){
        let message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
console.log(writeCards(names, "surprise"));

function countDown(num){
    /**Count down from given number
     * all the way down to zero
     */
    let i = 0;
    while (i <= num){
        console.log(num);
        num--;
    }
    return i;
}
console.log(countDown(10));