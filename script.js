document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const toggleMenu = document.querySelector('.toggle-menu');
  const iconBars = document.querySelector('.fa-bars');
  const iconXmark = document.querySelector('.fa-xmark');

  // إخفاء رمز الإغلاق في البداية
  iconXmark.style.display = 'none';

  // تحقق من حجم الشاشة وتطبيق الفئة المناسبة
  function handleResize() {
      if (window.matchMedia("(max-width: 786px)").matches) {
          // إذا كانت الشاشة صغيرة، تأكد من إخفاء الـ navbar بشكل افتراضي
          navbar.classList.remove('active');
          iconBars.style.display = 'block';
          iconXmark.style.display = 'none';
          navbar.style.display = 'none'; // تأكد من إخفاء navbar
      } else {
          // على الشاشات الكبيرة، يمكن أن يكون navbar مرئيًا بشكل افتراضي
          navbar.classList.add('active');
          iconBars.style.display = 'none';
          iconXmark.style.display = 'none';
          navbar.style.display = 'flex'; // تأكد من عرض navbar
      }
  }

  // استدعاء الدالة عند تحميل الصفحة
  handleResize();

  // إضافة حدث تغيير حجم الشاشة
  window.addEventListener('resize', handleResize);

  // إضافة حدث النقر على التبديل
  toggleMenu.addEventListener('click', function() {
      navbar.classList.toggle('active');

      if (navbar.classList.contains('active')) {
          iconXmark.classList.add('rotate-in');
          iconBars.style.display = 'none';
          iconXmark.style.display = 'block';
          navbar.style.display = 'flex'; // عرض navbar عند النقر على القائمة
          
          setTimeout(() => {
              iconXmark.classList.remove('rotate-in');
          }, 2000);
      } else {
          iconXmark.classList.add('rotate-in');
          
          setTimeout(() => {
              iconXmark.style.display = 'none';
              iconBars.style.display = 'block';
              iconXmark.classList.remove('rotate-in');
              navbar.style.display = 'none'; // إخفاء navbar عند إغلاق القائمة
          }, 2000);
      }
  });
});
