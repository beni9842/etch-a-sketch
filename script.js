

const grid = document.querySelector('#grid');

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  

const newGrid = function(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = getRandomRgb();
                // setTimeout(() => {
                //     cell.style.backgroundColor = 'whitesmoke'
                // }, 1111);
            });
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
};

const clearGrid = function() {
    grid.childNodes.forEach(row => {
        row.childNodes.forEach(cell => {
            cell.style.backgroundColor = 'whitesmoke';
        });
    });
}

const deleteGrid = function() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

newGrid(16);
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    clearGrid();
});

const newBtn = document.querySelector('#new');
newBtn.addEventListener('click', () => {
    deleteGrid();
    newGrid(prompt('Enter a new size'));
});