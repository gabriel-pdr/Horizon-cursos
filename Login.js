const togglePw = document.getElementById("togglePw");
const senhaInput = document.getElementById("senha");
const iconEye = document.getElementById("iconEye");
const iconEyeOff = document.getElementById("iconEyeOff");
const btnLogin = document.getElementById("btnLogin");
const card = document.getElementById("card");
const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastSub = document.getElementById("toastSub");

let toastTimer = null;

// Mostrar toast
function showToast(titulo, sub) {
  toastTitle.textContent = titulo;
  toastSub.textContent = sub;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// Shake no card
function shake() {
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");
}

// Toggle mostrar/ocultar senha
togglePw.addEventListener("click", () => {
  const show = senhaInput.type === "password";
  senhaInput.type = show ? "text" : "password";
  iconEye.style.display = show ? "none" : "block";
  iconEyeOff.style.display = show ? "block" : "none";
});

// Login
btnLogin.addEventListener("click", () => {
  const registro = document.getElementById("email").value.trim();
  const senha = senhaInput.value.trim();

  if (!registro || !senha) {
    showToast("Campos obrigatórios", "Preencha o registro e a senha");
    shake();
    return;
  }

  btnLogin.textContent = "...";
  btnLogin.disabled = true;

  setTimeout(() => {
    if (registro === "123456" && senha === "12122012") {
      btnLogin.textContent = "✓ Bem-vindo!";
      btnLogin.style.background = "rgba(100,220,150,0.95)";
      btnLogin.style.color = "#0a3a1a";
    } else {
      btnLogin.textContent = "Login";
      btnLogin.disabled = false;
      showToast("Senha ou registro incorreto", "Tente novamente");
      shake();
    }
  }, 700);
});

// Submeter com Enter
[document.getElementById("email"), senhaInput].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnLogin.click();
  });
});
