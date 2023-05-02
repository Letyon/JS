// 난수발생은 js에서도 math.random()가능
// Math.floor(자료)는 내림
// Math.ceil(자료)는 올림
// Math.round(자료)는 반올림

var age = Math.floor(Math.random() * 100);

if(age > 19){
    console.log("성인이에요. 주류 구매 가능");
}else if(age >= 17){
    console.log("고딩");
}else if(age >= 14){
    console.log("중딩");
}else if(age >= 8){
    console.log("초딩");
}else{
    console.log("미취학 아동");
}
