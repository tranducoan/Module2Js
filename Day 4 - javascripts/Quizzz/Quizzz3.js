// 1. Function nhận vào chuỗi slogan, in ra slogan kèm biến đếm counter mỗi 5 giây
function printSlogan(slogan) {
    let counter = 1;
    setInterval(() => {
        console.log(`Counter: ${counter}, Slogan: ${slogan}`);
        counter++;
    }, 5000); // 5000 milliseconds = 5 seconds
}

// 2. Sử dụng phương thức map để biến đổi mảng texts thành mảng textsLength
const texts = ["Hello", "World", "JavaScript"];
const textsLength = texts.map(text => text.length);


printSlogan("Không bỏ cuộc ");

// In ra chiều dài của từng chuỗi trong mảng texts
console.log("Chiều dài của từng chuỗi:", textsLength);
10