document.getElementById("check_number_but").addEventListener("click", () => {
    checkNumber();
});
document.getElementById("interval_but").addEventListener("click", () => {
    checkInterval();
});
document.getElementById("first_numbers_but").addEventListener("click", () => {
    showResult('first_numbers_result', 'wait...');
    setTimeout(function () {
        getFirstNumbers();
    }, 1)
    
});
document.getElementById("max").addEventListener("click", checkMax);


const getNumber = (inputId) => {
    return document.getElementById(inputId).value
};

function isPerfect(x) {
    if(x === 0) {
        return false;
    }
    let dividersSum = 0;
    for (let i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            dividersSum += i;
        }
    }
    return dividersSum === x;
}

const checkNumber = () => {
    showNumberResult(isPerfect(getNumber('number')));
};

const showNumberResult = (isPerfect) => {
    document.getElementById('number_is_perfect_result').style.display = isPerfect?'block': 'none';
    document.getElementById('number_not_perfect_result').style.display = isPerfect?'none': 'block';
};

const checkInterval = () => {
    const perfectNumbers = [];
    for (let i = Math.max(2, getNumber('value_from')); i < getNumber('value_to'); i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        }
    }
    showResult('interval_result', perfectNumbers.join(", "));
};

const showResult = (elementID, result) => {
    document.getElementById(elementID).innerHTML = result;
};

const getFirstNumbers = () => {
    const perfectNumbers = [];
    let founded = 0;
    const needToFind = getNumber('first_numbers_count');
    let i = 6;
    while (founded < needToFind && i < 100000) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
            founded++;
        }
        i++;
    }
    showResult('first_numbers_result', perfectNumbers.join(", "));
};

function checkMax() {
    for (let i = Number.MAX_VALUE; i < 0; i--) {
        if (isPerfect(i) && i !== 1) {
            alert(i);
            break;
        }
    }
}
