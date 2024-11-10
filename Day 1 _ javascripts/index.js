// B1
//let x = true;
//let y = false;
//let z = true;

// console.log(x && y);      // Kết quả: false

// console.log(x && y && z);      // Kết quả: false
// console.log(x && y && !z);     // Kết quả: true
// console.log((x && y) || z);    // Kết quả: true
// console.log((x && y) || !z);   // Kết quả: true
// console.log(x && (y || z));    // Kết quả: true
// console.log(x && !(y || z));   // Kết quả: false
// console.log(x && (y || !z));   // Kết quả: true
// console.log(x && (!y || z));   // Kết quả: false
// // B2 
let name = 'AAA';
let age = 20;
let isGood = true;

console.log(age + 10);            // Kết quả: 30
console.log(age % 3);             // Kết quả: 2
console.log(name + ' BBB');       // Kết quả: 'AAA BBB'
console.log(!isGood);             // Kết quả: false
console.log(name == 'aaa' && age >= 20); // Kết quả: false
console.log(name != 'aaa' && isGood);    // Kết quả: true
console.log(!(age < 10) && !isGood);      // Kết quả: false

//B3

let a = 10;
let b = 20;
let c = 30;
let d = '40';

console.log(a + b + c);                // Kết quả: 60
console.log(a - b / c);                 // Kết quả: 9.333333333333333
console.log(a - (b * c));               // Kết quả: -590
console.log(d - (a * b) - c);           // Kết quả: -190
console.log(a + b + c + d);             // Kết quả: '6040'
console.log(d + a + b + c);             // Kết quả: '40102030'
console.log(d + a - b + c);             // Kết quả: '4020'
console.log(a - b + d - c);             // Kết quả: '-1070'
console.log(d - c + a - b);             // Kết quả: '0'
console.log(a * b + d * c);             // Kết quả: 1400

// B4

let x = true;
let y = false;
let z = 10;

console.log("x && y:", x && y); // false
console.log("x && !y:", x && !y); // true
console.log("x && z == 10:", x && z == 10); // true
console.log("(x && z == 10):", (x && z == 10)); // true
console.log("!(x && z == 10):", !(x && z == 10)); // false
console.log("!(x && z == 50):", !(x && z == 50)); // true
console.log("x && y && z == 10:", x && y && z == 10); // false
console.log("x && !y && z == 10:", x && !y && z == 10); // true
console.log("x || y || z == 10:", x || y || z == 10); // true
console.log("(x && y) || z != 10:", (x && y) || z != 10); // true
console.log("!(x && z == 10) || y:", !(x && z == 10) || y); // false

// B5 

let I = 1;
let K = '2';
let L = 3;
let M = '4';

console.log(K + M);  // '24' (nối hai chuỗi lại với nhau)
console.log(I + K + L + M);  // '1234' (kết quả là chuỗi vì cộng với K và M là chuỗi)
console.log(I - K + L - M);  // NaN (Không thể trừ một chuỗi từ một số)
console.log(I - K - L + M);  // NaN (Không thể trừ một chuỗi từ một số)
console.log((K + M) - (I + L));  // NaN (Không thể trừ một số từ chuỗi)
console.log((I + K) - (L + M));  // NaN (Không thể trừ một chuỗi từ một số)
console.log(I * L + K * M);  // NaN (Không thể nhân chuỗi với số)
console.log(-K + M);  // NaN (Không thể âm một chuỗi)
console.log(-K - M);  // NaN (Không thể âm một chuỗi)
console.log(-(K + M));  // NaN (Không thể âm một chuỗi)

// B6 

let A = 11;
let B = '22';
let C = 33;

// a. A + B
console.log(A + B);  // '1122' (Nối chuỗi '11' với '22')

// b. A - C
console.log(A - C);  // -22 (Phép trừ số nguyên)

// c. A + B + C
console.log(A + B + C);  // '112233' (Nối chuỗi '11' với '22' rồi cộng với số 33)

// d. A + C + B
console.log(A + C + B);  // '113322' (Cộng số nguyên '11' và '33', rồi nối chuỗi '22')

// e. (A + B) % 3
console.log((A + B) % 3);  // NaN (Không thể tính toán phần dư của chuỗi)

