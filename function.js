
//создание локации
let location_new;
function createLocation(url, x,y,){
		location_new  = document.createElement("div");
		document.body.appendChild(location_new);
		location_new.style.position = "absolute";
		location_new.style.left=x+"%";
		location_new.style.top=y+"%";
		location_new.style.width=15 + "%";
		location_new.style.height = 25 + "%";
		location_new.style.backgroundImage = "url("+url+")";
		location_new.style.backgroundSize="100% 100%";
		location_new.style.zIndex = "-1";
		location_new.question = null;
		location_new.answer = null;
		location_new.classList.add("location");

}
let timer_location= setInterval(checkVopros,1000);

//создание вопроса
function createVopros(question, otvet){
	location_new.answer = otvet;
	location_new.question = question;
	
}
let boxes;
//проверка на касание персонажа и локации
function checkVopros(){
	 boxes = document.querySelectorAll(".location");
	for(let i=0;i<boxes.length;i++){
		if(person1.style.top >= boxes[i].style.top && person1.style.left >=boxes[i].style.left && parseInt(person1.style.top.split("%")[0])<=parseInt(boxes[i].style.height.split("%")[0]) + parseInt(boxes[i].style.top.split("%")[0]) && parseInt(person1.style.left.split("%")[0])<=parseInt(boxes[i].style.width.split("%")[0]) + parseInt(boxes[i].style.left.split("%")[0])){
			console.log(boxes[i].question, boxes[i].answer)

			let answer = prompt(boxes[i].question);
			if(answer == boxes[i].answer){
				alert("Правильно");
				boxes[i].remove();
			}
		}
	}
	
}


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


