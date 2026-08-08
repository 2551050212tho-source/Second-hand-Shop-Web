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
   

    alert("Gửi yêu cầu thành công");
    form.submit();

});