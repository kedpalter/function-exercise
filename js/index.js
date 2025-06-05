// Tính tổng điểm bài 1
let tinhTongDiem = function (arrInput) {
    let tongDiem = 0;
    for (let value of arrInput) {
        tongDiem += value;
    }
    return tongDiem;
}
// Check điểm hợp lệ đầu vào
let checkHopLe = function (arrDiem) {
    for (let j in arrDiem) {
        let hopLe = 1;
        if (arrDiem[j] < 0 || arrDiem[j] > 10) {
            hopLe = 0;
        }
    }
    return hopLe;
}

// Bài 1
document.querySelector('#quanLyTuyenSinh').onsubmit = function (event) {
    event.preventDefault();

    let arrInfo = []; // Mảng đầu vào gồm Khu vực, đối tượng, điểm Toán, Lý, Hóa
    let diemChuan = +document.getElementById('diemChuan').value;
    let ketQua = '';

    if (diemChuan > 0 && diemChuan <= 30) {
        console.log('Điểm chuẩn hợp lệ');

        let arrInput = document.querySelectorAll('.bai1-input'); //DOM các đầu vào (select, input)

        for (let i of arrInput) {
            if (i.tagName == "SELECT") {
                console.log(true);
                arrInfo.push(+i.value); // Mặc định thêm value của select vào chuỗi
            } else if (i.tagName == "INPUT") {

                if (+i.value > 0) {     // Kiểm tra số 0 trong chuỗi các input
                    arrInfo.push(+i.value);
                    console.log(arrInfo);

                    // Tính tổng điểm
                    let diemTong = tinhTongDiem(arrInfo);
                    if (diemTong >= diemChuan) {
                        ketQua = `Đậu rồi! Tổng điểm của bạn là <strong>${diemTong}</strong>.`;
                    } else {
                        ketQua = `Thất bại. Tổng điểm của bạn là <strong>${diemTong}</strong>.`;
                    }

                } else {
                    ketQua = `Thất bại do có điểm <strong>0</strong>.`;
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
document.querySelector('#tinhTienDien').onsubmit = function (event) {
    event.preventDefault();
    let name = this.querySelector('#hoTen').value;

    const arrHeSo = [500, 650, 850, 1100, 1300];
    
    let suDung = +document.querySelector('#soKw').value;
    console.log(suDung);

    let arrMoc = [50, 100, 200, 350];
    for (value of arrMoc) {
        
    }

}