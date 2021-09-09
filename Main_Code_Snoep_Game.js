var FPS = 30;
var Player;
var Player2;
  
var offSetX  = 0;
var offSetY = 0;

var offSetX2 = 0;
var offSetY2 = 0;

$(function(){
	var canvas= document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	var canvas2 = document.getElementById("Player2");
	var ctx2 =canvas2.getContext("2d");
	
	var image=document.createElement("img");
	var snoepimage=document.createElement("img");
	var snoepbadimage=document.createElement("img");
	var map=document.createElement("img");
	var corners=document.createElement("img");
	
	var k=0;
	
	Player = {
		X : 800/2,
		Y : 600/2,
		Width : 32,
		Heigth :  64,
		Rotation : 0,
		Draw : function(){
			ctx.save();
			ctx.translate(Player.X+Player.Width/2,Player.Y+Player.Heigth/2);
			ctx.rotate(Player.Rotation);
			CollisionBox.Rotation = Player.Rotation;
			ctx.drawImage(image,-16,-32);
			
			ctx.restore();
			CollisionBox.Draw();
		}
	}
	Player2_Dummy = {
		X : 800/2,
		Y : 600/2,
		Width : 32,
		Heigth :  64,
		Rotation : 0,
		Draw : function(){
			ctx.save();
			ctx.translate(Player2_Dummy.X+Player2_Dummy.Width/2,Player2_Dummy.Y+Player2_Dummy.Heigth/2);
			ctx.rotate(Player2_Dummy.Rotation);
			ctx.drawImage(image,-16,-32);
			ctx.restore();
			
		}
	}
	
	CollisionBox = {
		Rotation : 0,
		Draw : function(){
			ctx.save();
			ctx.translate(Player.X+Player.Width/2,Player.Y+Player.Heigth/2);
			ctx.rotate(CollisionBox.Rotation);
			ctx.drawImage(corners,-16,-32);
			ctx.restore();
		}
	}
	
	Player2 = {
		X : 800/2,
		Y : 600/2,
		Width : 32,
		Heigth :  64,
		Rotation : 0,
		Draw : function(){
			
			ctx2.save();
			ctx2.translate(Player2.X+Player2.Width/2,Player2.Y+Player2.Heigth/2);
			ctx2.rotate(Player2.Rotation);
			ctx2.drawImage(image,-16,-32);
			ctx2.restore();
		}
	}
	
	Player1_Dummy = {
		X : 800/2,
		Y : 600/2,
		Width : 32,
		Heigth :  64,
		Rotation : 0,
		Draw : function(){
			
			ctx2.save();
			ctx2.translate(Player1_Dummy.X+Player1_Dummy.Width/2,Player1_Dummy.Y+Player1_Dummy.Heigth/2);
			ctx2.rotate(Player1_Dummy.Rotation);
			ctx2.drawImage(image,-16,-32);
			ctx2.restore();
			
		}
	}

	
	var Snoep = {
		X : 0,
		Y : 0,
		Width : 16,
		Heigth : 16,
		Draw : function(posX,posY,imagedraw){
			ctx.drawImage(imagedraw,posX,posY);
		}
	}
	
	var Snoep2 = {
		X : 0,
		Y : 0,
		Width : 16,
		Heigth : 16,
		Draw : function(posX,posY,imagedraw){
			ctx2.drawImage(imagedraw,posX,posY);
		}
	}
	
	for(var i=0;i<NumberOfCandy;i++){
		Snoep_Array_Position[i*2] = Math.random()*6000-3000;
		Snoep_Array_Position[i*2+1] = Math.random()*6000-3000;
	}
	
	
	image.src="Images/MainCharacter.png";
	snoepimage.src="Images/snoep.png";
	snoepbadimage.src="Images/snoep_bad.png"
	map.src="Images/Map.png";
	corners.src="Images/cornerCar.png";
	
	image.onload=function(){
		ctx.drawImage(image,30,30);
		ctx.drawImage(snoepimage,0,0);
		ctx.drawImage(snoepbadimage,0,0);
		ctx.drawImage(map,0,0);
		ctx.drawImage(corners,0,0);
	}
	function update(){
		Print(ctx,Player.Y,10,10);
		
	}
	
	
	function draw(){
		ctx.clearRect(0,0,800,600);
		ctx2.clearRect(0,0,800,600);
		for(var i=0;i<Race_Path.length; i++){
			for(var j=0;j<Race_Path[i].length;j++){
				for (var n=0;n<4;n++){
					for (var m=0;m<4;m++){
						if(DetectRaduis(Player.X,Player.Y,32*n+offSetX+j*128,32*m+offSetY+i*128) < 200){
							if(Race_Path[i][j] == 1){
								Snoep.Draw(32*n+offSetX+j*128,32*m+offSetY+i*128,snoepimage);
								DetectCollision(Player.X,Player.Y,32*n+offSetX+j*128,32*m+offSetY+i*128);
							}
							if(Race_Path[i][j] == 2){
								Snoep.Draw(32*n+offSetX+j*128,32*m+offSetY+i*128,snoepbadimage);
								
							}	
						}
						if(DetectRaduis(Player2.X,Player2.Y,32*n+offSetX2+j*128,32*m+offSetY2+i*128) < 200){
							if(Race_Path[i][j] == 1){
							
								Snoep2.Draw(32*n+offSetX2+j*128,32*m+offSetY2+i*128,snoepimage);
							}
							if(Race_Path[i][j] == 2){
								Snoep2.Draw(32*n+offSetX2+j*128,32*m+offSetY2+i*128,snoepbadimage);
								
							}	
						}
					}
				}			
			}
		}
		
		Player.Draw();
		Player2.Draw();
		Player2_Dummy.Draw();
		Player1_Dummy.Draw();
		
	}	
	
	
	setInterval(function() {
	  draw();
	  update();
	}, 1000/FPS);
	
	
	
})