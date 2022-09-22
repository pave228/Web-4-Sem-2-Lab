
//Задача №1 Абсолютное значение
console.log("Задача №1 Абсолютное значение");

function absValue(a) {
    if (a < 0) {
        return -a;
    }
    return a
}

let A = Number(prompt('Задача №1 Абсолютное значение' + '\nВведите число'));

console.log(absValue(A));

//Задача №2 Палиндром
console.log("Задача №2 Палиндром");

function isPalindrome(word) {

    let l = word.length - 1;
    let k = 0;

    for (i = word.length - 1; i > 0; i--) {
        if (word[i] == word[l - i]) {
            k += 1;
        } else {
            k -= 1;
        }
    }

    if (k == word.length - 1) {
        console.log(true);
    } else {
        console.log(false);
    }

}

let Word = String(prompt('Задача №2 Палиндром' + '\nВведите слово'));

isPalindrome(Word);

//Задача №3 Сложение матриц
console.log("Задача №3 Сложение матриц");

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

function matrixAddition(m1, m2) {
    let m1Ln = m1.length;
    let m1Col = m1[0].length;
    let m2Ln = m2.length;
    let m2Col = m2[0].length;


    let Sum = "";
    let buffer = 0;

    if (m1Ln == m2Ln && m1Col == m2Col) {
        for (let i = 0; i < m1Ln    ; i++) {
            for (let j = 0; j < m1Col; j++) {
                buffer = m1[i][j] + m2[i][j];
                Sum += buffer + "\t";
            }
            Sum += "\n";
        }

        console.log(`Cумма матриц равна\n${Sum}`)
    }



}

matrixAddition(matrix1, matrix2);

//Задача №4 Работа с объектом
console.log("Задача №4 Работа с объектом");
let student = {
    group: "201-323",
    first_name: "Павел",
    last_name: "Гнатенко",
}

console.log(`Список свойств: ${Object.keys(student)}\nСтудент ${student.first_name} ${student.last_name} учится в группе ${student.group} `);

//Задача №5
console.log("Задача №5");

let FrogsImages = document.getElementsByClassName("images");
let FrogsNumber = 0;
let ButtonLeft = document.getElementById("BackwardButton");
let ButtonRight = document.getElementById("ForwardButton");
ButtonLeft.onclick = function() {
    if (FrogsNumber - 1 < 0) {
        FrogsImages[FrogsNumber].style.display = "none";
        FrogsNumber = FrogsImages.length - 1;
        FrogsImages[FrogsNumber].style.display = "inline";
    }
    else {
        FrogsImages[FrogsNumber].style.display = "none";
        FrogsNumber -= 1;
        FrogsImages[FrogsNumber].style.display = "inline";
    }
}

ButtonRight.onclick = function() {
    if (FrogsNumber + 1 >= FrogsImages.length) {
        FrogsImages[FrogsNumber].style.display = 'none';
        FrogsNumber = 0;
        FrogsImages[FrogsNumber].style.display = 'inline';
    }
    else {
        FrogsImages[FrogsNumber].style.display = 'none';
        FrogsNumber += 1;
        FrogsImages[FrogsNumber].style.display = 'inline';
    }
}