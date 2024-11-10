function A(a, b, c) {
    // Kiểm tra điều kiện để tạo thành tam giác
    return (a + b > c) && (a + c > b) && (b + c > a);
}

// Ví dụ 
console.log(A(3, 4, 5)); // true
console.log(A(1, 2, 3)); // false
