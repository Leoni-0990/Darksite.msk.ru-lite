



document.cookie = "user=true;path=/"; // обновляем только куки с именем 'user'

var results = document.cookie.match(/user=(.+?)(;|$)/);
var user_cookie = results[1]; // user
console.log(user_cookie);

if (user_cookie == 'true'){
  window.onload = function present() {
    const headName = document.getElementById("headName");
    const heightPage = window.innerHeight;
    const head = document.getElementById("head");
    headAuteHeight = getComputedStyle(head).height;
    head.style.height = heightPage + "px";
  
    function headAni1() {
      head.style.height = headAuteHeight;
    }
    function headAni2() {
      headName.style.fontSize = "2em";
    }
    setTimeout(headAni2, 1200);
    setTimeout(headAni1, 1700);  
  }
} else {
  console.log('Ошибка JS!')
}

function copyText() {
  let flash_box = document.getElementById("flash_box");
  let speed_copy = "2000";
  navigator.clipboard.writeText("leonid15000@vk.com");
  flash_box.style.animation = "flash_box " + speed_copy + "ms";

  function flash_box_none() {
    flash_box.style.animation = "none";
  }
  setTimeout(flash_box_none, speed_copy);
}
function mail_flash() {}

