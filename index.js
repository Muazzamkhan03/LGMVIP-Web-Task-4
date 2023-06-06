// Functions 

const clear = () => {
    document.getElementById("result").value = "";
}

const display = (value) => {
    document.getElementById("result").value += value;
}

const calculate = () => {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}

// Event Listeners 

Array.from(document.querySelectorAll('.valBtn')).forEach((element) => {
    element.addEventListener('click',(e) => {
        display(e.target.value);
    })
})

document.querySelector("#equal").addEventListener('click', calculate);

document.querySelector('#clear').addEventListener('click', clear);