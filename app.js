// // Assignment # 21 - 25
// // Task # 1
// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);

// // Task # 2
// var fav = prompt("Enter your Favorite Phone Name");
// document.write("My favorite phone is: " + fav);
// document.write("<br>Length of string: " + fav.length);

// // Task # 3
// var pak = "Pakistani";
// document.write("String: " + pak);
// document.write("<br>Index of \'n\': " + pak.indexOf("n"));

// // Task # 4
// var greet = "Hello World";
// document.write("String: " + greet);
// document.write("<br>Last index of \'l\': "  + greet.lastIndexOf("l"));

// // Task # 5
// var pak1 = "Pakistani";
// document.write("String: " + pak1);
// document.write("<br>Character at index 3: " + pak1.charAt(3));

// // Task # 6
// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");
// document.write("Hello " + fName.concat(" " + lName));

// // Task # 7
// var city = "Hyderabad";
// var city2 = city.replace("Hyder", "Islam");
// document.write("City: " + city);
// document.write("<br>After replacement: " + city2);

// // Task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace(/and/g, "&");
// document.write(message);
// document.write("<br>"+message2);

// // Task # 9
// var num1 = "472";
// var num2 = Number(num1);
// document.write("Value: " + num1);
// document.write("<br>Type: " + typeof(num1));
// document.write("<br>Value: " + num2);
// document.write("<br>Type: " + typeof(num2));

// // Task # 10
// var input = prompt("Enter a string to print in Upper Case");
// document.write("User input: " + input);
// document.write("<br>Upper Case: " + input.toUpperCase());

// // Task # 11
// var inp = prompt("Enter a string to print in Title Case");
// document.write("User input: " + inp);
// var sentence = inp.toLowerCase().split(" ");
// for(var i = 0; i< sentence.length; i++){
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write("<br>Title case: " + sentence.join(" "));

// // Task # 12
// var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");
// document.write("Number: " + num);
// document.write("<br>Result: " + result);

// // Task # 13
// var username = prompt("Enter Username");
// var found = false;
// for(var i = 0; i < username.length; i++){
//     if (username.charCodeAt(i) === 33 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 46 || username.charCodeAt(i) === 64){
//         alert("Please enter a valid username");
//         found = true;
//         break;
//     }
// }
// if(!found){
//     alert("Username is correct")
// }

// // Task # 14
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/madam?");
// var search = search.toLowerCase();
// var A = ["cake", "apple pie", "cookie", "chips",  "patties"];
// found = false;
// for(var i = 0; i < A.length; i++){
//     if(A[i] === search){
//         document.write(search + " is <b>available</b> at index " + i + " in our bakery");
//         found = true;
//         break;
//     }
// }
// if(!found){
//     document.write("We are sorry. " + search + " is <b>not available</b> in our bakery");
// }

// // Task # 15
// var password = prompt("a. It should contain alphabets and numbers\nb. It should not start with a number\nc. It must at least 6 characters long\nEnter your password");
// if(password.charCodeAt(0) > 47 && password.charCodeAt(0) < 58 || password.length < 6){
//     document.write("Entered password: " + password);
//     document.write("<br>Password can not begin with a number");
//     document.write("<br>Please enter a valid password");
// }
// else{
//     document.write("Password is correct");
// }

// // Task # 16
// var university =  "University of Karachi";
// for(var i = 0; i < university.length; i++){
//     document.write(university[i]);
//     document.write("<br>");
// }

// // Task # 17
// var input = prompt("Enter your input");
// document.write("User input: " + input);
// document.write("<br>Last character of input: " + input.charAt(input.length-1));

