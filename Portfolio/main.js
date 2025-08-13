const HobbyMenu = document.querySelectorAll(".hobbies-menu p");
const HobbyDes = document.querySelectorAll(".desHobby");
HobbyMenu.forEach((item, index) => {
  item.addEventListener("click", () => {
    HobbyMenu.forEach((p) => p.classList.remove("active"));
    item.classList.add("active");
    HobbyDes.forEach((des) => des.classList.add("hide"));
    HobbyDes[index].classList.remove("hide");
  });
});
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const commentInput = document.querySelector(".comment");

function checkName(name) {
  if (name.trim() === "") return false; // loại bỏ khoảng trắng và kiểm tra rỗng
  if (/\d/.test(name)) return false; // kiểm tra có số hay không
  return true; // hợp lệ nếu không rỗng và không có số
}
nameInput.addEventListener("onchange", (e) => {
  if (!checkName(nameInput.value)) {
    nameInput.classList.add("invalid");
  } else nameInput.classList.remove("invalid");
});
