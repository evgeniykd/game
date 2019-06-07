let score = 0; 
//див для очков
let div = document.createElement("div"); 
document.body.appendChild(div);
div.innerHTML = score;
div.style.position = "absolute";
div.style.left = '90%';
div.style.fontSize = "200%";
div.style.border = 'solid 1px';
div.style.width = '5%';
div.style.textAlign = 'center';


//создание персонажа	
let person1=null;

function createPersonaj(url){
		person1  = document.createElement("div");
		document.body.appendChild(person1);
		person1.style.position = "absolute";
		person1.style.left=0+"%";
		person1.style.top=0+"%";
		person1.style.width=8 + "%";
		person1.style.height = 12 + "%";
		person1.style.backgroundImage = "url("+url+")";
		person1.style.backgroundSize="100% 100%";
	
};

let ae=null; 

function creatAnswer(){
		ae  = document.createElement("div");
		document.body.appendChild(ae);
		ae.style.position = "absolute";
		ae.style.left=10+"%";
		ae.style.top=60+"%";
		ae.style.width=13 + "%";
		ae.style.height = 23 + "%";
		ae.style.backgroundImage = "url(images/csgo.jpg)";
		ae.style.backgroundSize="100% 100%";
		ae.style.zIndex = "-1";
	
};
creatAnswer()

function creatAnswer2(){
		ug  = document.createElement("div");
		document.body.appendChild(ug);
		ug.style.position = "absolute";
		ug.style.left=25+"%";
		ug.style.top=25+"%";
		ug.style.width=13 + "%";
		ug.style.height = 23 + "%";
		ug.style.backgroundImage = "url(images/miracle.jpeg)";
		ug.style.backgroundSize="100% 100%";
		ug.style.zIndex = "-1";
	
};	
creatAnswer2()

function creatAnswer3(){
		eif  = document.createElement("div");
		document.body.appendChild(eif);
		eif.style.position = "absolute";
		eif.style.left=50+"%";
		eif.style.top=35+"%";
		eif.style.width=13 + "%";
		eif.style.height = 23 + "%";
		eif.style.backgroundImage = "url(images/eif.jpg)";
		eif.style.backgroundSize="100% 100%";
		eif.style.zIndex = "-1";
	
};	
creatAnswer3()

function creatAnswer4(){
		lotr  = document.createElement("div");
		document.body.appendChild(lotr);
		lotr.style.position = "absolute";
		lotr.style.left=35+"%";
		lotr.style.top=77+"%";
		lotr.style.width=13 + "%";
		lotr.style.height = 23 + "%";
		lotr.style.backgroundImage = "url(images/lotr.jpg)";
		lotr.style.backgroundSize="100% 100%";
		lotr.style.zIndex = "-1";
	
};	
creatAnswer4()

function creatAnswer5(){
		mv  = document.createElement("div");
		document.body.appendChild(mv);
		mv.style.position = "absolute";
		mv.style.left=60+"%";
		mv.style.top=77+"%";
		mv.style.width=13 + "%";
		mv.style.height = 23 + "%";
		mv.style.backgroundImage = "url(images/mv.jpg)";
		mv.style.backgroundSize="100% 100%";
		mv.style.zIndex = "-1";
	
};	
creatAnswer5()


function creatAnswer6(){
		piram  = document.createElement("div");
		document.body.appendChild(piram);
		piram.style.position = "absolute";
		piram.style.left=75+"%";
		piram.style.top=35+"%";
		piram.style.width=13 + "%";
		piram.style.height = 23 + "%";
		piram.style.backgroundImage = "url(images/piram.jpg)";
		piram.style.backgroundSize="100% 100%";
		piram.style.zIndex = "-1";
	
};	
creatAnswer6()

function creatAnswer7(){
		hr  = document.createElement("div");
		document.body.appendChild(hr);
		hr.style.position = "absolute";
		hr.style.left=85+"%";
		hr.style.top=70+"%";
		hr.style.width=13 + "%";
		hr.style.height = 23 + "%";
		hr.style.backgroundImage = "url(images/hr.jpg)";
		hr.style.backgroundSize="100% 100%";
		hr.style.zIndex = "-1";
	
};	
creatAnswer7()


//движение персонажа
let left=0;

function moveRight(){

	left = left+10
	person1.style.left=left + "%";
}
let down=0;

