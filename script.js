// الحصول على العناصر من DOM
const toggleMenu = document.querySelector('.toggle-menu');
const navbar = document.querySelector('.navbar');
const iconBars = document.querySelector('.fa-bars');
const iconXmark = document.querySelector('.fa-xmark');

// إخفاء رمز الإغلاق في البداية
iconXmark.style.display = 'none';

// إضافة حدث النقر
toggleMenu.addEventListener('click', function() {
  // تبديل الفئة 'active' على عنصر الـ navbar
  navbar.classList.toggle('active');
  
  if (navbar.classList.contains('active')) {
    // إظهار أيقونة xmark مع أنيميشن
    iconXmark.classList.add('rotate-in');
    iconBars.style.display = 'none';
    iconXmark.style.display = 'block';
    
    setTimeout(() => {
      iconXmark.classList.remove('rotate-in');
    }, 500); // مدة الأنيميشن 0.5 ثانية
  } else {
    // إخفاء أيقونة xmark
    iconXmark.classList.add('rotate-in');
    
    setTimeout(() => {
      iconXmark.style.display = 'none';
      iconBars.style.display = 'block';
      iconXmark.classList.remove('rotate-in');
    }, 500); // تأخير لمدة 0.5 ثانية قبل إظهار أيقونة bars
  }
});
