var day_of_week =new Array("Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy");
var month_of_year =new Array("1","2","3","4","5","6","7","8","9","10","11","12");  
var nowdate = new Date();   
var curyear= nowdate.getYear();     
var curmonth = nowdate.getMonth();  
var curdate = nowdate.getDate();   
var curday = nowdate.getDay();
if (curyear < 1000) {curyear= 1900  +curyear;}
if (curdate<10) {curdate="0"+curdate;}  
document.write("<font size='3' color='#ffffff'>"+day_of_week[curday]+ ", "+"Ngày " + curdate + " "+"Tháng " +month_of_year[curmonth]+ " "+"Năm" + " "+curyear+"</font>");  