function moveDown(){

	down = down+10
	person1.style.top=down + "%";
}

function moveLeft(){

	left = left-10
	person1.style.left=left + "%";
}

function moveUp(){

	down = down-10
	person1.style.top=down + "%";
}



let check = false;
let timerId = setInterval(checkAnswer,1000);

function checkAnswer(){
	if(person1.style.top >= ae.style.top && person1.style.left >=ae.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(ae.style.height.split("%")[0]) + parseInt(ae.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(ae.style.width.split("%")[0]) + parseInt(ae.style.left.split("%")[0])){
			check = true;
			let answer = prompt("как называется эта игра?(на английском,без знаком препинания)");
			if(answer=="cs go" || answer=='csgo'){
			
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
			clearInterval(timerId);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}




let timerId3 = setInterval(checkAnswer2,1000);

function checkAnswer2(){
	if(person1.style.top >= ug.style.top && person1.style.left >=ug.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(ug.style.height.split("%")[0]) + parseInt(ug.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(ug.style.width.split("%")[0]) + parseInt(ug.style.left.split("%")[0])){
			check = true;
			let answer = prompt("какого игрока называют 'чюдом'?(nickname на английском)");
			if(answer=="miracle" || answer=='miracle' || answer=='miracle' || answer=='miracle' ){
			alert("Правильно!");
			score+=10;
			div.innerHTML = score;
			clearInterval(timerId3);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerId4 = setInterval(checkAnswer3,1000);


function checkAnswer3(){
	if(person1.style.top >= eif.style.top && person1.style.left >=eif.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(eif.style.height.split("%")[0]) + parseInt(eif.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(eif.style.width.split("%")[0]) + parseInt(eif.style.left.split("%")[0])){
			check = true;
			let answer = prompt("компания которая находится на 3 месте по продаже телефонов?(английский)");
			if(answer=="huawei" || answer=='huawei'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
		
			clearInterval(timerId4);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}


let timerId5 = setInterval(checkAnswer4,1000);


function checkAnswer4(){
	if(person1.style.top >= lotr.style.top && person1.style.left >=lotr.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(lotr.style.height.split("%")[0]) + parseInt(lotr.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(lotr.style.width.split("%")[0]) + parseInt(lotr.style.left.split("%")[0])){
			check = true;
			let answer = prompt("2+2=рыба 3+3=8 7+7=? ?(слово)");
			if(answer=="треугольник" || answer=='треугольник'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;

			clearInterval(timerId5);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerId6 = setInterval(checkAnswer5,1000);


function checkAnswer5(){
	if(person1.style.top >= mv.style.top && person1.style.left >=mv.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(mv.style.height.split("%")[0]) + parseInt(mv.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(mv.style.width.split("%")[0]) + parseInt(mv.style.left.split("%")[0])){
			check = true;
			let answer = prompt("(по)чему утка плавает?");
			if(answer=="по воде" || answer=='по воде'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
	
			clearInterval(timerId6);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}


let timerId7 = setInterval(checkAnswer7,1000);

function checkAnswer7(){
	if(person1.style.top >= piram.style.top && person1.style.left >=piram.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(piram.style.height.split("%")[0]) + parseInt(piram.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(piram.style.width.split("%")[0]) + parseInt(piram.style.left.split("%")[0])){
			check = true;
			let answer = prompt("в какой страна находится на острове?");
			if(answer=="Япония" || answer=='япония'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;

			clearInterval(timerId7);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerId8 = setInterval(checkAnswer8,1000);

function checkAnswer8(){
	if(person1.style.top >= hr.style.top && person1.style.left >=hr.style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(hr.style.height.split("%")[0]) + parseInt(hr.style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(hr.style.width.split("%")[0]) + parseInt(hr.style.left.split("%")[0])){
			check = true;
			let answer = prompt("мне 6 а брат младше меня в 2 раза.на сколько мой брат будет младше меня когда мне будет 60?");
			if(answer=="57" || answer=='57' || answer=='57 лет'  || answer=='57лет'){
			alert("Правильно!");
				score+=10;
			div.innerHTML = score;
	
			clearInterval(timerId8);
			} else {
				alert("Ошибка!")
			}
	}else{
	
	}
}

let timerScore = setInterval(checkScore,1000);

function checkScore(){
	if(score==70){
		alert("Ты выиграл");
		clearInterval(timerScore);

	}
}


