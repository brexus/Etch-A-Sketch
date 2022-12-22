function make_grid(size) {
    let container = document.querySelector('#grid');
    if (size == 16)
        container.classList.add('grid16');
    else if (size == 32) {
        container.classList.add('grid32');

    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add('cell');

            cell.addEventListener('mouseenter', function(e) {
                    cell.style.backgroundColor = "black";
            });
            


            container.appendChild(cell);
        }
    }

}