let x = [];
document.getElementById("n_holder").addEventListener("change", enableText);
document.getElementById("rdArr").addEventListener("click", checkN);
document.getElementById("nAdd").addEventListener("click", addN);
document.getElementById("rem").addEventListener("click", remN);

function enableText() {
    document.getElementById("txtInpt").disabled = false;
}

function parseN() {
    return (document.getElementById("n_holder").value);
}

function getArray() {
    let s = document.getElementById("txtInpt").value;
    return (s.match(/\d+/g));
}

function checkN() {
    if (getArray().length == parseN()) {
        rot();
        wrtRes(getMx(), getMn(), getMedia(), sort(), ridic());
    } else {
        clearTXT();
    }
}

function clearTXT() {
    document.getElementById("txtInpt").value = '';
}

function getMx() {
    let max = -Infinity;
    for (let i = 0; i <= getArray().length; i++) {
        if (getArray()[i] > max) {
            max = getArray()[i];
        }
    }
    return max;
}

function getMn() {
    let min = Infinity;
    for (let i = 0; i <= getArray().length; i++) {
        if (getArray()[i] < min) {
            min = getArray()[i];
        }
    }
    return min;
}

function wrtRes(max, min, media, sort, nr) {
    document.getElementById("mx_mn").innerHTML = "Min: " + min + "Max: " + max;
    document.getElementById("media").innerHTML = "Media" + media;
    document.getElementById("sort").innerHTML = "Sortat:" + sort;
    document.getElementById("ridic").innerHTML = "nr temp ridicate:" + nr;
}

function getMedia() {
    let res = getArray().map(Number);
    let med = res.reduce((nr, currentVal) => nr + currentVal);
    return med / parseN();
}

function sort() {
    return (getArray().sort(function (a, b) {
        return a - b
    }));
}

function rot() {
    let arr = getArray();
    let arr_rot = [];
    let k = document.getElementById("rot_h").value;
    let index = 0;
    let len = arr.length - 1;
    for (let i = 0; i <= len; i++) {
        if (i + k <= len) {
            arr_rot[i + k] = arr[i];
            index++;
        } else {
            arr_rot[i - index] = arr[i];
        }
    }
    console.log(arr_rot);
}

function addN() {
    let s = document.getElementById("txt_n").value;
    let r = s.match(/\d+/g);
    x = r.concat(getArray());
    document.getElementById("addN1").innerHTML = "Numere adaugate:" + x;
}

function remN() {
    let s = document.getElementById("rem_t").value;
    let r = s.match(/\d+/g);
    x = x.filter(function (el) {
        return !r.includes(el);
    });
    document.getElementById("removed").innerHTML = "Dupa ce s-a sters:" + x;
}

function ridic() {
    let count = 0;
    for (let i = 0; i <= getArray().length; i++){
        if (getArray()[i] > 0) {
            count += 1;
        }
    }
    return count;
}