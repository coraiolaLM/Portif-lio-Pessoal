//quando gamburguer for ativado, mostra o conteudo de navbar
  const hamburger = document.getElementById("hamburger")
  const navbar = document.querySelector(".navbar")

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('tham-active')
    navbar.classList.toggle('show')
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false
    hamburger.setAttribute("aria-expanded", !expanded)
  })

//trocar tema 
document.getElementById('mudartema').addEventListener('click', function() {
  var lista = document.getElementById('listaTemas')
  lista.style.display = lista.style.display === 'none' ? 'block' : 'none'
})
//Seleciona tema
document.querySelectorAll('.temaBtn').forEach(button => {
  button.addEventListener('click', function() {
      var tema = this.getAttribute('data-tema')
      var root = document.documentElement
      root.className = ''
      root.classList.add(tema)
      localStorage.setItem('temaAtual', tema)    

      document.getElementById('listaTemas').style.display = 'none'
  })
})
// Salvar tema para quando a página for reiniciada
const temaSalvo = localStorage.getItem('temaAtual')
if (temaSalvo) {
    document.documentElement.className = ''
    document.documentElement.classList.add(temaSalvo)
}

//Efeito img eu
  const imagem = document.querySelector('.eu')
  const container = imagem.parentElement
  container.addEventListener('mousemove', (event) => {
      const { clientX: mouseX, clientY: mouseY } = event
      const { left, top, width, height } = container.getBoundingClientRect()
      const percentX = (mouseX - left - width / 2) / (width / 2)
      const percentY = (mouseY - top - height / 2) / (height / 2)
      const maxRotation = 15

      imagem.style.transform = `rotateX(${-maxRotation * percentY}deg) rotateY(${maxRotation * percentX}deg)`
  })
  container.addEventListener('mouseleave', () => {
      imagem.style.transform = 'rotateX(0deg) rotateY(0deg)'
  })

 