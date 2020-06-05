function isTouching(r1,r2){
    if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r1.width/2+r2.width/2&&
      r1.y-r2.y<r1.height/2+r2.height/2&&r2.y-r1.y<r1.height/2+r2.height/2){
        return true;
      }
      else{
        return false;
      }
  }
  
  function bounceOff(r3,r4){
    if(r3.x-r4.x<r3.width/2+r4.width/2&&r4.x-r3.x<r3.width/2+r4.width/2){
    r3.velocityX*=-1;
    r4.velocityX*=-1;
    }
    if(r3.y-r4.y<r3.height/2+r4.height/2&&r4.y-r3.y<r3.height/2+r4.height/2){
      r3.velocityY*=-1;
      r4.velocityY*=-1;
    }
  }  