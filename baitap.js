//Bài tập tổng hợp
//1,Xây dựng một trang web quản lý bán hàng đơn giản gồm các thông tin sau:
//2,Tạo một mảng chứa danh sách user. Thông tin user bao gồm: userId, userName, email,
//password, createdAt (thời gian tạo, sử dụng hàm new Date() để sử
//dụng và format về định dạng ngày/tháng/năm)
//3,Tạo một mảng chứa danh sách product. Thông tin product gồm: productId, productName,
// image, price, description, createdAt (thời gian tạo, sử dụng hàm new Date() để sử
//dụng và format về định dạng ngày/tháng/năm)
//4,Tạo mảng carts gồm các thông tin sau: cartId, userId, productId, quantity.
// Trong đó userId lấy từ mảng users, productId lấy từ mảng products
//5,Tính tổng tiền của các sản phẩm có trong giỏ hàng hiện tại
//6.Vẽ sơ đồ hoạt động trước và sau đấy mới code. Chưa cần thiết phải chạy ngay mà
//nên suy nghĩ ý tưởng làm bài trước
//
//
// function User(userId, userName, email, password, createdAt) {
//   this.userId = userId;
//   this.userName = userName;
//   this.email = email;
//   this.password = password;
//   this.createdAt = createdAt;
// }
// let users = ["haiDN", "hai", "hai@gmail.com", 123];
// users.push(new User());
// console.log(users);

// function Product(productId, productName, image, price, description, createdAt) {
//   this.productId = productId;
//   this.productName = productName;
//   this.image = image;
//   this.price = price;
//   this.description = description;
//   this.createdAt = createdAt;
// }
// let products = ["haiDN", "hai", "hai@gmail.com", 123];
// users.push(new Product());
// console.log(products);

// function Cart(cartId, userId, productId, quantity) {
//   this.cartId = cartId;
//   this.userId = userId;
//   this.productId = productId;
//   this.quantity = quantity;
// }
// let Carts = ["haiDN", "hai", "hai@gmail.com", 123];
// users.push(new Cart());
// console.log(Carts);

// let today = new Date();
// let date1 = today.getDate();
// console.log(`ngay ${date1}`);
// const formatDate = new Intl.DateTimeFormat("en", {
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric",
//   hour12: false,
// });

//chưa bai
const users = [];
const products = [];
const carts = [];
let choose;
do {
  choose = +prompt("moi ban nhap case");
  switch (choose) {
    case 1:
      const userId = +prompt("nhap id");
      const userName = prompt("nhap ten user");
      const email = prompt("nhap email");
      const password = prompt("moi nhap mat khau");

      //tao doi tuong
      const user = {
        userId: userId,
        userName: userName,
        email: email,
        password: password,
        createdAt: new Date().toISOString().split("T")[0],
      };
      //them phan doi tuong vao mang
      users.push(user);
      break;
    case 2:
      const productId = +prompt("moi nhap loai sp");
      const productName = prompt("moi nhap ten sp");
      const price = +prompt("nhap gia");

      //tao doi tuong product
      const product = {
        productId: productId,
        productName: productName,
        price: price,
        createdAt: new Date().toISOString().split("T")[0],
      };

      //them doi tuong vao mang
      products.push(product);
      break;
    case 3:
      const cartId = +prompt("moi nhap gia");
      const proId = +prompt("moi nhap ten sp");
      const uId = +prompt("nhap id nguoi dung");
      const quantity = +prompt("nhap so luong sp");

      //tao doi tuong cart
      const cart = {
        cartId: cartId,
        productId: proId,
        userId: uId,
        quantity: quantity,
      };
      //Them doi tuong CART vao mang
      carts.push(cart);
      break;
    case 4:
      for (let i = 0; i < users.length; i++) {
        console.log("user", users[i]);
      }
      break;
    case 5:
      for (let i = 0; i < carts.length; i++) {
        console.log("cart", carts[i]);
      }
    case 6:
      for (let i = 0; i < carts.length; i++) {
        console.log("art", carts[i]);
      }
      break;
    case 7:
      let total = 0;
      //lap qua carts
      for (let i = 0; i < carts.length; i++) {
        //lay ra id  product tu cart
        const productId = carts[i].productId;
        //tim  product theo, productid;
        const productBYId = products.find((pro) => pro.productId === productId);
        console.log("productBYId", productBYId);
        //cong don gia tien
        //tong = gia tri truoc do + gia sp * so luong
        total = total + productBYId.price * carts[i].quantity;
      }
      console.log("tong so tien cau gio hang:", total);
      break;
    default:
      break;
  }
} while (choose !== 8);
