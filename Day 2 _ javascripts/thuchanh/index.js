// 1 , in ra 1 dãy số từ 1 đến 100 
for (let i = 1; i <= 500; i++) {
    console.log(i);
}
// 2 ,  In ra các số chia hết cho 2 và 3 từ 1 đến 300
for (let i = 1; i <= 300; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
//3 Tính tổng các số chẵn trong đoạn [-30, 50]:
let evenSum = 0;
for (let i = -30; i <= 50; i++) {
    if (i % 2 === 0) {  // Kiểm tra nếu i là số chẵn
        evenSum += i;
    }
}
console.log("Tổng các số chẵn trong đoạn [-30, 50] là:", evenSum);
// 4 Nhập vào số n. Tính giai thừa của số n.
let n = parseInt(prompt("Nhập vào số n:"));
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("Giai thừa của", n, "là:", factorial);
//5 Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
let a = parseInt(prompt("Nhập vào a:"));
let b = parseInt(prompt("Nhập vào b:"));
let x = parseInt(prompt("Nhập vào x:"));

let result = -1; // Gán giá trị mặc định nếu không tìm thấy

for (let i = a; i <= b; i++) {
    if (i % x === 0) {
        result = i;
        break;
    }
}

console.log("Số nhỏ nhất chia hết cho", x, "là:", result);
//6 Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
let N = parseInt(prompt("Nhập vào số n (n >= 2):"));
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += 1 / (i * (i + 1));
}

console.log("Giá trị biểu thức S là:", sum);
//7 Nhập vào số n. Hãy in ra số ước của n.
let A = parseInt(prompt("Nhập vào số n:"));

for (let i = 1; i <= A; i++) {
    if (n % i === 0) {
        console.log(i);  // In ra ước của n
    }
}
// 8 Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
let B = parseInt(prompt("Nhập vào số n:"));
let isPrime = true;

if (n <= 1) isPrime = false;
for (let i = 2; i < B; i++) {
    if (B % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(B, "là số nguyên tố");
} else {
    console.log(B, "không phải là số nguyên tố");
}
// 9 Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
let s = prompt("Nhập vào chuỗi s:");
let l = parseInt(prompt("Nhập vào số l:"));

while (s.length < l) {
    s = '0' + s;
}

console.log(s);

//10 Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.
let X = parseInt(prompt("Nhập vào số X:"));
let Y = parseInt(prompt("Nhập vào số Y:"));

// Hàm tính UCLN bằng thuật toán Euclid
function ucln(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Tính UCLN và BCNN
let uclnValue = ucln(X, Y);
let bcnnValue = (X * Y) / uclnValue;

console.log("UCLN:", uclnValue);
console.log("BCNN:", bcnnValue);

// 11 Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
let J = parseInt(prompt("Nhập vào số J (2 <= J <= 10):"));

if (J >= 2 && J <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${J} x ${i} = ${J * i}`);
    }
} else {
    console.log("Số không hợp lệ. Vui lòng nhập số từ 2 đến 10.");
}
// 12 Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
let C = parseInt(prompt("Nhập vào số n (n >= 2):"));

if (n >= 2) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += "* "; // In dấu sao, bạn có thể thay đổi dấu này nếu muốn
        }
        console.log(row.trim()); // Trim để loại bỏ khoảng trắng thừa ở cuối
    }
} else {
    console.log("Vui lòng nhập n >= 2.");
}
