let canvas,ctx,W,H,mp=0x12c,particles=[],angle=0x0,tiltAngle=0x0,confettiActive=!![],animationComplete=!![],deactivationTimerHandler,reactivationTimerHandler,animationHandler,particleColors={'colorOptions':['DodgerBlue','OliveDrab','Gold','pink','SlateBlue','lightblue','Violet','PaleGreen','SteelBlue','SandyBrown','Chocolate','Crimson'],'colorIndex':0x0,'colorIncrementer':0x0,'colorThreshold':0xa,'getColor':function(){return this['colorIncrementer']>=0xa&&(this['colorIncrementer']=0x0,this['colorIndex']++,this['colorIndex']>=this['colorOptions']['length']&&(this['colorIndex']=0x0)),this['colorIncrementer']++,this['colorOptions'][this['colorIndex']];}};function confettiParticle(_0x4e0296){this['x']=Math['random']()*W,this['y']=Math['random']()*H-H,this['r']=RandomFromTo(0xa,0x1e),this['d']=Math['random']()*mp+0xa,this['color']=_0x4e0296,this['tilt']=Math['floor'](Math['random']()*0xa)-0xa,this['tiltAngleIncremental']=Math['random']()*0.07+0.05,this['tiltAngle']=0x0,this['draw']=function(){return ctx['beginPath'](),ctx['lineWidth']=this['r']/0x2,ctx['strokeStyle']=this['color'],ctx['moveTo'](this['x']+this['tilt']+this['r']/0x4,this['y']),ctx['lineTo'](this['x']+this['tilt'],this['y']+this['tilt']+this['r']/0x4),ctx['stroke']();};}function confettiRain(_0x23f1e8){$('<canvas\x20id=\x22confetti\x22\x20style=\x22position:\x20absolute;\x22></canvas>')['insertBefore']('body'),SetGlobals(),RestartConfetti(),setTimeout(function(){DeactivateConfetti();},_0x23f1e8*0x3e8),setTimeout(function(){const _0xdea0ae=document['querySelector']('#confetti');removeConfettiFade(_0xdea0ae,0x3e8);},_0x23f1e8*0x3e8*0x2);}function SetGlobals(){canvas=document['getElementById']('confetti'),ctx=canvas['getContext']('2d'),W=window['innerWidth'],H=document['documentElement']['scrollHeight']+0x32,canvas['width']=W,canvas['height']=H;}function InitializeConfetti(){particles=[],animationComplete=![];for(var _0x42ac43=0x0;_0x42ac43<mp;_0x42ac43++){var _0x43f1b1=particleColors['getColor']();particles['push'](new confettiParticle(_0x43f1b1));}StartConfetti();}function Draw(){ctx['clearRect'](0x0,0x0,W,H);var _0x4fc1d8=[];for(var _0x4c41cf=0x0;_0x4c41cf<mp;_0x4c41cf++){(function(_0xbd70ac){_0x4fc1d8['push'](particles[_0xbd70ac]['draw']());}(_0x4c41cf));}return Update(),_0x4fc1d8;}function RandomFromTo(_0x112ac0,_0x1dd2fa){return Math['floor'](Math['random']()*(_0x1dd2fa-_0x112ac0+0x1)+_0x112ac0);}function Update(){var _0x1551bf=0x0,_0x17f26b;angle+=0.01,tiltAngle+=0.1;for(var _0x5391aa=0x0;_0x5391aa<mp;_0x5391aa++){_0x17f26b=particles[_0x5391aa];if(animationComplete)return;if(!confettiActive&&_0x17f26b['y']<-0xf){_0x17f26b['y']=H+0x64;continue;}stepParticle(_0x17f26b,_0x5391aa),_0x17f26b['y']<=H&&_0x1551bf++,CheckForReposition(_0x17f26b,_0x5391aa);}_0x1551bf===0x0&&StopConfetti();}function CheckForReposition(_0x2fb669,_0x2afe11){(_0x2fb669['x']>W+0x14||_0x2fb669['x']<-0x14||_0x2fb669['y']>H)&&confettiActive&&(_0x2afe11%0x5>0x0||_0x2afe11%0x2==0x0?repositionParticle(_0x2fb669,Math['random']()*W,-0xa,Math['floor'](Math['random']()*0xa)-0x14):Math['sin'](angle)>0x0?repositionParticle(_0x2fb669,-0x14,Math['random']()*H,Math['floor'](Math['random']()*0xa)-0x14):repositionParticle(_0x2fb669,W+0x14,Math['random']()*H,Math['floor'](Math['random']()*0xa)-0x14));}function stepParticle(_0x457922,_0x2e9b81){_0x457922['tiltAngle']+=_0x457922['tiltAngleIncremental'],_0x457922['y']+=(Math['cos'](angle+_0x457922['d'])+0x3+_0x457922['r']/0x2)/0x2,_0x457922['x']+=Math['sin'](angle),_0x457922['tilt']=Math['sin'](_0x457922['tiltAngle']-_0x2e9b81/0x3)*0xf;}function repositionParticle(_0x14bca5,_0x44484e,_0x37dfea,_0x24bcb2){_0x14bca5['x']=_0x44484e,_0x14bca5['y']=_0x37dfea,_0x14bca5['tilt']=_0x24bcb2;}function StartConfetti(){W=window['innerWidth']-0x14,H=document['documentElement']['scrollHeight']-0x32,canvas['width']=W,canvas['height']=H,function _0x2b337b(){if(animationComplete)return null;return animationHandler=requestAnimFrame(_0x2b337b),Draw();}();}function ClearTimers(){clearTimeout(reactivationTimerHandler),clearTimeout(animationHandler);}function DeactivateConfetti(){confettiActive=![],ClearTimers();}function StopConfetti(){animationComplete=!![];if(ctx==undefined)return;ctx['clearRect'](0x0,0x0,W,H);}function RestartConfetti(){ClearTimers(),StopConfetti(),reactivationTimerHandler=setTimeout(function(){confettiActive=!![],animationComplete=![],InitializeConfetti();},0x64);}window['requestAnimFrame']=function(){return window['requestAnimationFrame']||window['webkitRequestAnimationFrame']||window['mozRequestAnimationFrame']||window['oRequestAnimationFrame']||window['msRequestAnimationFrame']||function(_0x2191e9){return window['setTimeout'](_0x2191e9,0x3e8/0x3c);};}();function removeConfettiFade(_0xbf9372,_0x5c3861){var _0x2aa8c1=_0x5c3861/0x3e8;_0xbf9372['style']['transition']='opacity\x20'+_0x2aa8c1+'s\x20ease',_0xbf9372['style']['opacity']=0x0,setTimeout(function(){_0xbf9372['parentNode']['removeChild'](_0xbf9372);},_0x5c3861);}