let users = [
    { id: 1, first_name: "Kenton", last_name: "Samples", email: "ksamples0@washingtonpost.com", gender: "Male", age: 35, job: "Worker", country: "UK", is_married: false },
    { id: 2, first_name: "Marc", last_name: "Jurries", email: "mjurries1@flavors.me", gender: "Female", age: 54, job: "Teacher", country: "Vietnam", is_married: false },
    { id: 3, first_name: "Bruis", last_name: "McBeath", email: "bmcbeath2@cam.ac.uk", gender: "Female", age: 59, job: "Developer", country: "UK", is_married: false },
    { id: 4, first_name: "Kennett", last_name: "Lammert", email: "klammert3@sun.com", gender: "Female", age: 22, job: "Dentist", country: "Vietnam", is_married: false },
    { id: 5, first_name: "Feodora", last_name: "Clemot", email: "fclemot4@craigslist.org", gender: "Female", age: 46, job: "Dentist", country: "Vietnam", is_married: false },
    { id: 6, first_name: "Betta", last_name: "Bittlestone", email: "bbittlestone5@digg.com", gender: "Female", age: 15, job: "Project Manager", country: "Russia", is_married: false },
    { id: 7, first_name: "Tedda", last_name: "Surfleet", email: "tsurfleet6@shutterfly.com", gender: "Male", age: 19, job: "Farmer", country: "US", is_married: true },
    { id: 8, first_name: "Alva", last_name: "Cathcart", email: "acathcart7@twitter.com", gender: "Female", age: 28, job: "Developer", country: "Vietnam", is_married: true },
    { id: 9, first_name: "Francesca", last_name: "Sprionghall", email: "fsprionghall8@tumblr.com", gender: "Female", age: 32, job: "Farmer", country: "Vietnam", is_married: false },
    { id: 10, first_name: "Stanfield", last_name: "Huc", email: "shuc9@amazon.co.jp", gender: "Genderfluid", age: 60, job: "Doctor", country: "US", is_married: false },
    // ... (các user khác)
  ];
  
  // 1. Tìm user có id bằng n
  function findUserById(users, n) {
      return users.find(user => user.id === n) || null;
  }
  
  // 2. Lấy email của các user có tên chứa keyword
  function findEmailsByKeyword(users, keyword) {
      return users
          .filter(user => (user.first_name + ' ' + user.last_name).toLowerCase().includes(keyword.toLowerCase()))
          .map(user => user.email);
  }
  
  // 3. Đếm số lượng user có age > 50
  function countUsersAboveAge(users, age) {
      return users.filter(user => user.age > age).length;
  }
  
  // 4. Đếm số lượng user đã kết hôn
  function countMarriedUsers(users) {
      return users.filter(user => user.is_married).length;
  }
  
  // Ví dụ sử dụng các hàm trên
  let userId = 10; // ví dụ ID để tìm
  let user = findUserById(users, userId);
  console.log('User với ID', userId, ':', user);
  
  let keyword = "Kenton"; // ví dụ keyword để tìm email
  let emails = findEmailsByKeyword(users, keyword);
  console.log('Email của các user có tên chứa "', keyword, '":', emails);
  
  let countAbove50 = countUsersAboveAge(users, 50);
  console.log('Số lượng user có age > 50:', countAbove50);
  
  let countMarried = countMarriedUsers(users);
  console.log('Số lượng user đã kết hôn:', countMarried);
  