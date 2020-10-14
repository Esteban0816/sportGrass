const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 90;
const currentFrame = index => (
  `file:///C:/projects/sportGrass/template/assets/00${index.toString().padStart(3, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1920;
canvas.height=1080;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;// 1 - 100 , 101 - 200, 201 - 300, 301 - 400 ... 2901
    const maxScrollTop = html.scrollHeight - window.innerHeight; //tamaño del scroll de html - tamaño de la ventana = 2901
    const scrollFraction = scrollTop / maxScrollTop; // 100 div 2901 = 0.003256145461
    console.log(`scrollTop: ${scrollTop} / maxScrollTop ${maxScrollTop} = ${scrollFraction}`);
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    requestAnimationFrame(() => updateImage(frameIndex + 1))

    if(scrollTop === maxScrollTop){ //lego al final de los frames de la animacion y se va a empezar a desplazar
         
    }
});

preloadImages()