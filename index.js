// Thêm số mới vào cuối mảng
let arrNumbers = [];

document.getElementById("btnThemSo").onclick = function () {
  let soMoi = document.getElementById("txtSoN").value * 1;

  arrNumbers.push(soMoi);

  document.getElementById("kqThemSo").innerHTML = `${arrNumbers},`;
};

// Bài 1: Tổng số dương
document.getElementById("btnTongSoDuong").onclick = function () {
  let tong = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] >= 0) {
      tong += arrNumbers[i];
    }
  }

  document.getElementById(
    "kqTongSoDuong"
  ).innerHTML = `Tổng số dương: ${tong} `;
};

// Bài 2: Đếm số dương
document.getElementById("btnDemSoDuong").onclick = function () {
  let dem = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] >= 0) {
      dem++;
    }
  }

  document.getElementById("kqDemSoDuong").innerHTML = `Số dương: ${dem} `;
};

// Bài 3: Tìm số nhỏ nhất
document.getElementById("btnSoNhoNhat").onclick = function () {
  let min1 = arrNumbers[0];
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] < min1) {
      min1 = arrNumbers[i];
    }
  }
  document.getElementById("kqSoNhoNhat").innerHTML = `Số nhỏ nhất: ${min1} `;
};

// Bài 4: Tìm số dương nhỏ nhất
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  let min2 = arrNumbers[0];

  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] < min2) {
      min2 = arrNumbers[i];
    }
  }

  document.getElementById(
    "kqSoDuongNhoNhat"
  ).innerHTML = `Số dương nhỏ nhất: ${min2} `;
};

// Bài 5: Tìm số chẵn cuối cùng
let arrNew = [];
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 2 == 0) {
      // Sau khi mảng sử dụng push() lại biến mảng thành object
      Array.from(arrNew.push(arrNumbers[i]));
    }
  }

  document.getElementById(
    "kqSoChanCuoiCung"
  ).innerHTML = `Số chẵn cuối cùng: ${arrNew.pop()} `;
};

// Bài 6: Đổi chỗ
document.getElementById("btnDoiCho").onclick = function () {
  let viTri1 = document.getElementById("txtViTri1").value * 1;
  let viTri2 = document.getElementById("txtViTri2").value * 1;

  for (let i = 0; i < arrNumbers.length; i++) {
    let temp = arrNumbers[viTri1];
    arrNumbers[viTri1] = arrNumbers[viTri2];
    arrNumbers[viTri2] = temp;
  }

  document.getElementById(
    "kqDoiCho"
  ).innerHTML = `Mảng sau khi đổi: ${arrNumbers} `;
};

// Bài 7: Sắp xếp tăng dần
document.getElementById("btnSapXepTangDan").onclick = function () {
  let sapXep = arrNumbers.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "kqSapXepTangDan"
  ).innerHTML = `Mảng sau khi sắp xếp: ${sapXep} `;
};

// Bài 8: Tìm số nguyên tố đầu tiên
document.getElementById("btnSoNguyenToDauTien").onclick = function () {
  let soNguyenTo;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] == 2) {
      soNguyenTo = 2;
    }
  }
  document.getElementById("kqSoNguyenToDauTien").innerHTML = `${soNguyenTo}`;
};

// Bài 8: Đếm số nguyên
document.getElementById("btnThemSoNguyen").onclick = function () {
  let soNguyen = document.getElementById("txtNhapSoNguyen").value * 1;
  let arrSoNguyen = [];
  for (let i = 0; i < arrSoNguyen.length; i++) {
    arrSoNguyen.push(soNguyen);
  }
  console.log(arrSoNguyen);

  document.getElementById("kqThemSoNguyen").innerHTML = `${arrSoNguyen}`;
};