// // Task # 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text);
// count = 0;
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i, i + 3) === "the" || text.slice(i, i + 3) === "The"){
//         count++;
//     }
// }
// document.write("<br>There are " + count + " occurence(s) of word \'the\'");

// // Asssignment # 26 - 30
// // Task # 1
// var number = +prompt("Enter a Positive integer");
// document.write("number: " + number);
// document.write("<br>round off value: " + Math.round(number));
// document.write("<br>floor value: " + Math.floor(number));
// document.write("<br>ceil value: " + Math.ceil(number));

// // Task # 2
// var number = +prompt("Enter a Negative integer");
// document.write("number: " + number);
// document.write("<br>round off value: " + Math.round(number));
// document.write("<br>floor value: " + Math.floor(number));
// document.write("<br>ceil value: " + Math.ceil(number));

// // Task # 3
// var absolute = -4;
// var absolute1 = 5;
// document.write("The absolute value of " + absolute + " is " + Math.abs(absolute));
// document.write("<br>The absolute value of " + absolute1 + " is " + Math.abs(absolute1));

// // Task # 4
// var dice = Math.random();
// var dice1 = (dice * 6) + 1;
// var floor1 = Math.floor(dice1);
// document.write("random dice value: " + floor1);

// // Task # 5
// var coin = Math.random();
// var coin1 = (coin * 2) + 1;
// var Toss = Math.floor(coin1);
// if(Toss == 1){
    //     document.write(Toss);
//     document.write("<br>random coin value: Heads");
// }
// else if(Toss == 2){
//     document.write(Toss);
//     document.write("<br>random coin value: Tails");
// }

// // Task # 6
// var num = Math.random();
// var num1 = (num * 100) + 1;
// var random1 = Math.floor(num1);
// document.write("random number between 1 and 100: " + random1);

// // Task # 7
// var weight = prompt("Enter your weight in kilograms");
// var currentweight = parseInt(weight);
// document.write("The weight of user is " + currentweight + " kilograms");

// // Task # 8
// var num = Math.random();
// var secret = (num * 10) + 1;
// var random = Math.floor(secret);
// var input = +prompt("Enter a number between 1 and 10");
// document.write("Secret number is: " + random);
// if(input === random){
//     document.write("<br>Congratulation!! You Win");
// }
// else{
//     document.write("<br>Try again!");
// }
// document.write("<br>Input number is: " + input);

// // Assignment # 31 - 34
// // Task # 1
// var today = new Date();
// document.write(today);

// // Task # 2
// var today = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = today.getMonth();
// alert("Current month: " + months[currentMonth]);

// // Task # 3
// var a = new Date();
// var b = a.toString();
// var day = b.slice(0,3);
// document.write("Today is " + day);

// // Task # 4
// var date = new Date();
// var day = date.getDay();
// if(day === 6 || day === 0){
//     document.write("It's Fun day");
// }
// else{
//     document.write("It's Working day");
// }

// // Task # 5
// var date = new Date();
// var date2 = date.getDate();
// if(date2 < 16){
//     document.write("First fiteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

// // Task # 6
// var currentDate = new Date();
// var elapsedMsecond = currentDate.getTime();
// var elapsedMinutes = elapsedMsecond / (1000*60*60);
// document.write("Current Date: " + currentDate);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + elapsedMsecond);
// document.write("<br>Elapsed minutes since January 1, 1970: " + elapsedMinutes);

// // Task # 7
// var now = new Date();
// var time = now.getHours();
// if(time >= 0 && time < 12){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }

// // Task # 8
// var laterYear = new Date(new Date().getFullYear(), 11, 31)
// document.write("Later date: " + laterYear)

// // Task # 9
// var since = new Date("Jun 18, 2015");
// var today = new Date();
// var sinmili  = since.getTime();
// var todaymili = today.getTime();
// var difference = todaymili - sinmili;
// var diffdays = difference / (1000*60*60*24);
// var accurate = Math.floor(diffdays);
// document.write(accurate + " days have passed since 1st Ramadan, 2015");

// // Task # 10
// var reference = new Date();
// var since = new Date("Jan 01, 2015");
// var sinmili  = since.getTime();
// var todaymili = reference.getTime();
// var difference = todaymili - sinmili;
// var diffdays = difference / (1000*60);
// var accurate = Math.floor(diffdays);
// document.write("On reference date " + reference);
// document.write("<br>" + accurate + " seconds had passed since beginning of 2015");

// // Task # 11
// var currentdate = new Date();
// var oneHour = currentdate;
// var anHourAgo = oneHour.setHours(oneHour.getHours() - 1);
// document.write("<br>current date: " + new Date());
// document.write("<br>1 hour ago, it was " + oneHour);

// // Task # 12
// var now = new Date();
// var a = now;
// var year = a.setFullYear(a.getFullYear() - 100);
// alert("current date: " + new Date());
// alert("100 years back, it was " + a);

// // Task # 13
// var dob = new Date(prompt("Enter your Date of Birth", "Apr 04, 1997"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var diffyear = diff / (1000 * 60 * 60 * 24 * 30 * 12);
// var accurage = Math.floor(diffyear);
// var str = dob.toString();
// var birthyear = str.slice(11,15);
// document.write("Your age is " + accurage);
// document.write("<br>Your birth year is " +  birthyear);

// // Task # 14
// document.write("<h1>K-Electric Bill</h1><br>");
// var customer = "ABC Customer";
// var d = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = d.getMonth();
// var currentMonth = months[month];
// var units  = 410;
// var cpUnit = 16;
// var netAmount = units * cpUnit;
// var lateCharge = 350;
// var grossAmount = netAmount + lateCharge;
// document.write("Customer Name: <b>" + customer + "</b><br>");
// document.write("Month: <b>" + currentMonth +"</b><br>");
// document.write("Number of units: <b>" + units +"</b><br>");
// document.write("Charges per unit: <b>" + cpUnit +"</b><br>");
// document.write("<br>Net Amount Payable (within Due Date): <b>" + netAmount +"</b><br>");
// document.write("Late payment surcharge: <b>" + lateCharge +"</b><br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount +"</b><br>");

// Assignment # 35 - 38
// Task # 1