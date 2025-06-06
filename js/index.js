// Tính tổng điểm bài 1
let tinhTongDiem = function (arrInput) {
    let tongDiem = 0;
    for (let value of arrInput) {
        tongDiem += value;
    }
    return tongDiem;
}
// Bài 1
document.querySelector('#quanLyTuyenSinh').onsubmit = function (event) {
    event.preventDefault();

    let arrInfo = []; // Mảng đầu vào gồm Khu vực, đối tượng, điểm Toán, Lý, Hóa
    let diemChuan = +document.getElementById('diemChuan').value;
    let ketQua = '';

    if (diemChuan > 0 && diemChuan <= 30) {

        let arrInput = document.querySelectorAll('.bai1-input'); //DOM các đầu vào (select, input)

        for (let i of arrInput) {
            if (i.tagName == "SELECT") {
                console.log(true);
                arrInfo.push(+i.value); // Mặc định thêm value của select vào chuỗi
            } else if (i.tagName == "INPUT") {



                if (+i.value > 0 && +i.value <= 10) {     // Kiểm tra số 0 trong chuỗi các input
                    arrInfo.push(+i.value);

                    // Tính tổng điểm
                    let diemTong = tinhTongDiem(arrInfo);
                    if (diemTong >= diemChuan) {
                        ketQua = `Đậu rồi! Tổng điểm của bạn là <strong>${diemTong}</strong>.`;
                    } else {
                        ketQua = `Thất bại. Tổng điểm của bạn là <strong>${diemTong}</strong>.`;
                    }

                } else {
                    ketQua = `Thất bại do có điểm <strong>0</strong> hoặc điểm nhập vào không hợp lệ.`;
                    break;
                }
            }
        }
        document.querySelector('#ketQua1').innerHTML = ketQua;
    } else {
        document.querySelector('#ketQua1').innerHTML = `Điểm chuẩn không hợp lệ !`;
    }
}
//------- Bài 2 ------------------

let tinhTienDien = function (input) {
    const arrHeSo = [500, 650, 850, 1100, 1300];
    let arrChenhLech = [50, 50, 100, 150];
    let arrMoc = [50, 100, 200, 350];
    let money = 0;

    for (index in arrMoc) {
        if (input > arrMoc[index]) {
            console.log(index);
            money += arrChenhLech[index] * arrHeSo[index];
            console.log(money);
        } else {
            console.log(index);
            money += (input - arrMoc[index - 1]) * arrHeSo[index];
            break;
        }
    }
    if (input > 350) {
        console.log(true);
        money += (input - 350) * 1300;
        console.log(money);
    }
    return money;
}

document.querySelector('#tinhTienDien').onsubmit = function (event) {
    event.preventDefault();
    let name = this.querySelector('#hoTen').value;

    let suDung = +document.querySelector('#soKw').value;
    console.log(suDung);
    // Tính số tiền
    let soTien = tinhTienDien(suDung);

    document.querySelector('#ketQua2').innerHTML = `Tên: <strong>${name}</strong> - Tiền điện: <strong>${soTien}</strong>.`;
}

// ----------- Bài 3 --------------------
let tinhThue = function (input, minus) {
    let money = input * 0.1 - minus * 160000;
    return money;
}

document.querySelector('#tinhTienThue').onsubmit = function (event) {
    event.preventDefault();
    let thongTin = document.querySelector('#caNhan').value;
    let ketQua3 = '';


    let thuNhap = +document.querySelector('#thuNhap').value;
    let phuThuoc = +document.querySelector('#phuThuoc').value;
    if (thuNhap > 4000000) {
        // Tính thuế
        let tienThue = tinhThue(thuNhap, phuThuoc);
        ketQua3 = `Tên: <strong>${thongTin}</strong>, Tiền thuế cá nhân: <strong>${tienThue}</strong>.`
    } else {
        ketQua3 = 'Thông tin nhập chưa đúng.'
    }

    document.querySelector('#ketQua3').innerHTML = ketQua3;
}
// ---------- Bài 4 ---------------

// Function Onchange
let themKetNoi = function () {
    let loaiKH = +document.querySelector('#loaiKH').value;
    console.log(loaiKH);
    if (loaiKH == 2) {
        document.querySelector('#soKetNoi').className = 'form-control';
    } else {
        document.querySelector('#soKetNoi').className = 'form-control d-none';
    }
}

let bonusDN = function (soKetNoi) {
    let bonus = 75;

    if (soKetNoi <= 10) {
        bonus += 0;
    } else {
        bonus += (soKetNoi - 10) * 5;
    }

    return bonus;
}

let tinhTienCap = function (soKenh, heSo) {
    let money = 25;
    money += soKenh * (7.5 + heSo); // Dân: (25 * 1) + soKenh * (7.5);
    return money;
}

document.querySelector('#tinhTienCap').onsubmit = function (event) {
    event.preventDefault();
    let soTien = 0;
    let maKH = document.querySelector('#maKH').value;

    let loaiKH = +document.querySelector('#loaiKH').value;
    let kenhCaoCap = +document.querySelector('#kenhCaoCap').value;
    let ketNoi = +document.querySelector('#soKetNoi').value;

    console.log(loaiKH);
    console.log(kenhCaoCap);


    switch (loaiKH) {
        case 1: {
            soTien += tinhTienCap(kenhCaoCap, 0);
            break;
        }
        case 2: {
            soTien += tinhTienCap(kenhCaoCap, 42.5) + bonusDN(ketNoi);
            break;
        } default: {
            window.alert('Vui lòng chọn loại khách hàng');
            break;
        }
    }

    document.querySelector('#ketQua4').innerHTML = `Mã khách hàng: <strong>${maKH}</strong> - Tiền cáp: <strong>${soTien}</strong>.`;
}