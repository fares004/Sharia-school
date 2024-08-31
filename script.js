document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const toggleMenu = document.querySelector('.toggle-menu');
  const iconBars = document.querySelector('.fa-bars');
  const iconXmark = document.querySelector('.fa-xmark');

  iconXmark.style.display = 'none';
  navbar.style.display = 'none';

  function handleResize() {
      if (window.matchMedia("(max-width: 786px)").matches) {
          navbar.classList.remove('active');
          iconBars.style.display = 'block';
          iconXmark.style.display = 'none';
          navbar.style.display = 'none'; 
      } else {
          navbar.classList.add('active');
          iconBars.style.display = 'none';
          iconXmark.style.display = 'none';
          navbar.style.display = 'flex'; 
      }
  }


  handleResize();
  window.addEventListener('resize', handleResize);

 
  toggleMenu.addEventListener('click', function() {
      navbar.classList.toggle('active');

      if (navbar.classList.contains('active')) {
          iconXmark.classList.add('rotate-in');
          iconBars.style.display = 'none';
          iconXmark.style.display = 'block';
          navbar.style.display = 'flex'; 
          
          setTimeout(() => {
              iconXmark.classList.remove('rotate-in');
          }, 1800);
      } else {
          iconXmark.classList.add('rotate-in');
          
          setTimeout(() => {
              iconXmark.style.display = 'none';
              iconBars.style.display = 'block';
              iconXmark.classList.remove('rotate-in');
              navbar.style.display = 'none';
          }, 1800);
      }
  });
});
//  function checBoxes(){
//     const tiggerBottom = window.innerHeight / 5 * 4;
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach((box ,idX) => {
//         const boxTop = box.getBoundingClientRect().top;
//         if(boxTop < tiggerBottom){
//             box.classList.add('active');
//         }else{
//             box.classList.remove('active');
//         }
//     });
//  }