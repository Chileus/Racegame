function EatCandy(playerX,playerY,candy_Pos_Array){
	for(var i=0;i<NumberOfCandy;i++){
		if(playerX+32>candy_Pos_Array[i*2]){
			if(playerX<candy_Pos_Array[i*2]+32){
				if(playerY+64>candy_Pos_Array[i*2+1]){
					if(playerY<candy_Pos_Array[i*2+1]+32){
					}
				}
			}
		}
	}	
}

function DetectRaduis(mCharX,mCharY,TargetX,TargetY){
	var DistanceX = mCharX - TargetX;
	var DistanceY = mCharY - TargetY;
	var Distance = Math.sqrt((DistanceX*DistanceX)+(DistanceY*DistanceY));
	return Distance;
}

function DetectCollision(playerX,playerY,X,Y){
		if(playerX+32>X){
			if(playerX<X+32){
				if(playerY+64>Y){
					if(playerY<Y+32){
						//offSetX += Speed_x;
						//offSetY += Speed_y;
						console.log(Player.x);
						
					}
				}
			}
		}
}

function Print(canvas,string,x,y){
	canvas.font = "30px Arial";
	canvas.fillText(string,x,y+30);

}

function CutMap(Map,ctx){
		var TileArray = [];
		var TileTypes = [];
		var Width = 1000/10;
		var Heigth = 1000/10;
		for(i=0;i<Width;i++){
			var tempImgData=ctx.getImageData(0+i*10,0,10,10);
			TileArray.push(tempImgData);
			/*if(TileTypes.length == 0){
				TileTypes.push(tempImgData);  
				
				
			}else{
				for(var j=0;j<TileTypes.length;j++){
					console.log(TileTypes[j].data[0]);
					for(var d=0;d<tempImgData.data.length;d+=4){
					
						if(TileTypes[j].data[d] !=tempImgData.data[d]){
							TileTypes.push(tempImgData);
							
						}
					}
				}
			}*/
		}
		/*var imgData=ctx.getImageData(10,10,50,50);
		for(var i=0;i<imgData.data.length;i+=4){
			imgData.data[i] = 100
			imgData.data[i+1] = 100
			imgData.data[i+2] = 300
		}
		return MapArray;*/
}