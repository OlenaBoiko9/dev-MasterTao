  $(document).ready(function(){
      $('#banner').slick({
          // setting-name: setting-value
          arrows: false,
          dots: false,
          fade: true,

      });
  
      const burger = document.querySelector('.btn-burger');
      const nav = document.querySelector('.header__nav');
  
      const toggleMenu =()=> {    
          burger.classList.toggle('open');
          nav.classList.toggle('show');
      }
  
      burger.addEventListener('click', toggleMenu);
  
  });
  
  