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

      const fileInput = document.querySelector('#fileInput');
      const fileName = document.querySelector('#file-name');

      fileInput.addEventListener('change', function () {
        // fileName.innerHTML =  fileInput.value;   long name
        fileName.innerHTML = this.files[0].name;   // short name
      })
     
      const typeTheckbox = document.querySelector('[type=checkbox]');

      typeTheckbox.closest('.input-column').classList.add('column-checkbox')

  });
  
  