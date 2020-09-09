function Main(){
    let Operation = prompt("Operation:");
    let Num1 = Number(prompt("Number 1:")), Num2 = Number(prompt("Number 2:"));

    switch (Operation) {
        case "+":
            Sum(Num1, Num2, Operation);
            break;
        case "-":
            Subtraction(Num1, Num2, Operation);
        case "/":
            Division(Num1, Num2, Operation);
            break;
        case "*":
            Multiplication(Num1, Num2, Operation); 
        default:
            break;
    }
}

function Sum(Num1, Num2, Operation){
    let Total;
    Total = Num1 + Num2;
    Insert(Num1, Num2, Total, Operation);
}

function Subtraction(Num1, Num2, Operation){
    let Total;
    Total = Num1 - Num2;
    Insert(Num1, Num2, Total, Operation);
}

function Division(Num1, Num2, Operation){
    let Total;
    Total = Num1 / Num2;
    Insert(Num1, Num2, Total, Operation);
}

function Multiplication(Num1, Num2, Operation){
    let Total;
    Total = Num1 * Num2;
    Insert(Num1, Num2, Total, Operation);
}

function Insert(Num1, Num2, Total, Operation){
    console.log(Total);
    document.getElementById("Container").innerHTML = 
    `<p id="Num">Operation: ${Operation}</p>`;

    document.getElementById("Container").innerHTML += 
    `<p id="Num">${Num1} ${Operation} ${Num2} = ${Total}</p>`;
}

Main();