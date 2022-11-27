const form = document.getElementById('calc_form');
const output = document.getElementById('output');
const operand_btn = document.querySelectorAll('button[data-type=operand]');
const operator_btn = document.querySelectorAll('button[data-type=operator]')

form.addEventListener("submit", (e) => {
 e.preventDefault();
});

let isOperator = false;

operand_btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(output.value == '0'){
            output.value = e.target.value;
        } else if (output.value.includes(".")){
            output.value = output.value + '' + e.target.value.replace('.', '');
        } else if(isOperator){
            isOperator = true;
            output.value = e.target.value;
        } else {
            output.value = output.value + "" + e.target.value;
        }
    })
})

operator_btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        
    })
})



