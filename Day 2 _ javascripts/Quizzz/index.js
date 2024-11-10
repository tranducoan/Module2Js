// Quizz 0 : 1 Hãy viết chương trình nhập vào một số a. Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. Ngược lại, in ra “Còn quá nà trẻ”.

// Nhập số a từ người dùng
let a = parseInt(prompt("Nhập vào một số a:"));

// Kiểm tra giá trị của a
if (a >= 18) {
    console.log("Đủ 18 thì quẩy tiếp");
} else if (a >= 16) {
    console.log("Đợi thêm ít năm nữa");
} else {
    console.log("Còn quá nà trẻ");
}

// Quizz 0 :  Hãy tính tổng các số từ 1 đến 50.
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log("Tổng các số từ 1 đến 50 là:", sum);
//1 :  Tính tổng các số chẵn từ -10 đến 50

let sumEven = 0;
for (let i = -10; i <= 50; i += 2) {
    sumEven += i;
}
console.log("Tong các số chẵn từ -10 đến 50 là:", sumEven);

//2 : In ra các số chia hết cho 9 trong đoạn [-100; 100]
for (let i = -100; i <= 100; i++) {
    if (i % 9 === 0) {
        console.log(i);
    }
}
// 3 :  Dùng while để in ra dãy số từ 1 đến 200

let i = 1;
while (i <= 200) {
    console.log(i);
    i++;
}
//4: Nhập vào 1 chuỗi s và 1 số l. Thêm vào cuối chuỗi s ký tự 'a' cho đến khi độ dài chuỗi s >= l

let s = prompt("Nhập vào 1 chuỗi s:");
let l = parseInt(prompt("Nhập vào 1 số l:"));

while (s.length < l) {
    s += "a";
}

//5 : Nhập vào 2 số 0 <= x < y <= 100. Tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y

let x = parseInt(prompt("Nhập vào số x (0 <= x < y <= 100):"));
let y = parseInt(prompt("Nhập vào số y (0 <= x < y <= 100):"));

while (x < y) {
    console.log("x =", x);
    x++;
    console.log("y =", y);
    y--;
}
