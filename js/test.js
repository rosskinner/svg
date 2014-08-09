var draw = SVG('drawing').size(1260,650)

// create image
// var image = draw.image('http://payload266.cargocollective.com/1/14/450171/7627346/20130121-DSC_1200-4_o.jpg');

// image.size(600,600).y(-150)

// create text
// var text = draw.text('HELLO').move(300, 0).fill('blue')
// text.font({
//   family: 'Source Sans Pro',
//   size: 180,
//   anchor: 'middle',
//   leading: 1
// })

var move = function (circle) {
  circle.mouseover(function() {
  this.animate(1000, SVG.easing.elastic)
  .move(1200 * Math.random(), 600 * Math.random())
  // .rotate(-45 + 90 * Math.random())
  .fill({
            r: ~~(Math.random() * 255)
          , g: ~~(Math.random() * 255)
          , b: ~~(Math.random() * 255)
        })
  })
};

var circle1 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle2 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle3 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle4 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle5 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle6 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle7 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle8 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle9 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle10 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle11 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle12 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle13 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle14 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle15 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)
var circle16 = draw.circle(50,50).move(Math.random()*1200,Math.random()*600)

move(circle1);
move(circle2);
move(circle3);
move(circle4);
move(circle5);
move(circle6);
move(circle7);
move(circle8);
move(circle9);
move(circle10);
move(circle11);
move(circle12);
move(circle13);
move(circle14);
move(circle15);
move(circle16);


// clip image with text
// image.clipWith(text)
// draw.clock('15%').back().start().move('80%', '50%')



