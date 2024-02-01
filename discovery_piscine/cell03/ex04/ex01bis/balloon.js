let incolor = 1
let size_init = 200

let balloon = document.getElementById('balloon')
console.log("im here")

const changeColor = (state) => {
    if (state == 1) {
        balloon.style.backgroundColor = "red";
    }
    else if (state == 2) {
        balloon.style.backgroundColor = "green";
    }
    else if (state == 3) {
        balloon.style.backgroundColor = "blue";
    }
}

const changeSize = (size) => {
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
}

const upsize = (size) => {
    if (size < 420) {
        size += 10;
    }
    else {
        size = 200;
    };
    // changeSize(size);
    return(size)
}

const downsize = (size) => {
    if (size-5 >= 200) {
        size -= 5
    }
    else {
        size = 200
    }
    // changeSize(size)
    return(size)
}

const clicking = () => {
    incolor++;

    if (incolor <= 3) {
        changeColor(incolor);
    }
    else {
        incolor = 1
        changeColor(incolor)
        
    }

    changeSize(upsize(size_init))

}

const hover = () => {
    console.log("test")
    if (incolor == 1) {
        incolor = 3;
        changeColor(incolor)
    }
    else {
        incolor--;
        changeColor(incolor)
    }

    changeSize(downsize(size_init))
}

const leaves = () => {
    if (incolor == 3) {
        incolor = 1;
        changeColor(incolor)
    }
    else {
        incolor++;
        changeColor(incolor)
    }

    if (size_init <= 415) {
        size_init += 5
        changeSize(size_init)
    }
    else {
        size_init = 200
        changeSize(size_init)
    }
}