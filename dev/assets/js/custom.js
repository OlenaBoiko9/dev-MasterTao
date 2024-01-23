  $(document).ready(function(){
      $('#banner').slick({
          // setting-name: setting-value
          arrows: true,
          dots: true,
          fade: true,
          appendArrows: $('.banner-arrows'),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
              }
            },
          ]
      });
  
      const burger = document.querySelector('.btn-burger');
      const nav = document.querySelector('.header__nav');
  
      const toggleMenu =()=> {    
          burger.classList.toggle('open');
          nav.classList.toggle('show');
      }
  
      burger.addEventListener('click', toggleMenu);
  
  });
  
  