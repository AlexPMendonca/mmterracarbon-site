(function(){
  function onScroll(){
    if (window.scrollY > 10) document.body.classList.add('is-scrolled');
    else document.body.classList.remove('is-scrolled');
  }

  function initFAQ(){
    var items = document.querySelectorAll('.faq__q');
    items.forEach(function(q){
      q.addEventListener('click', function(){
        var item = q.closest('.faq__item');
        if (!item) return;
        item.classList.toggle('is-open');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    initFAQ();
  });
})();
