let num = Number(prompt(""));

if(num < 10){
    console.log("Small");
}
else if (num < 100){
    console.log("Medium");
} else{
    console.log("Large");
}

var num1 = Number(prompt("Num 1:")), num2 =  Number(prompt("Num 2:"));

if(num1 > num2){
    console.log(num1);
}
else{
    console.log(num2);
}

var i = 0;
while (i <= 101){
    console.log(i);
    i++;
}
i = 0;

do{
    console.log(i);
    i++;
}while(i <= 101);