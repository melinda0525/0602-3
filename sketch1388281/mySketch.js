function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#BFCBC2")
}

function drawFlower(clr1,clr2,size=1){
push()
	 fill(clr1)
	 ellipse(0, 0, 50, 50);
	 ellipseMode(CORNER)   // 設定以左上角為座標點上的座標
	 //fill("#A5CBC3")
	fill(clr2)
	for(var i=0;i<16;i=i+1){//設迴圈讓他重複16次
		ellipse(30, -20, 100*size, 30);  // 設定以左上角為座標點，做一個花瓣 
		line(30,-5,120*size,-5)
		rotate(PI/8) //180度產生八片，360度產生16片
	}
	pop()
    
  
    
}
var colors1= ["#4f345a","#5d4e6d","#8fa998","#9cbfa7","#c9f299"]//圓心的顏色
var colors2= ["#e6e49f","#e3e7d3","#bdc2bf","#989c94","#c25291c"]//花瓣的顏色
var positionListX=[300,500,800]
var positionListY=[160,430,600]
var sizesList=[1,0.3,1.5]
var vYList=[1.5,2,3]

function draw() {
	background("#BFCBC2")
	var count=0
	for(var i=0;i<positionListX.length;i++){

			push()
			count=count+1
				translate(positionListX[i],positionListY[i]);
				scale(0.7)
				rotate(frameCount/50)
				drawFlower(colors1[count%colors1.length],colors2[count%colors2.length],map(mouseX,0,width,0,sizesList[i]))
			pop()
		positionListY[i]=positionListY[i]+vYList[i]
		if(positionListY[i]>height || positionListY[i]<0)
		{
			vYList[i]=-vYList[i]
		}
		}
}