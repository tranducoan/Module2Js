function F(a, b, c) {
    if (a === 0) return "Giá trị của a phải khác 0."; // Kiểm tra a

    const delta = b * b - 4 * a * c; // Tính delta
    if (delta > 0) {
        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [root1, root2]; // Hai nghiệm phân biệt
    } else if (delta === 0) {
        const root = -b / (2 * a);
        return [root]; // Một nghiệm duy nhất
    } else {
        return "Không có nghiệm thực"; // Không có nghiệm thực
    }
}

// Ví dụ 
const results = F(1, -3, 2);
console.log("Nghiệm của phương trình:", results);
