// bài 2 
let s = ["apple", "banana", "cherry", "kiwi", "grape"];  // Mảng chuỗi
let text = prompt("Nhập vào chuỗi text: ");  // Nhập chuỗi text

// 1. Tìm chuỗi có độ dài nhỏ nhất
let min = s[0];
for (let i = 1; i < s.length; i++) {
  if (s[i].length < min.length) {
    min = s[i];
  }
}
console.log("Chuỗi có độ dài nhỏ nhất: " + minStr);

// 2. Tìm các chuỗi chứa giá trị text
let foundStrings = s.filter(str => str.includes(text));
console.log("Các chuỗi chứa text: " + foundStrings);

// 3. Mảng mới gồm 3 ký tự đầu tiên của mỗi phần tử
let newS = s.map(str => str.substring(0, 3));
console.log("Mảng mới: " + newS);

// 4. Tạo chuỗi kết hợp các phần tử, cách nhau bởi dấu '-'
let joinedStr = s.join('-');
console.log("Chuỗi kết hợp: " + joinedStr);

// Bài 3 

