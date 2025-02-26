    let num1 = prompt("Nhập vào số thứ nhất:");  
    let num2 = prompt("Nhập vào số thứ hai:");  
    let num3 = prompt("Nhập vào số thứ ba:");  
    if (num1 === num2 || num1 === num3 || num2 === num3)
    alert("Vui lòng nhập vào 3 số khác nhau!");  
    let maxNum = Math.max(num1, num2, num3);  
    alert("Số lớn nhất trong 3 số vừa nhập là: " + maxNum);  