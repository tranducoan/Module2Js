function D(day, month, year) {
    // Kiểm tra năm hợp lệ
    if (year < 1) return false;

    // Kiểm tra tháng hợp lệ
    if (month < 1 || month > 12) return false;

    // Số ngày trong mỗi tháng
    const daysInMonth = [31, (I(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Kiểm tra ngày hợp lệ
    return day > 0 && day <= daysInMonth[month - 1];
}

// Hàm kiểm tra năm nhuận
function I(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Ví dụ sử dụng
console.log(D(29, 2, 2024)); // true (năm nhuận)
console.log(D(31, 4, 2023)); // false (tháng 4 chỉ có 30 ngày)
console.log(D(15, 8, 2021)); // true
