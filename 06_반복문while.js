// 1 ~ 100까지 홀수만 더한 총합

var total = 0;

var n = 100;

while (n > 0){
    if(n % 2 === 1){
    total += n;
    }
    n--;
}
console.log(`1~100까지의 홀수 총합 : ${total}`);