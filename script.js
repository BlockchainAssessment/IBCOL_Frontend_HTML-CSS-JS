// (function($) { 
//     $(function() { 
  
//       //  open and close nav 
//       $('#navbar-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
  
  
//       // Hamburger toggle
//       $('#navbar-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
  
  
//       // If a link has a dropdown, add sub menu toggle.
//       $('nav ul li a:not(:only-child)').click(function(e) {
//         $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
//         // Close dropdown when select another dropdown
//         $('.navbar-dropdown').not($(this).siblings()).hide("slow");
//         e.stopPropagation();
//       });
  
  
//       // Click outside the dropdown will remove the dropdown class
//       $('html').click(function() {
//         $('.navbar-dropdown').hide();
//       });
//     }); 
//   })(jQuery); 
  
// //
// //
// var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var stars = [], // Array that contains the stars
//     FPS = 60, // Frames per second
//     x = 100, // Number of stars
//     mouse = {
//       x: 0,
//       y: 0
//     };  // mouse location

// // Push stars to array

// for (var i = 0; i < x; i++) {
//   stars.push({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     radius: Math.random() * 1 + 1,
//     vx: Math.floor(Math.random() * 50) - 25,
//     vy: Math.floor(Math.random() * 50) - 25
//   });
// }

// // Draw the scene

// function draw() {
//   ctx.clearRect(0,0,canvas.width,canvas.height);
  
//   ctx.globalCompositeOperation = "lighter";
  
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     ctx.fillStyle = "#fff";
//     ctx.beginPath();
//     ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillStyle = 'black';
//     ctx.stroke();
//   }
  
//   ctx.beginPath();
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var starI = stars[i];
//     ctx.moveTo(starI.x,starI.y); 
//     if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
//     for (var j = 0, x = stars.length; j < x; j++) {
//       var starII = stars[j];
//       if(distance(starI, starII) < 150) {
//         //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
//         ctx.lineTo(starII.x,starII.y); 
//       }
//     }
//   }
//   ctx.lineWidth = 0.05;
//   ctx.strokeStyle = 'white';
//   ctx.stroke();
// }

// function distance( point1, point2 ){
//   var xs = 0;
//   var ys = 0;
 
//   xs = point2.x - point1.x;
//   xs = xs * xs;
 
//   ys = point2.y - point1.y;
//   ys = ys * ys;
 
//   return Math.sqrt( xs + ys );
// }

// // Update star locations

// function update() {
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     s.x += s.vx / FPS;
//     s.y += s.vy / FPS;
    
//     if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
//     if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
//   }
// }

// canvas.addEventListener('mousemove', function(e){
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// // Update and draw

// function tick() {
//   draw();
//   update();
//   requestAnimationFrame(tick);
// }

// tick();


// //
// //
//   /* ---- particles.js config ---- */

//   particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 380,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 1,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });
  
//   /*
  
  
//   */
//   $(function () { // wait for document ready

//     //science animation
//         function science(){
//             var liquidOrange = $('#liquidOrange'),
//                 liquidBlue = $('#liquidblue'),
//                 drop = $('#drop'),
//                 pops = $('#pops circle'),
//                 tube = $('#tube'),
//                 boile = $('#boile circle');
    
//             var master = new TimelineMax();
//             master
//                 .add(animationA())
//                 .add(animationB());
    
//             function animationA(){
//                 var tl1 = new TimelineMax();
//                 tl1
//                     .to(liquidOrange, 1.5, {x:'+=135', y:'-=200', ease: Power0.easeNone})
//                     .to(tube, 3, {strokeDashoffset:0 , ease: Sine.easeOut})
//                     .to(drop, 1.1, {scale:'+=2',y:195 , ease: Expo.easeIn, onComplete: function(){
//                         tl1.set(drop,{css:{display:'none'}});
//                     }},'-=.2')
//                     .to(liquidBlue,.2,{css:{fill:'#00FF1E'}})
//                 return tl1;
//             }
    
//             function animationB(){
//                 var tl1 = new TimelineMax({repeat:-1});
//                 tl1
//                     .staggerTo(pops,.5, { opacity:0,scale:'-=.7',y:-130 ,  ease: Power0.easeNone},.4,0)
//                     .staggerFromTo(boile,.5, { opacity:0, ease: Power0.easeNone }, { opacity:1,scale:0,y:'-=60' , ease: Power0.easeNone},.1,0);
    
    
//                 return tl1;
//             }
    
//             return master;
//         }
    
//         science();
    
    
//     });

// particle.min.js hosted on GitHub
// Scroll down for initialisation code

!function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

// Initialisation

let canvasDiv = document.getElementById('particle-canvas');
let options = {
  particleColor: '#888',
  background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
  interactive: true,
  speed: 'medium',
  density: 'high'
};
let particleCanvas = new ParticleNetwork(canvasDiv, options);
            
            
            
            const hamburger = document.querySelector('.hamburger');

            hamburger.addEventListener('click', function () {
              this.classList.toggle('is-active');
            });
            
            
            