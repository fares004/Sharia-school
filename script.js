document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('active'); // اجعل navbar مفتوحًا عند تحميل الصفحة

  const toggleMenu = document.querySelector('.toggle-menu');
  const iconBars = document.querySelector('.fa-bars');
  const iconXmark = document.querySelector('.fa-xmark');

  // إخفاء رمز الإغلاق في البداية
  iconXmark.style.display = 'none';

  // إضافة حدث النقر
  toggleMenu.addEventListener('click', function() {
    navbar.classList.toggle('active');
    
    if (navbar.classList.contains('active')) {
      iconXmark.classList.add('rotate-in');
      iconBars.style.display = 'none';
      iconXmark.style.display = 'block';
      
      setTimeout(() => {
        iconXmark.classList.remove('rotate-in');
      }, 500);
    } else {
      iconXmark.classList.add('rotate-in');
      
      setTimeout(() => {
        iconXmark.style.display = 'none';
        iconBars.style.display = 'block';
        iconXmark.classList.remove('rotate-in');
      }, 500);
    }
  });
});
