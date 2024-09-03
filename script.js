document.addEventListener('DOMContentLoaded', () => {
    // تحديد العناصر التي سيتم التعامل معها
    const navbar = document.querySelector('.navbar');
    const toggleMenu = document.querySelector('.toggle-menu');
    const iconBars = document.querySelector('.fa-bars');
    const iconXmark = document.querySelector('.fa-xmark');
  
    // إخفاء الـ navbar عند تحميل الصفحة
    document.getElementById("navbar").style.display = "none";
    iconXmark.style.display = 'none';
    navbar.style.display = 'none';
  
    // وظيفة لتغيير حالة الـ navbar بناءً على حجم الشاشة
    function handleResize() {
        if (window.matchMedia("(max-width: 786px)").matches) {
            // عرض أيقونة الهمبرجر وإخفاء أيقونة الإغلاق والـ navbar في الشاشات الصغيرة
            navbar.classList.remove('active');
            iconBars.style.display = 'block';
            iconXmark.style.display = 'none';
            navbar.style.display = 'none'; 
        } else {
            // عرض الـ navbar في الشاشات الكبيرة وإخفاء أيقونة الهمبرجر
            navbar.classList.add('active');
            iconBars.style.display = 'none';
            iconXmark.style.display = 'none';
            navbar.style.display = 'flex'; 
        }
    }
  
    // تطبيق وظيفة handleResize عند تحميل الصفحة وعند تغيير حجم النافذة
    handleResize();
    window.addEventListener('resize', handleResize);
  
    // إضافة حدث النقر على زر القائمة لتبديل حالة الـ navbar
    toggleMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
  
        if (navbar.classList.contains('active')) {
            // إذا كانت الـ navbar نشطة، عرض أيقونة الإغلاق وإخفاء أيقونة الهمبرجر
            iconXmark.classList.add('rotate-in');
            iconBars.style.display = 'none';
            iconXmark.style.display = 'block';
            navbar.style.display = 'flex'; 
            
            setTimeout(() => {
                iconXmark.classList.remove('rotate-in');
            }, 1000);
        } else {
            // إذا كانت الـ navbar غير نشطة، إخفاء أيقونة الإغلاق وإظهار أيقونة الهمبرجر
            iconXmark.classList.add('rotate-in');
            
            setTimeout(() => {
                iconXmark.style.display = 'none';
                iconBars.style.display = 'block';
                iconXmark.classList.remove('rotate-in');
                navbar.style.display = 'none';
            }, 1000);
        }
    });
  });
  
  // دالة تسجيل الدخول
  function login() {
      var role = document.querySelector('input[name="role"]:checked').value;
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      // التحقق من المدخلات
      if (username === "" || password === "") {
          alert("الرجاء إدخال اسم المستخدم وكلمة المرور");
          return;
      }
  
      // التعامل مع تسجيل الدخول بناءً على الدور
      if (role === "student") {
          alert("تسجيل دخول كطالب: " + username);
      } else if (role === "teacher") {
          alert("تسجيل دخول كمدرس: " + username);
      }
  }
  
  // دالة عرض نموذج التسجيل
  function showRegisterForm() {
      document.querySelector('.login-container').style.display = 'none';
      document.querySelector('.register-container').style.display = 'block';
      document.querySelector('.Create-an-account-container').style.display = 'block';
  }
  
  // دالة عرض نموذج تسجيل الدخول
  function showLoginForm() {
      document.querySelector('.login-container').style.display = 'block';
      document.querySelector('.register-container').style.display = 'none';
      document.querySelector('.Create-an-account-container').style.display = 'none';
  }
  
  // دالة لتبديل النماذج بناءً على الدور المحدد
  function toggleForm() {
      var role = document.querySelector('input[name="register-role"]:checked').value;
      if (role === "student") {
          document.getElementById('student-form').style.display = 'block';
          document.getElementById('teacher-form').style.display = 'none';
      } else {
          document.getElementById('student-form').style.display = 'none';
          document.getElementById('teacher-form').style.display = 'block';
      }
  }
  