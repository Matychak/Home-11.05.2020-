


// 1 


// let user_old = +prompt("How you old?");

// if (user_old >= 60  ) {
// 	alert("you wery old!");
// }

//  else if (user_old >= 18 || 60 <= user_old ) {
// 	alert("you adult!");
// }

//  else if (user_old >= 12 || 18 <= user_old ) {
// 	alert("you teenager!");
// }


// else if (user_old >= 0 || 2 <= user_old ) {
// 	alert("you children!");
// }

// else {
//  	alert("error");
//  } 

// 2 

// let user_number = +prompt("Enter number!");

// switch (user_number) {
// 	case 1:{
// 	console.log("!");
// 		break;
// 	}

// 		case 2:{
// 	console.log("@");
// 		break;
// }
// 		case 3:{
// 	console.log("#");
// 		break;
// }
// 		case 4:{
// 	console.log("$");
// 		break;
// }
// 		case 5:{
// 	console.log("%");
// 		break;
// }
// 		case 6:{
// 	console.log("^");
// 		break;
// }
// 		case 7:{
// 	console.log("&");
// 		break;
// }
// 		case 8:{
// 	console.log("*");
// 		break;
// }
// 		case 9:{
// 	console.log("(");
// 		break;
// }

// default:{
// 	console.log("error");
// }
// }

// 3

// -Не знаю виконання

// 4 

// let user_year = prompt("year?")

// if (user_year%4 != 0) {
// 	console.log("default year!");
// }


// else if (user_year%100 == 0 && user_year%400 != 0) {
// 	console.log("default year");
// }
// else{
// 	console.log("bissextile");
// }

// 5 

// -Не знаю виконання

// 6 

// let user_valut = prompt("Enter valute");

// let user_valut_perevod = prompt("Enter valute perevod!");

// let user_valut_how_many = prompt("Enter how many?");

// let eur = user_valut_how_many * 1.13;

// let uan = user_valut_how_many * 26.90;

// let azn = user_valut_how_many * 15.66;


// if (user_valut_perevod == "EUR") {
// 	alert(eur.toFixed(2));
// }

// else if (user_valut_perevod == "UAN"){
// 	alert(uan.toFixed(2));
// }

// else if (user_valut_perevod == "AZN"){
// 	alert(azn.toFixed(2));
// }
// else {
// 	alert("ERROR")
// }

// 7 


// let chek = prompt("enter purchase amount?");

//  if(chek > 500) {

// let raxunok_500 = 7/100 ;

// let rax_3 = chek * raxunok_500;


// 	alert(chek - rax_3);
// }


// else if(chek >= 200 || 300 <= chek) {

// let raxunok_300 = 3/100 ;

// let rax_1 = chek * raxunok_300;

// 	alert(chek - rax_1);
// }


//  else if(chek >= 300 || 500 < chek) {

// let raxunok_500 = 5/100 ;

// let rax_2 = chek * raxunok_500;

// 	alert(chek - rax_2);
// }



// 9 


// let user_que = +prompt("2+2? \n 1. 5 \n 2. 6 \n 2. 4");

// console.log(user_que);

// let res_1, res_2, res_3;

// switch (user_que) {
// 	case 5: case 6:{
// 		alert("false!!");
// 		res_1 = 0;
// 		break;
// 	}

// 	case 4:{
// 		alert("true!!");
// res_1 = 2;

//  break;
// 	}
	


// 	default:{
// 		alert("error!!");
// 		res_1 = 0;
// 		break;

// }
// }

// let user_que2 = +prompt("10+10*2? \n 1. 40 \n 2. 30 \n 2. 60");


// console.log(user_que2);
// switch (user_que2) {
// 	case 40: case 60:{
// 		alert("false!!");
// 		res_2 = 0;
// 		break;
// 	}

// 	case 30:{
// 		alert("true!!");
// res_2 = 2;

//  break;
// 	}
// 	default:{
// 		alert("error!!");
// 		res_2 = 0;
// 		break;
// }
// }

// let user_que3 = +prompt("100-30/2? \n 1. 85 \n 2. 90 \n 2. 120");

// console.log(user_que3);
// switch (user_que3) {
// 	case 90: case 120:{
// 		alert("false!!");
// 		res_3 = 0;
// 		break;
// 	}

// 	case 85:{
// 		alert("true!!");
// res_3 = 2;

//  break;
// 	}
// 	default:{
// 		alert("error!!");
// 		res_3 = 0;
// 		break;
// }
// }



// let result =    res_1 + res_2 + res_3  ;
//  console.log(result);
//  isNaN(result);
// let alert_result = alert(result);


// 8 

// let user_okr = prompt("Enter okrujnost!");

// let user_perumeter = prompt("Enter perumeter!");

// let result_per = user_perumeter * 4;

// let result_okr = 3.14 * user_okr;

// if (result_okr > result_per) {
// 	alert("the circle will not fit in the square!");
// }

// else if (result_okr < result_per){
// alert("the circle corresponds to the square!");
// }

// else {
// 	alert("please enter correct data!");
// }
