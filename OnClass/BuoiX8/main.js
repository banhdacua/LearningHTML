function checkChanLe(a) {
    if (a % 2 == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
function checkChanLenInput() {
    let a = Number(document.getElementById("input_1").value);
    console.log(a);
    if(checkChanLe(a) == 1) {
        document.getElementById("kq_input1").innerHTML = "Là số chẵn";
    }
    else {
        document.getElementById("kq_input1").innerHTML = "Là số lẻ";
    }
}
function checkSoNguyenTo(a) {
    let count = 0;
    for(let i = 0; i < Math.sqrt(a); i++) {
        if( a % i == 0) {
            count++;
        }
    }
    if(count == 0) {
        return 1;
    }
    else
        return 0;
}
function bai2() {
    let kq = 0;
    let count = 0
    let s1 = Number(document.getElementById("input_2").value);
    let s2 = Number(document.getElementById("input_3").value);
    let s3 = Number(document.getElementById("input_4").value);
    if(checkSoNguyenTo(s3) == 1)
    {
        kq = s3;
        count = count + 1;
    }
    if(checkSoNguyenTo(s2) == 1)
    {
        kq = s2;
        count = count + 1;
    }
    if(checkSoNguyenTo(s1) == 1)
    {
        kq = s1;
        count = count + 1;
    }
    if(count == 0) {
        document.getElementById("kq_input2").innerHTML = "Hẩo Hảo";
    }
    if(count == 1) {
        document.getElementById("kq_input2").innerHTML = "SỐ NGUYÊN TỐ ĐẦU TIÊN: " + kq;
    }
    if(count == 3) {
        document.getElementById("kq_input2").innerHTML = "Hoàn Hảo";
    }

}