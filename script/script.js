// Creating each composant of the calculator

const body = document.getElementById("body") ; 

const container = document.createElement("div");
container.id = "container";

const calculator = document.createElement("div");
calculator.id="calculator";


const mode = document.createElement("div");
mode.id = "mode";

const dark_mode = document.createElement("div");
dark_mode.id = "dark_mode";

const light_mode = document.createElement("div");
light_mode.id = "light_mode";

const font_lm = document.createElement("i");
font_lm.className = "fa-thin fa-sun";

const screen = document.createElement("div");
screen.id = "screen";

const operation = document.createElement("div");
operation.id = "operation";

const operation_value = document.createElement("p");
operation_value.id = "operation_value";

const result = document.createElement("div");
result.id = "result";

const result_value = document.createElement("p");
result_value.id = "result_value";


const keyboard = document.createElement("div");
keyboard.id = "keyboard";

const row1 = document.createElement("div");
row1.id = "row1";

const row2 = document.createElement("div");
row2.id = "row2";

const row3 = document.createElement("div");
row3.id = "row3";

const row4 = document.createElement("div");
row4.id = "row4";

const row5 = document.createElement("div");
row5.id = "row5";

const btn_AC = document.createElement("button");
btn_AC.id = "clear";
btn_AC.className = "clear_operator";

const txt_AC = document.createTextNode("AC");

const btn_sign = document.createElement("button");
btn_sign.id = "sign";
btn_sign.className = "operator";

const font_sign = document.createElement("i");
font_sign.className = "";

const btn_percent = document.createElement("button");
btn_percent.id = "percent";
btn_percent.className = "operator";
const txt_percent = document.createTextNode("%");

const btn_del = document.createElement("button");
btn_del.id = "delete";
btn_del.className = "delete_operator";
const font_del = document.createElement("i");
font_del.className = "fa-solid fa-arrow-rotate-left";

const btn_minus = document.createElement("button");
btn_minus.id = "minus";
btn_minus.className = "operator";
const txt_minus = document.createTextNode("-");

const btn_plus = document.createElement("button");
btn_plus.id = "plus";
btn_plus.className = "operator";
const txt_plus = document.createTextNode("+");

const btn_divison = document.createElement("button");
btn_divison.id = "division";
btn_divison.className = "operator";
const txt_divison = document.createTextNode("÷");

const btn_time = document.createElement("button");
btn_time.id = "time";
btn_time.className = "operator";
const txt_time = document.createTextNode("×");

const btn_equal = document.createElement("button");
btn_equal.id = "equal";
btn_equal.className = "equal_operator"
const txt_equal = document.createTextNode("=");

const btn_point = document.createElement("button");
btn_point.id = "point";
btn_point.className = "number" ;
const txt_point = document.createTextNode(".");

const btn_0 = document.createElement("button");
btn_0.id = "0";
btn_0.className="number";

const txt_0 = document.createTextNode("0");

const btn_1 = document.createElement("button");
btn_1.id = "1";
btn_1.className="number";

const txt_1 = document.createTextNode("1");

const btn_2 = document.createElement("button");
btn_2.id = "2";
btn_2.className="number";

const txt_2 = document.createTextNode("2");

const btn_3 = document.createElement("button");
btn_3.id = "3";
btn_3.className="number";

const txt_3 = document.createTextNode("3");

const btn_4 = document.createElement("button");
btn_4.id = "4";
btn_4.className="number";

const txt_4 = document.createTextNode("4");

const btn_5 = document.createElement("button");
btn_5.id = "5";
btn_5.className="number";

const txt_5 = document.createTextNode("5");

const btn_6 = document.createElement("button");
btn_6.id = "5";
btn_6.className="number";

const txt_6 = document.createTextNode("6");

const btn_7 = document.createElement("button");
btn_7.id = "7";
btn_7.className="number";

const txt_7 = document.createTextNode("7");

const btn_8 = document.createElement("button");
btn_8.id = "8";
btn_8.className="number";

const txt_8 = document.createTextNode("8");

const btn_9 = document.createElement("button");
btn_9.id = "9";
btn_9.className="number";

const txt_9 = document.createTextNode("9");

// Nesting the element
body.append(container)
    container.append(calculator);
        calculator.append(mode,screen,keyboard);
            mode.append(dark_mode,light_mode)
            screen.append(operation,result);
                operation.append(operation_value);
                result.append(result_value);
            keyboard.append(row1,row2,row3,row4,row5);
                row1.append(btn_AC,btn_sign,btn_percent,btn_divison);
                    btn_AC.append(txt_AC);
                    btn_percent.append(txt_percent);
                    btn_divison.append(txt_divison);
                row2.append(btn_7,btn_8,btn_9,btn_time);
                    btn_7.append(txt_7);
                    btn_8.append(txt_8);
                    btn_9.append(txt_9);
                    btn_time.append(txt_time);
                row3.append(btn_4,btn_5,btn_6,btn_minus);
                    btn_4.append(txt_4);
                    btn_5.append(txt_5);
                    btn_6.append(txt_6);
                    btn_minus.append(txt_minus);
                row4.append(btn_1,btn_2,btn_3,btn_plus);
                    btn_1.append(txt_1);
                    btn_2.append(txt_2);
                    btn_3.append(txt_3);
                    btn_plus.append(txt_plus);
                row5.append(btn_del,btn_0,btn_point,btn_equal);
                    btn_0.append(txt_0);
                    btn_point.append(txt_point);
                    btn_equal.append(txt_equal);

