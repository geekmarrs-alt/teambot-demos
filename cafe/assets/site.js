(function(){
 var els=document.querySelectorAll('.rv');
 var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
 document.documentElement.classList.add('js');
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
 els.forEach(function(e,i){e.style.transitionDelay=(Array.prototype.indexOf.call(e.parentNode.children,e)%4)*70+'ms';io.observe(e)});
 var nav=document.querySelector('.nav');addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>20)},{passive:true});
})();
