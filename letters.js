var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var length = 26;

function main() {
    while (length != 0 /*&& button is pushed*/ ) {
        letter(arr, length);
        length--;
    }

}

function letter(arr, length) {
    var random_i = Math.floor(Math.random() * length);
    var chosen = arr[random_i];
    [arr[random_i], arr[length - 1]] = [arr[length - 1], arr[random_i]];
    arr.pop();
    console.log(chosen);
}

main();