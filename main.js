!function(){
  var duration = 50
  $('.actions').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
      case 'veryfast':
        duration = 1
        break
    }
  })
  function writeCode(prefix,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id 
    id = setTimeout(function run(){
        n+=1
        container.innerHTML = code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n < code.length){
          id = setTimeout(run,duration)
        }else{
          fn && fn.call()
        }
    },duration)
  }
  let code = `
  body {
    padding: 0;
    margin: 0;
    background: #eee;
  }
  
  .body-container {
    top: 20vh;
    width: 450px;
    height: 300px;
    background: #eee;
    position: relative;
    margin: 0 auto;
  }
  /*开始制作面具*/
  .mask-shadow {
    background: #BF0011;
    width: 113px;
    height: 109px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 9px solid #000;
    border-radius: 30px;
    overflow: hidden;
    top: 20px;
    z-index: 20;
  }
  
  .mask {
    background: #FF0016;
    position: absolute;
    width: 110px;
    height: 124px;
    border-radius: 30px;
    left: 13px;
    top: -2px;
  }
  /*面具上加一些阴影*/
  .mask-shine-01 {
    width: 10px;
    height: 10px;
    background: #FF4449;
    border-radius: 50%;
    position: absolute;
    left: 53px;
    top: 10px;
  }
  
  .mask-shine-02 {
    width: 30px;
    height: 30px;
    background: #FF4449;
    border-radius: 50%;
    position: absolute;
    left: 65px;
    top: 10px;
  }
  /*开始制作眼睛*/
  .eyes {
    background: #000;
    width: 36px;
    height: 40px;
    position: absolute;
    top: 59px;
    border-radius: 7px;
  }
  /*左眼*/
  .left-eye {
    left: -7px;
  }
  
  .left-eye-pupil {
    width: 10px;
    height: 7px;
    background: #fff;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 8px 8px 0px 0px;
    -webkit-transform: rotate(-140deg);
  }
  /*右眼*/
  .right-eye {
    left: 58px;
  }
  
  .right-eye-pupil {
    width: 10px;
    height: 7px;
    background: #fff;
    position: absolute;
    top: 20px;
    left: 6px;
    border-radius: 8px 8px 0px 0px;
    -webkit-transform: rotate(140deg);
  }
  /*开始制作死侍手里的刀*/
  .sword-container {
    position: relative;
    top: 10px;
  }
  
  .sword {
    width: 16px;
    height: 100px;
    background: #000;
    border-radius: 5px;
  }
  
  .left-sword {
    position: absolute;
    left: 140px;
    -webkit-transform: rotate(-50deg);
    top: 40px;
  }
  
  .right-sword {
    left: 295px;
    position: absolute;
    -webkit-transform: rotate(50deg);
    top: 40px;
  }
  /*需要一个把*/
  .cross-guard {
    width: 30px;
    height: 7px;
    background: #000;
    position: absolute;
    left: -7px;
    top: 40px;
    border-radius: 5px;
  }
  /*开始制作身体*/
  .body-shadow {
    background: #BF0011;
    width: 86px;
    height: 70px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 130px;
    border: 9px solid #000;
    border-radius: 0 0 35px 35px;
    overflow: hidden;
    z-index: 18;
  }
  
  .body-top {
    background: #FF0016;
    width: 110px;
    height: 70px;
    position: absolute;
    left: 10px;
    border-radius: 0 0 0 30px;
  }
  
  .upper-body {
    background: #191919;
    width: 100px;
    height: 40px;
    top: 0px;
    left: -10px;
    position: absolute;
  }
  
  .pecs {
    background: #FF0016;
    width: 32px;
    height: 20px;
    position: absolute;
    top: 10px;
    z-index: 10;
    border-radius: 4px;
  }
  
  .left-pec {
    left: -2px;
  }
  
  .right-pec {
    left: 36px;
  }
  
  .belt {
    background: #191919;
    width: 90px;
    height: 15px;
    position: absolute;
    top: 36px;
    left: -11px;
  }
  /*制作腰带*/  
  .ammo-thing {
    background: #3e3e3e;
    width: 8px;
    height: 14px;
    top: -3px;
    position: absolute;
    left: 0px;
    border-radius: 3px;
    border: 4px solid #000;
  }
  
  .ammo-02 {
    left: 17px;
  }
  
  .ammo-03 {
    left: 56px;
  }
  
  .ammo-04 {
    left: 73px;
  }
  
  .outer-belt-buckle {
    background: #E90013;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 32px;
    top: -4px;
    border-radius: 50%;
    border: 3px solid #000;
  }
  
  .inner-belt-buckle {
    background: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #000;
  }
  
  .line-belt {
    background: #000;
    position: absolute;
    width: 6px;
    height: 10px;
    left: 2px;
  }
  /*制作手*/
  .hands-container {
    top: 96px;
    position: absolute;
  }
  
  .hands-shadow {
    background: #242424;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 9px solid #000;
    position: absolute;
    left: 124px;
    z-index: 30;
    top: 26px;
    overflow: hidden;
  }
  
  .hands-shadow-right {
    left: 260px;
  }
  /*手上的阴影*/
  .hand-shine {
    background: #333;
    width: 48px;
    height: 50px;
    position: absolute;
    left: 9px;
    border-radius: 50%;
    top: -8px;
  }
  
  .hand-small-shine {
    background: #4c4c4c;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 30px;
    top: 10px;
    border-radius: 50%;
  }
  /*加个整体的阴影*/
  .body-ground-shadow {
    background: #C9C9C9;
    width: 115px;
    height: 28px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: 202px;
    border-radius: 50%;
  }
  `
  writeCode('',code)
}.call()