class WorkWithArray {
    constructor(array) {
        this.array = array;
    }

    MinMax() {
        let min = Infinity;
        let max = -Infinity;
        let minPosI = 0;
        let minPosJ = 0;
        let maxPosI = 0;
        let maxPosJ = 0;
        for (let i = 0; i < getRows(); i++) {
            for (let j = 0; j < getColumns(); j++) {
                if (this.array[i][j] < min) {
                    min = this.array[i][j];
                    minPosI = i;
                    minPosJ = j;
                }
                if (this.array[i][j] > max) {
                   max = this.array[i][j];
                    maxPosI = i;
                    maxPosJ = j;
                }
            }
        }
        return {min, minPosI, minPosJ, max, maxPosI, maxPosJ}
    }

    changeRow() {
        let row;
        row = this.array[getChangeValue1()];
        this.array[getChangeValue1()] = this.array[getChangeValue2()];
        this.array[getChangeValue2()] = row;
        return this.array;
    }
}

let customArray;

document.getElementById("createMatrix").addEventListener("click", () => {
    let array = createMatrix(getRows(), getColumns());
    console.log(array);
    customArray = new WorkWithArray(array);
});

const createMatrix = (row, column) => {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        for (let j = 0; j < column; j++) {
            matrix[i][j] = Math.floor(Math.random() * 101);
        }
    }
    return matrix;
};

document.getElementById("calculateMatrix").addEventListener("click", () => {
    const div = document.getElementById('results');

    const show = (text, result) => {
        div.innerHTML += `${text}: ${result} <br>`;
    };

    const newLine = () => {
        div.innerHTML += "<br>";
    };

    show("Max", customArray.MinMax().max);
    show("MaxPositionRow", customArray.MinMax().maxPosI);
    show("MaxPositionColumn", customArray.MinMax().maxPosJ);
    newLine();
    show("Min", customArray.MinMax().min);
    show("MinPositionRow", customArray.MinMax().minPosI);
    show("MinPositionColumn", customArray.MinMax().minPosJ);
    customArray.changeRow();
});

const getRows = () => {
    return document.getElementById("rowsCount").value;
};

const getColumns = () => {
    return document.getElementById("columnsCount").value;
};

const getChangeValue1 = () => {
    return document.getElementById("rowChangeFirstValue").value;
};

const getChangeValue2 = () => {
    return document.getElementById("rowChangeSecondValue").value;
};