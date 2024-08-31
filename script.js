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
function login() {
    var role = document.querySelector('input[name="role"]:checked').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // التحقق من المدخلات
    if (username === "" || password === "") {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور");
        return;
    }

    // التعامل مع تسجيل الدخول
    if (role === "student") {
        alert("تسجيل دخول كطالب: " + username);
    } else if (role === "teacher") {
        alert("تسجيل دخول كمدرس: " + username);
    }
}

function showRegisterForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
}

function showLoginForm() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.register-container').style.display = 'none';
}

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
