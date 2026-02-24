function calculate() {
    let res = eval(document.getElementById('input_range').value);
    document.getElementById('result').innerText = res;
    document.getElementById('input_range').value = res;
}


function clearAll() {
    const input = document.getElementById('input_range');
    if (input) input.value = '';
    const result = document.getElementById('result');
    if (result) result.innerText = 'Output';
}


function press(ch) {
    const input = document.getElementById('input_range');
    if (!input) return;
    input.value = input.value + ch;
}


document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        calculate();
    }
});