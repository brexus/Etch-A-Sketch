let grid_container = document.querySelector('#grid-container');

function grid_generator(size) {

    for(let i = 0; i < size*size; i++) {
        grid_container.classList.remove('grid16','grid32','grid64');

        let cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('mouseenter', function(e) {
            cell.style.backgroundColor = "black";
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
    let buttons = document.querySelectorAll('[data-key]');
    let size;

    for(let i = 0; i < 3; i++){
        buttons[i].addEventListener('click', function(e) {
            console.log('clicked '+ i);
            if(i == 0) size = Number(16);
            else if(i == 1) size = Number(32);
            else if(i == 2) size = Number(64);
            grid_generator(size);
        });
    }
}

button_listener();
erase_listener();
grid_generator(16);
