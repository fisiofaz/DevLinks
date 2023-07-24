function tooggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
     img.setAttribute("src", "./assets/avatar-light.png")
     img.setAttribute("alt", "Foto de Fábio Zatta de palitó preto e camisa branca e gravata preta")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Fábio Zatta de gravata e camisa verde")
  }        
}


