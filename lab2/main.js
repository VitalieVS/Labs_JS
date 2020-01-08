document.getElementById("nr_but").addEventListener("click", checkNr);
document.getElementById("interv_but").addEventListener("click", checkInterv);
document.getElementById("nr_n").addEventListener("click", checkN);
document.getElementById("max").addEventListener("click", checkMax);

function parseDataNr() {
    return (document.getElementById("nr_id").value);
}

function parseDataInterv_1() {
    return (document.getElementById("interv_1").value);
}

function parseDataInterv_2() {
    return (document.getElementById("interv_2").value);
}

function parseN() {
    return (document.getElementById("n_3").value);
}

function checkNr() {
    if (isPerfect(parseDataNr())) {
        alert('este perfect!');
    } else {
        alert('nu este perfect!')
    }
}

function isPerfect(x) {
    let aux = 0;
    for (let i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            aux += i;
        }
    }
    return (aux == x && aux !== 0);
}

function checkInterv() {
    clearTextArea();
    for (let i = parseDataInterv_1(); i < parseDataInterv_2(); i++) {
        if (isPerfect(i) && i !== 1) {
            writeToTXT(i);
        }
    }
}

function checkN() {
    let i = 1;
    let nr = 1;
    let count = parseN();
    clearTextArea();
    while (i <= count) {
        nr++;
        if (isPerfect(nr) && nr !== 1) {
            writeToTXT(nr);
            i++;
        }
    }
}

function checkMax() {
    for (let i = Number.MAX_VALUE; i < 0; i--) {
        if (isPerfect(i) && i !== 1) {
            alert(i);
            break;
        }
    }
}

function writeToTXT(i) {
    let init = document.getElementById("number_count").innerHTML;
    document.getElementById("number_count").innerHTML = init + ' ' + i;
}

function clearTextArea() {
    document.getElementById("number_count").innerHTML = '';
}