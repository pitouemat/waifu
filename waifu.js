const btn = document.getElementById('gerar') 
var dados = document.getElementsByTagName('section')[0]

btn.onclick = () => {

    

    var img = document.getElementById('img')

    let ListImg = ["imgs/pitou.png", "imgs/shi.png", "imgs/chi.png", "imgs/chika.png", "imgs/roxy.png", "imgs/speed.png"]
    let i = Math.floor(Math.random() * ListImg.length)
    const nomes = ['Pitou', 'Shizuku', 'Chizuku', 'Chika', "Roxy", "SpeedWagon"]
    img.setAttribute("src", ListImg[i])

    btn.style.display = 'none';
    const h1 = document.createElement('h1')
    h1.classList.add('main')
    h1.innerText =  `Você tirou: ${nomes[i]} `
    dados.appendChild(h1)
    

}