var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","42cb4c4a-1c48-4078-b402-3addb59d7830","10a445b9-17d4-408a-9b28-d8d33b943d12","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf","e8c17dc2-a9d2-4976-b614-d25a57076c37","fcd8e064-fede-484a-be0f-0785a25aaa82","af6d8fc8-2474-4fea-9cf3-8f9e66fe1785"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit2","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":15,"version":"1Sn5kGeTz5YnIbPd0l.msP_h6lNNNCj3","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":5,"version":"oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png"},"42cb4c4a-1c48-4078-b402-3addb59d7830":{"name":"alienGreen_badge_1_copy_1","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":12,"version":"D_eCyOCERm2kw4GWordfAXYd7N28pYCS","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":98},"rootRelativePath":"assets/42cb4c4a-1c48-4078-b402-3addb59d7830.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword_silver_1","sourceUrl":null,"frameSize":{"x":100,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"xjS5WTj9lfDRWfAhG6PlRR0gmMwTZPFr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":109},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit1","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"e8c17dc2-a9d2-4976-b614-d25a57076c37":{"name":"alienGreen","sourceUrl":null,"frameSize":{"x":164,"y":156},"frameCount":1,"looping":true,"frameDelay":12,"version":"42MiLu_CCDaHIcpfAuhuc0NHZxH.MIQy","loadedFromSource":true,"saved":true,"sourceSize":{"x":164,"y":156},"rootRelativePath":"assets/e8c17dc2-a9d2-4976-b614-d25a57076c37.png"},"fcd8e064-fede-484a-be0f-0785a25aaa82":{"name":"Project14.1.PNG_1","sourceUrl":null,"frameSize":{"x":172,"y":173},"frameCount":1,"looping":true,"frameDelay":12,"version":"GnJA.M2TSHUr1kk529ZonHoYImfkOf1K","loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":173},"rootRelativePath":"assets/fcd8e064-fede-484a-be0f-0785a25aaa82.png"},"af6d8fc8-2474-4fea-9cf3-8f9e66fe1785":{"name":"GetReady","sourceUrl":"assets/api/v1/animation-library/gamelab/eDB8BrVXfJf5ToV5O4yH1cgRUWocOERW/category_gameplay/textGetReady.png","frameSize":{"x":400,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"eDB8BrVXfJf5ToV5O4yH1cgRUWocOERW","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eDB8BrVXfJf5ToV5O4yH1cgRUWocOERW/category_gameplay/textGetReady.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var sword = createSprite(200,200,20,20); 


var restart = createSprite(200, 300, 20, 20); 
restart.setAnimation("Project14.1.PNG_1");
restart.scale = 0.4; 





//gameState
var PLAY = 1; 
var END = 0; 
var gameState = PLAY; 

//score
var score = 0; 

//Group
var FruitsGroup = createGroup(); 
var EnemyGroup = createGroup(); 
var GetReadyGroup = createGroup(); 

function draw() {
   background(rgb(48, 255, 255)); 
   
   //display score
   fill("black");
   textSize(27);
   text("score: "+score, 270,50); 
   
   if(gameState === PLAY){
     
     //sword follows mouse
     sword.x = World.mouseX;
     sword.y = World.mouseY; 
     
     // function calls
     fruits();
     enemys();
     countDown(); 
     
     // sword animation and invisible resart button
     sword.setAnimation("sword_silver_1");
     sword.scale = 0.8;
     restart.visible = false; 
     
     
     
     
   }
   
   if(FruitsGroup.isTouching(sword)){
     // disapearing fruits and increase score
     score = score +2;
     FruitsGroup.destroyEach(); 
     playSound( "assets/category_whoosh/heavy_blade_whoosh_3.mp3");
     FruitsGroup.destroyEach(); 
   }
   if(EnemyGroup.isTouching(sword)){
     // end game
     playSound("assets/category_explosion/8bit_explosion.mp3");
     gameState = END; 
     EnemyGroup.destroyEach();
     FruitsGroup.destroyEach();
   }
   if(gameState === END){
     // sword stops moving
     sword.x = 200;
     sword.y = 200; 
     //game ove sign
     sword.setAnimation("textGameOver_1"); 
     sword.scale = 0.9; 
     // fruits and bombs stop moving
     FruitsGroup.setVelocityXEach(0); 
     EnemyGroup.setVelocityXEach(0); 
     // restart button visible
     restart.visible = true; 
     
     // restart button restarts game
     if(mousePressedOver(restart)){
       gameState = PLAY; 
       score = 0; 
       // restart button disapears
       restart.visible = false; 
     }
     if(World.frameCount === 120){
       GetReadyGroup.destroyEach(); 
     }
   }
   
   drawSprites();  
 } 
  

function countDown(){
  var abc = createSprite(200, 200, 30, 30);
  abc.setAnimation("GetReady");
  abc.visible = false; 
  GetReadyGroup.add(abc); 
  if(World.frameCount === 50){
   abc.visible = true;
  }
  if(World.frameCount === 120){
       abc.destroy(); 
     }
}

function fruits(){
   if(World.frameCount % 150 === 0){
     GetReadyGroup.destroyEach(); 
     var abc = randomNumber(50,350); 
     var cde = randomNumber(1,4); 
     var efg = randomNumber(1,2); 
     var zxc = randomNumber(1,20);
     var ghi = 0;
     var ijk = 0; 
     var xcv = 0;
     if(efg === 1){
       ghi = 450;
       ijk = (-3 + score / 4 ); 
     }
     if(efg === 2){
       ghi = -50;
       ijk = (3 + score / 4); 
     }
     if(zxc === 17){
       ghi = randomNumber(50,350);
       abc = -50; 
       ijk = 0; 
       xcv = (3 + score /4);
     }
     if(zxc === 6){
       ghi = randomNumber(50,350);
       abc = 450; 
       ijk = 0; 
       xcv = (-3 + score /4);
     }
     
     
     
     
     var fruit = createSprite(ghi, abc, 20,20); 
     fruit.setAnimation("fruit" + cde); 
     fruit.scale = 0.2; 
     FruitsGroup.add(fruit);
     fruit.lifetime = 200;
     
     
     fruit.velocityX = ijk;
     fruit.velocityY = xcv; 
     
     
}
}


function enemys(){
  if(World.frameCount % 380 === 0){
    var zyx = randomNumber(50,350); 
    var xwv = randomNumber(1,2); 
    var qwe = 0; 
    var rty = 0;    
    if(xwv === 1){
      qwe = 500; 
      rty = (-4 + score / 10 ); 
    }
    if(xwv === 2){
      qwe = -100; 
      rty = (4 + score / 10);
    }
    var enemy = createSprite(qwe, zyx, 20,20); 
    enemy.setAnimation("alienGreen"); 
    enemy.scale = 0.5;
    enemy.velocityX = rty; 
    EnemyGroup.add(enemy); 
    enemy.lifetime = 150;
  }
  
  
  
  
}






 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
