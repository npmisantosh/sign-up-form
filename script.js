const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
password.addEventListener("keyup", () => {
  console.log("f:" + password.value);
});

cpassword.addEventListener("keyup", () => {
  if (password.value == cpassword.value) {
    console.log("match");
  } else {
    console.log("s:" + cpassword.value);
    console.log("not match");
  }
});
