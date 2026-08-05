const form = document.getElementById('layform');
form.addEventListener('submit', function nghe(event){
    event.preventDefault;
    const ten=document.getElementById('hoten').value;
    const sdt=document.getElementById('sdt').value;

    if(ten==="" && sdt===""){
        alert("Ho ten va SDT chua nhap");
        return;
    }
    if(ten===""){
        alert("Hoten chua nhap");
        return;
    }
    if(sdt===""){
        alert("SDT rong");
        return;
    }
    else if(sdt.length<10){
        alert("sdt nhap thieu");
        return;
    }
    // const regex = /^[0-9]{10}$/;

    // if (!regex.test(sdt)) {
    //     alert("Số điện thoại phải gồm đúng 10 chữ số.");
    //     return;
    // }

    alert("Gửi yêu cầu thành công");
    form.submit();

});