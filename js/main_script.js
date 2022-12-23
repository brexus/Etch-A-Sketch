let grid_container = document.querySelector('#grid-container');
let color = 'black';

function grid_generator(size=16) {

    for(let i = 0; i < size*size; i++) {
        grid_container.classList.remove('grid16','grid32','grid64');

        let cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('mouseenter', function(e) {
            cell.style.backgroundColor = color;
        });

        grid_container.classList.add(`grid${size}`);
        grid_container.appendChild(cell);
    }
}

function erase() {
    let cells = document.querySelectorAll('#grid-container > div');
    cells.forEach(el => {
        el.style.backgroundColor = 'rgb(202, 193, 193)';
    });
}

function erase_listener() {
    let erase_button = document.getElementsByClassName('erase');
    erase_button[0].addEventListener('click', function(e) {
        erase();
    });
}

function button_listener() {
    let res_buttons = document.querySelectorAll('[data-key]');
    let size;

    for(let i = 0; i < 3; i++){
        res_buttons[i].addEventListener('click', function(e) {
            if(i == 0) size = Number(16);
            else if(i == 1) size = Number(32);
            else if(i == 2) size = Number(64);
            grid_generator(size);
        });
    }

    let color_buttons = document.querySelectorAll('#color_button[data-key]');
    console.log(color_buttons);

    for(let i = 0; i < 2; i++){
        color_buttons[i].addEventListener('click', function(e) {
            if(i == 0) class_ = 'normal';
            else if(i == 1) class_ = 'psycho';
            console.log("color button " + i);
            
        });
    }
}


button_listener();
erase_listener();
grid_generator();
