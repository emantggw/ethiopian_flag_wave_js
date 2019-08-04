/*




			



							++==	+==	   ==+	===+  ++===+    |
							||__	|  \  /	 |	 __|  ||   |  __+__		 
							||		|	\/	 |	|  |  ||   |	|
							++==	|		 |	+==+  ||   |	|___

									Created at 2019/8/4
										Ethiopian Flag









*/
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function Flag(w, l) {
	this.wid = w;
	this.len = l;
	this.x = innerWidth / 2 - this.wid / 2;
	this.y = innerHeight / 2 - this.len / 2;
	this.freq = 0;
	this.lamda = 0.01;
	this.amp = 10;
	this.update = () => {
		this.freq += 0.1;
		this.draw();
	};
	this.draw = () => {

		for (var j = this.y; j < this.len + this.y; j++) {
			c.beginPath();
			if (j < this.y + this.len / 3) {
				c.strokeStyle = 'green';
			}
			else if (j > this.y + this.len / 3 && j < this.y + 2 * this.len / 3) {
				c.strokeStyle = 'yellow';
			} else {
				c.strokeStyle = 'red';
			}
			for (var i = this.x; i < this.wid + this.x; i++) {
				c.lineTo(i, j + Math.sin(i * this.lamda + this.freq) * this.amp);
			}
			c.stroke();
			c.closePath();
		}

	};
}


var flag;
function init() {
	flag = [];
	flag.push(new Flag(innerWidth - 100, 100));

}
function animate() {
	requestAnimationFrame(animate);
	c.fillStyle = 'rgba(0,0,0,0.1)';
	//c.clearRect(0,0,innerWidth, innerHeight);
	c.fillRect(0, 0, innerWidth, innerHeight);
	flag.forEach(e => {
		e.update();
	});
}
init();
animate();


