const prompt = require('prompt-sync')();

// 1. Function nhận đầu vào là chuỗi name và in ra "Hello world, " + name
function greet(name) {
    console.log("Hello world, " + name);
}

// 2. Function nhận đầu vào là 2 số a, b và trả về (a + b)^2
function calculateSquare(a, b) {
    return (a + b) ** 2;
}

// 3. Function nhập vào a từ bàn phím, tiếp tục nhập đến khi a > 0
function inputPositiveNumber() {
    let a;
    do {
        a = parseFloat(prompt('Nhập vào một số lớn hơn 0: '));
    } while (a <= 0 || isNaN(a));
    return a;
}

// Sử dụng Function
greet("Trần Đức Toàn"); 

const a = 3, b = 4; // Thay đổi giá trị nếu cần
console.log("Kết quả của (a + b)^2 là:", calculateSquare(a, b));

const positiveNumber = inputPositiveNumber();
console.log("Số bạn vừa nhập là:", positiveNumber);

