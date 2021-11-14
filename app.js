//DATE METHODS


//Question no:1

// var currentDAte = new Date();
// document.write(currentDAte);


//Question no:2


// var monthNam = ["January", "feburay", "March", "April", "May", "june", "july", "Augest", "september", "octuber", "Novembar", "December"];
// var mon = new Date();
// var currentMonth = mon.getMonth();
// var month = monthNam[currentMonth];
// document.write("Current Month is: " + month);




//Question no:3

// var month = new Date();
// month.getMonth();
// var onlyMonth = month.toString().slice(0, 3);
// document.write("Today is " + onlyMonth);


//Question no:4

// var dayName = ["Sunday", "Monday", "Tuesday", "wednesday", "Thusrday", "Friday", "saturday"];

// var day = new Date();
// var CurrentDay = day.getDay();
// var funDay = dayName[CurrentDay];
// document.write("It's fun day " + funDay);


//Question no:5

// var monDate = new Date();
// var date = monDate.getDate();

// if(date<16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("“Last days of the month”");
// }


//Question no:6


// var cd = new Date("12/05/2015");
// cd.setHours(22);
// cd.setMinutes(32);
// cd.setSeconds(23    );

// document.write("Current Date: " + cd + "<br>");

// var ms = cd.getTime();
// document.write("Elapsed milliseconds since january 1, 1970: " + ms + "<br>");

// var min = ms/(1000*60*60);
// document.write("Elapsed minutes since january 1, 1970: " + min);


//Question no:7

// var pm = new Date();
// console.log(pm);
// var int = pm.toString().slice(16, 18);
// var copyPm = parseInt(int);
// console.log(copyPm);

// if (copyPm === 12 || copyPm === 13 || copyPm === 14 || copyPm === 15 || copyPm === 16 || copyPm === 17 || copyPm === 18 || copyPm === 19 || copyPm === 20 || copyPm === 21 || copyPm === 22 || copyPm === 23) {
//     alert("It's PM");
// }
// else if (copyPm === 24 || copyPm === 1 || copyPm === 2 || copyPm === 3 || copyPm === 4 || copyPm === 5 || copyPm === 6 || copyPm === 7 || copyPm === 8 || copyPm === 9 || copyPm === 10 || copyPm === 11 || copyPm === 12) {
//     alert("It's AM");
// }


//Question no:8

// var laterDate = new Date("12/31/2020");
// document.write("Later date: " + laterDate);


//Question no:9

// var ramadanDate = new Date("04/03/2022");
// console.log(ramadanDate);
// var ramday = ramadanDate.getTime() / (1000 * 60 * 60 * 24);
// var fl = Math.floor(ramday);
// console.log(fl);
// var Lastramadan = new Date("06/18/2015");
// console.log(Lastramadan);
// var lastDAys = Lastramadan.getTime() / (1000 * 60 * 60 * 24);
// var ll = Math.floor(lastDAys);
// console.log(ll);
// var final = fl - ll;
// document.write(final + " days have passed since 1st Ramdan, 2015");


//Question no:10



// var referanceDate = new Date();
// document.write(referanceDate+"<br>");
// var mili = referanceDate.getTime();
// var finalSecond = mili / (1000 * 60);    
// var floor = Math.floor(finalSecond);
// console.log(floor);

// var past = new Date("01/01/2021");
// var pastMili = past.getTime();
// var lastsecond = pastMili / (1000 * 60);
// var lstfloor = Math.floor(lastsecond);
// console.log(lstfloor);
// var elapsed = floor - lstfloor;
// document.write(elapsed + " second had passed since begining of 2021");

//Question no:11

// var crntdate = new Date();
// document.write(crntdate + "<br>");
// var ago = new Date();
// ago.setHours(ago.getHours() - 1);
// document.write("1 hour ago it was " + ago);


//Question no:12

// var latest = new Date();
// document.write(latest+"<br>")
// var now = new Date();
// now.setFullYear(now.getFullYear()-100);
// document.write("100 years back, it was"+now)




//Question no:13


// var userage = prompt("Enter your age");
// document.write("Your age is " + userage+"<br>");
// var age = new Date();
// console.log(age);
// var copyYear = age.toString().slice(11, 15)
// console.log(copyYear);
// var acurateYear = copyYear - userage;
// document.write("Your birthday year is " + acurateYear);


//Question no:14

// document.write("<h1>K-Electric Bill</h1>")

// var costumerNAme = prompt("Enter Name");
// document.write("Coustumer name: " + costumerNAme + "<br>");

// var month = prompt("Enter Month");
// document.write("Month: " + month + "<br>");

// var numUnit = +prompt("Enter Number of unit");
// document.write("Number of units: " + numUnit + "<br>");
// var chargperUnit = 16;
// document.write("Chaeges per Unit: " + chargperUnit + "<br>");
// var lateCharge = 350;
// document.write("Late payment surcharge: "+lateCharge+"<br>")
// var bilDate = new Date();
// console.log(bilDate)
// var copybil = bilDate.toDateString().slice(8, 10);
// console.log(copybil);
// if (copybil <= 5) {
//     var totalBil = numUnit * chargperUnit;
//     document.write("Net Amount Payble :" + totalBil);
// }
// else {
//     var afterdue = numUnit * chargperUnit + lateCharge
//     document.write("Gross Amount Payable: " + afterdue);
// }


