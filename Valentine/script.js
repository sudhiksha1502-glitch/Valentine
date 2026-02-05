function login() {
  const name = document.getElementById("name").value.toLowerCase();
  const pass = document.getElementById("pass").value;

  if (name === "shi shii" && pass === "30112023") {
    window.location.href = "gallery.html";
  } else {
    alert("Only my favourite person ❤️");
  }
}


