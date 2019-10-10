let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = '393';
let height = canvas.height = '308';
let ul = document.querySelector("div.skillList ul");
let sub = document.querySelector("#subject");

ul.addEventListener('click', function(){
	if(event.target.nodeName === 'IMG'){
		let title = event.target.getAttribute('title');
		let factor = factors[title];
		clearBackgroundforSkills();
		event.target.parentElement.classList.add('highlight');
		animate(title, factor);
	}
});

function clearBackgroundforSkills(){
	let list = ul.children;
	for(let i=0; i<list.length; i++){
		list[i].classList.remove('highlight');
	}
}

animate();

let factors = {
	'Javascript': 65,
	'Java': 80,
	'NodeJS': 70,
	'ReactJS': 60,
	'Babel': 80,
	'Bootstrap': 80,
	'HTML': 90,
	'CSS': 90,
	'Selenium': 90,
	'Rest API': 80
};

function writeSubject(subject, factor){
	ctx.font = 'normal 16px Lucida Sans Unicode';
	ctx.fillStyle = '#000';
	sub.innerHTML = `${subject} - ${factor}%`;
}

function drawChart(factor){
	ctx.beginPath();
	ctx.moveTo(width/2, height/2);
	let start = 45 * (Math.PI/180);
	ctx.arc(width/2, height/2, 100, start, start + 2 * Math.PI * factor);
	ctx.lineTo(width/2, height/2);
	// ctx.strokeStyle = '#145873'; 
	ctx.strokeStyle = 'black';
	ctx.stroke();
	// ctx.fillStyle = 'rgba(0, 90, 120, 0.6)';
	ctx.fillStyle = 'rgb(74, 83, 220)';
	ctx.fill();

	drawChart1(factor);
}

function drawChart1(factor){
	ctx.beginPath();
	ctx.moveTo(width/2, height/2);
	let start = 45 * (Math.PI/180);
	ctx.arc(width/2, height/2, 100, start + 2 * Math.PI * factor, start + 2 * Math.PI);
	ctx.lineTo(width/2, height/2);
	// ctx.strokeStyle = '#145873'; 
	// ctx.strokeStyle = 'black';
	// ctx.stroke();
	ctx.fillStyle = 'rgba(74, 83, 220, 0.3)';
	ctx.fill();
}

function animate(subject = 'Javascript',factor = 65){
	let localFactor = 0;
	let interval = setInterval(function(){
		ctx.clearRect(0, 0, width, height);
		drawChart(localFactor/100);
		writeSubject(subject, localFactor);
		localFactor++;
		if(localFactor > factor){
			clearInterval(interval);
		}
	}, 10);
}