// Logic of the Calculator
dark_mode.addEventListener("click",()=>{

    const calculator = document.getElementById("calculator");
    calculator.style.backgroundColor = "#22252d";

    const mode = document.getElementById("mode");
    mode.style.backgroundColor = "#292d36";

    const dm = document.getElementById("dark_mode");
    dm.backgroundImage = "../images/sun_dm.png";

    const lm = document.getElementById("light_mode");
    lm.backgroundImage = "../images/moon_dm.png";

    const operation =document.getElementById("operation");
    operation.style.backgroundColor = "#22252d";
    operation.style.color= "#ffffff";

    const result = document.getElementById("result");
    result.style.backgroundColor = "#22252d";
    result.style.color = "#ffffff";

    const keyboard = document.getElementById("keyboard");
    keyboard.style.backgroundColor="#292d36"
    for(let i=0;i<5;i++)
    {
        for(let j=0;j<4;j++)
        {
            keyboard.childNodes[i].childNodes[j].style.backgroundColor = "#272b33" ;
        }
    }

    const point = document.getElementById("point");
    point.style.color = "#e6e7e7";

    const number = document.getElementsByClassName("number");
    for(let i=0;i<number.length;i++)
    {
        number[i].style.color="#e6e7e7";
    }



})

light_mode.addEventListener("click",()=>{

    const calculator = document.getElementById("calculator");
    calculator.style.backgroundColor = "#ffffff";

    const mode = document.getElementById("mode");
    mode.style.backgroundColor = "#f9f9f9";

    const dm = document.getElementById("dark_mode");
    dm.backgroundImage = "../images/sun_lm.png";

    const lm = document.getElementById("light_mode");
    lm.backgroundImage = "../images/moon_lm.png";

    const operation =document.getElementById("operation");
    operation.style.backgroundColor = "#ffffff";
    operation.style.color= "black";

    const result = document.getElementById("result");
    result.style.backgroundColor = "#ffffff";
    result.style.color = "black";

    const keyboard = document.getElementById("keyboard");
    keyboard.style.backgroundColor="#f9f9f9"
    for(let i=0;i<5;i++)
    {
        for(let j=0;j<4;j++)
        {
            keyboard.childNodes[i].childNodes[j].style.backgroundColor = "#f7f7f7" ;
        }
    }

    const point = document.getElementById("point");
    point.style.color = "black";

    const number = document.getElementsByClassName("number");
    for(let i=0;i<number.length;i++)
    {
        number[i].style.color="black";
    }

})

const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const del_op = document.getElementById("delete");
const clear_op = document.getElementById("clear");
const equal_op = document.getElementById("equal");
const sign_op  = document.getElementById("sign");
let operation_array = [];
let operation_string = [];

function printInput(num)
{
    let input = document.getElementById("operation_value");
    input.textContent = num;
}

function printOutput(num)
{
    let output = document.getElementById("result_value");
    output.textContent = num;
}

math.createUnit("percent","0.01");

clear_op.addEventListener("click",()=>{
    while(operation_value.firstChild)
    {
      operation_value.removeChild(operation_value.firstChild);
    }
    operation_array=[];
    printInput("");
    printOutput("");
})

sign_op.addEventListener("click",()=>{
    if(result.hasChildNodes)
    {
        let opposite =-1*(Number.parseFloat((result.textContent)))
        printOutput(opposite.toString());
    }
})

del_op.addEventListener("click",()=>{
    operation_value.removeChild(operation_value.lastElementChild);
    operation_array.pop();
})

equal_op.addEventListener("click",()=>{
    try{
        operation_string=operation_array.join("").replace("%","percent").replace("÷","/").replace("×","*");
        printOutput(math.evaluate(operation_string).toString());
    }
    catch(error){
        printOutput("ERROR");
    }
})

for(let i=0;i<numbers.length;i++)
{
    numbers[i].addEventListener("click",()=>{
       var node = document.createElement("span");
       node.className="sp_number";
       node.innerHTML=numbers[i].textContent;
       operation_value.append(node);
       operation_array.push(numbers[i].textContent);
    })
}

for(let i=0;i<operators.length;i++){
    operators[i].addEventListener("click",()=>{
        var node = document.createElement("span");
        if(operators[i].textContent!="%") node.className="sp_operator";
        else node.className="percent_operator";
        node.innerHTML=operators[i].textContent;
        operation_value.append(node);
        operation_array.push(operators[i].textContent);
     })
}
