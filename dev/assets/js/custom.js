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


    const checkboxes = document.querySelectorAll('[type=checkbox]')
    if (checkboxes.length > 0) {
      checkboxes.forEach(checkbox => { 
        checkbox.closest('.input-column').classList.add('column-checkbox')  
      })  
    }

    const file = document.querySelectorAll('.input-file')

    if (file.length > 0) {
      file.forEach(item => { 
      item.closest('.input-column').style.paddingTop = '6px'
    });
  }

  const arrayBurgers = document.querySelectorAll('.hamburger')

  if (arrayBurgers.length > 0) {
      arrayBurgers.forEach(item => {
        item.addEventListener('click', function(){
          item.classList.toggle('is-active');
      })
    })
  }

});

