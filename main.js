function baitap1() {
  // Dom và khởi tạo biến
  /* Bước 1 */
  /* Điểm chuẩn */
  let point = document.getElementById("diemchuan").value;

  // Điểm của ba môn
  let diem1 = +document.getElementById("diem1").value;
  let diem2 = +document.getElementById("diem2").value;
  let diem3 = +document.getElementById("diem3").value;

  // zone Khu Vực
  let zone = +document.getElementById("zone").value;

  // student Đối tượng
  let student = +document.getElementById("student").value;

  // B2: Xử Lý thông tin 
  if (diem1 === 0 || diem2 === 0 || diem3 === 0 ) {
    document.getElementById("showIntotal").innerHTML = "Bạn Đã Rớt. Do có điểm nhỏ hơn hoặc bằng 0 ";
  }else if (diem1 <= -diem1 || diem2 <= -diem2 || diem3 <= -diem3){
    document.getElementById("showIntotal").innerHTML = "Bạn Đã Rớt. Do có điểm nhỏ hơn hoặc bằng 0 ";
    return;
  }

  let diemchoi = "";

  // Công thức tính điểm chuẩn
  /* Môn 1 + Môn 2 + Môn 3 */
   ketqua = sum(diem1, diem2, diem3);
  //   Tổng Điểm Thi + Khu vực + điểm ưu tiên
  let tongdiem = ketqua + zone + student;

  
    if (point <= tongdiem) {
    diemchoi = "Bạn Đã Đậu. " + "Tổng Điểm: " + tongdiem;
  } else {
    diemchoi = "Bạn Đã Rớt :" + "Tổng Điểm: " + tongdiem;
  }

  display(diemchoi)
}


function display(diemchoi) {
  document.getElementById("showIntotal").innerHTML = diemchoi;
}

//  hàm tính điểm học sinh

function sum(diem1, diem2, diem3) {
 let ketqua = 0;
  ketqua = diem1 + diem2 + diem3;
  return ketqua
   
}
/* Tóm tắt sơ đồ 3 khối bài 1 */
/** Bài số 1
 * Mô hình 3 khối: Quản lý sinh viên
 * Đầu vào:
 * - Tạo biến point, diem1, diem2, diem3 cho người tự nhập
 * - Tạo biến zone, student  cho người dùng chọn mình đang ở khu vực và đối tượng gì để + điểm 
 * Xử lý:
 * - DOM giá trị người dùng nhập về
 * - Kiểm tra điểm số của ba môn 
 * - Tạo biến ketqua, tạo hàm tính điểm học sinh 
 * - So sánh point với tongdiem 
 * Đầu ra:
 * - Thông báo SV đậu hay rớt
 */


// Bài 2 

function baitap2() {
  // Đầu vào
  let name1 = document.getElementById("name").value;
  let enekw = +document.getElementById("enekw").value;

    // Xử Lý
    /* Kiểm Tra Thông tin khách hàng nhập */
  if (!enekw || enekw < 0 || enekw <= -enekw) {
    alert("Số kw không hợp lệ!  Vui lòng nhập lại");
    document.getElementById("alertkw2").innerHTML = "Họ Tên: " + name1 + " , " + "Tiền Điện: " + "0" + "vnd";
    return;
  };

  
  let currentFormat = new Intl.NumberFormat("vn-VN");
  // Gọi Hàm
    price = calcPrice (enekw, 500, 650, 850, 1100, 1300);

  // Đầu ra
  document.getElementById("alertkw2").innerHTML = "Họ Tên: " + name1 + " , " + "Tiền Điện: " + currentFormat.format(price) +  "vnd";
}

// Tính Tiền Điện 
function calcPrice (enekw, fistkw, twokw, threekw, fourkw, fivekw ) {
  let price = 0;
  if (enekw <= 50) {
    price = enekw * fistkw; 
  } else if (enekw <= 100) {
    price = (50 * fistkw) + (enekw - 50) * twokw;
  } else if (enekw <= 200) {
    price = (50 * fistkw) + 50 * twokw + (enekw - 100) * threekw;
  } else if (enekw <= 350) {
    price = (50 * fistkw) + 50 * twokw + 100 * threekw + (enekw - 200) * fourkw;
  } else {
    price = (50 * fistkw) + 50 * twokw + 100 * threekw + 150 * fourkw + (enekw - 350) * fivekw;
  } 
  return price
};

/* Tóm Tắt sơ đồ 3 khối */

/** Bài số 2
 * Mô hình 3 khối: Tính tiền điện
 * Đầu vào:
 * - Tạo biến name1, enekw cho người dùng nhập thông tin vào
 * Xử lý:
 * - DOM giá trị người dùng nhập về và xét điều kiện khách nhập đúng hay sai;
 * - Tạo biến hàm function calcPrice tính tiền điện 
 * -  Gọi Hàm tính tiền điện 
 * Đầu ra:
 * - Thông báo họ tên, và số tiền phải đóng
 */
