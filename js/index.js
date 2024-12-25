function present() {
  const headName = document.getElementById("headName");
  const heightPage = window.innerHeight;
  console.log(heightPage);
  const head = document.getElementById("head");
  headAuteHeight = getComputedStyle(head).height;
  console.log(headAuteHeight);
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
window.onload = present;
function copyText() {
  let speed_copy = "2000";
  navigator.clipboard.writeText("leonid15000@vk.com");
  let flash_box = document.getElementById("flash_box");
  const hph = "flash_box " + speed_copy + " ms";
  flash_box.style.animation = "flash_box " + speed_copy + "ms";
  console.log(hph);
  function flash_box_none() {
    flash_box.style.animation = "none";
  }
  setTimeout(flash_box_none, speed_copy);
}
function mail_flash(){
  
}