// f. A * B > 50
console.log(A * B > 50);  // true (Chuyển '22' thành số 22, và 11 * 22 = 242, 242 > 50)

// g. A ** B > 100
console.log(A ** B > 100);  // true (11 ** 22 là một số rất lớn, lớn hơn 100)

// h. A - (B++) == 5
console.log(A - (B++) == 5);  // false (B là '22', chuyển thành số và thực hiện phép trừ, kết quả là -11)

// i. A - (++B) == 5
console.log(A - (++B) == 5);  // false (B tăng thành 23 trước khi thực hiện phép trừ, kết quả là -12)

//B7 
// Khai báo các biến
let Age = 25;          // Sửa từ age thành Age
let isMarried = false;
let isRich = true;

// 1. Age > 25 && isMarried && isRich
// Kiểm tra nếu Age lớn hơn 25 và isMarried là true và isRich là true
let result1 = Age > 25 && isMarried && isRich;
// Giải thích: Age > 25 là false, isMarried là false, isRich là true. Tất cả phải true mới trả về true, nhưng có false nên kết quả là false.
console.log("Result 1:", result1); // Expected: false

// 2. (Age <= 25 || isMarried) && isRich
// Kiểm tra nếu Age nhỏ hơn hoặc bằng 25 hoặc isMarried là true, sau đó kiểm tra với isRich
let result2 = (Age <= 25 || isMarried) && isRich;
// Giải thích: Age <= 25 là true, isMarried là false, isRich là true. (true || false) = true, sau đó true && true = true.
console.log("Result 2:", result2); // Expected: true

// 3. (Age > 10 || isRich) && isMarried
// Kiểm tra nếu Age lớn hơn 10 hoặc isRich là true, sau đó kiểm tra với isMarried
let result3 = (Age > 10 || isRich) && isMarried;
// Giải thích: Age > 10 là true, isRich là true, (true || true) = true, sau đó true && false (vì isMarried là false) = false.
console.log("Result 3:", result3); // Expected: false

// 4. !(Age >= 15 && isMarried) && isRich
// Kiểm tra nếu Age lớn hơn hoặc bằng 15 và isMarried là true, sau đó phủ định kết quả và kiểm tra với isRich
let result4 = !(Age >= 15 && isMarried) && isRich;
// Giải thích: Age >= 15 là true, isMarried là false, (true && false) = false, sau đó phủ định (false) thành true, cuối cùng true && true = true.
console.log("Result 4:", result4); // Expected: true

// B8 

// Khai báo các biến
let isTall = true;         // Người này cao
let isMuscle = false;      // Người này không có cơ bắp
let isHandsome = true;     // Người này đẹp trai

// 1. isTall && isMuscle
// Kiểm tra nếu isTall và isMuscle đều là true (AND)
// isTall = true, isMuscle = false => false vì AND yêu cầu tất cả đều true
let Result1 = isTall && isMuscle;
console.log("Result 1:", Result1); // Expected: false

// 2. !isHandsome
// Phủ định giá trị của isHandsome
// isHandsome = true => !isHandsome = false
let Result2 = !isHandsome;
console.log("Result 2:", Result2); // Expected: false

// 3. !isTall || !isMuscle
// Phủ định giá trị của isTall và isMuscle, sau đó kiểm tra với OR
// !isTall = false (vì isTall = true), !isMuscle = true (vì isMuscle = false)
// OR yêu cầu ít nhất một điều kiện là true => true
let Result = !isTall || !isMuscle;  // Đã thay "result3" thành "Result"
console.log("Result:", Result); // Expected: true

// 4. isTall || !(isMuscle && isHandsome)
// Kiểm tra nếu isTall là true, hoặc phủ định (isMuscle && isHandsome)
// isMuscle && isHandsome = false (vì isMuscle = false), phủ định thành true
// isTall = true, OR với true => true
let Result4 = isTall || !(isMuscle && isHandsome);
console.log("Result 4:", Result4); // Expected: true

// 5. isMuscle && !(isTall || isHandsome)
// Kiểm tra nếu isMuscle là true, và phủ định (isTall || isHandsome)
// isTall || isHandsome = true (vì cả hai đều true), phủ định thành false
// isMuscle = false, AND với false => false
let Result5 = isMuscle && !(isTall || isHandsome);
console.log("Result 5:", Result5); // Expected: false
