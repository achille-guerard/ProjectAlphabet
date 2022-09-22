var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var length = 26;


function main() {
    letter();
    curr();
}

function letter() {
    if (length == 0)
        var chosen = "No more letter bitch"
    else {
        var random_i = Math.floor(Math.random() * length);
        var chosen = arr[random_i];
        [arr[random_i], arr[length - 1]] = [arr[length - 1], arr[random_i]];
        arr.pop();
        length--;

    }
    document.getElementById("letter_display").innerHTML = chosen;
}

function curr() {
    document.getElementById("cur").innerHTML = "Current letter :";
}