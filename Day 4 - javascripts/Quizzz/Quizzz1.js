const readline = require('readline');

// Tạo interface để đọc dữ liệu từ terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Đối tượng mô tả bản thân
const banThan = {
    ten: "Nguyễn Văn A",
    tuoi: 25,
    diaChi: "Hà Nội",
    gioiTinh: "Nam",
    soThich: ["Đọc sách", "Chơi thể thao", "Du lịch"],
    chieuCao: 175,
    canNang: 70,
    tinhTrangHonNhan: "Độc thân",
    soDienThoai: "0123456789"
};

// Hỏi người dùng nhập tuổi của bạn gái
rl.question('Nhập tuổi của bạn gái: ', (tuoiBanGai) => {
    // Chuyển đổi tuổi từ chuỗi sang số
    tuoiBanGai = parseInt(tuoiBanGai);

    // Đối tượng mô tả bạn gái
    const banGai = {
        ten: "Trần Thị B",
        tuoi: tuoiBanGai,
        suTotBung: 8,
        nhaGiau: true
    };

    // Kiểm tra tuổi và in ra kết quả
    if (banThan.tuoi > 20 && banGai.tuoi >= 20) {
        console.log("Tầm này cưới được rồi");
    } else {
        console.log("Chờ thêm chút nữa");
    }

    // Đóng interface
    rl.close();
});
