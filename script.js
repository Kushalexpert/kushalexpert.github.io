$(document).ready(function() {
  
  var logo       = $('#logo');
  addClones();
  
  var layer1     = $('#layer1'),
      layer2     = $('#layer2'),
      bg         = $('#bg');
  glitch();  
  
  // colors swap
  var toggle = true;
  $('#logo').click(function() {
    if(toggle){
      TweenLite.to(logo, 1, { color: '#FFF', ease: Expo.easeOut});                   
      TweenLite.to(bg, 1, { backgroundColor: '#000', ease: Expo.easeOut});          
      TweenLite.to(layer1, 1, { color: 'rgb(25, 255, 23)'});                  
      TweenLite.to(layer2, 1, { color: 'rgb(241, 0, 255)'});
      toggle = false;
    } else {
      TweenLite.to(logo, 1, { color: '#000', ease: Expo.easeOut});            
      TweenLite.to(bg, 1, { backgroundColor: '#FFF', ease: Expo.easeOut});           
      TweenLite.to(layer1, 1, { scale: 1, color: 'rgb(255, 0, 0)'});   
      TweenLite.to(layer2, 1, { scale: 3, color: 'rgb(122, 254, 255)'});
      toggle = true;
    }
  })
});

// Add other layers
function addClones(){
  for(var i = 1; i<3; i++){
    // (that's why I love jQuery)
    $('#logo').clone().appendTo( ".content" ).attr('id', 'layer'+i).addClass('layers');
  }
}

function glitch() {
    
  // timeline ( and that's why I love GreenSock )
  var glitchTl = new TimelineMax({ repeat: -1 });
  glitchTl
    .add('start')
    .to(layer1, 1, { x: '0.5%', y: '0.8%' },'start')
    .to(layer1, 1, { x:'-1.5%', y:'-0.8%' })
    .to(layer1, 1, { x:'-0.8%', y: '0.8%' })    
    .to(layer1, 1, { x: '0.8%', y:'-0.8%' })    
    .to(layer2, 1, { x:'-0.8%', y:'-0.8%' },'start')
    .to(layer2, 1, { x: '0.8%', y: '0.8%' })
    .to(layer2, 1, { x: '0.8%', y:'-0.8%' })    
    .to(layer2, 1, { x:'-0.8%', y: '0.8%' });
  
  glitchTl.timeScale(20);
  // pause 
  glitchTl.pause(); 
  
  // play timeline on hover
  $('#logo').hover(function() {
    glitchTl.resume();
  }, function() {
    // pause timeline and set to 'start'
    glitchTl.pause('start');
  });
}