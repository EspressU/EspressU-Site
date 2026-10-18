(function(){
  var nav=document.getElementById('nav'), burger=document.getElementById('burger');
  if(!nav||!burger) return;
  burger.addEventListener('click',function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o?'true':'false')});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');burger.setAttribute('aria-expanded','false')}});
})();

(function(){
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els=[].slice.call(document.querySelectorAll('.hero>*,.specs,.sec'));
  if(!els.length) return;
  document.documentElement.classList.add('js');
  els.forEach(function(e,i){e.classList.add('reveal');if(e.parentNode.classList.contains('hero'))e.style.transitionDelay=(i*90)+'ms'});
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
  els.forEach(function(e){io.observe(e)});
})();

(function(){
  var art=document.querySelector('.art'); if(!art||!matchMedia('(hover: hover)').matches) return;
  var img=art.querySelector('img'); var box=document.createElement('div'); box.className='tilt';
  img.parentNode.insertBefore(box,img); box.appendChild(img);
  art.addEventListener('mousemove',function(e){
    var r=box.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    box.classList.add('live'); box.style.setProperty('--mx',x*100+'%'); box.style.setProperty('--my',y*100+'%');
    box.style.transform='rotateX('+((.5-y)*14)+'deg) rotateY('+((x-.5)*14)+'deg) scale(1.04)';
  });
  art.addEventListener('mouseleave',function(){box.classList.remove('live');box.style.transform=''});
})();
