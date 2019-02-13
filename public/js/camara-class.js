class Camara {
  constructor(videoNode) {
    this.videoNode = videoNode
    console.log("camara class")
  }

  encender(){
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: 300, height: 300}
      })
      .then( stream =>{
        this.videoNode.srcObject = stream;
        this.stream = stream;
      })
  }

  apagar(){
      this.videoNode.pause();//congela el video
      if (this.stream){
        this.stream.getTracks()[0].stop();//detiene el video
      }
  }

  tomarFoto(){
      //renderizar la foto en el canvas
      let canvas = document.createElement('canvas')

      //colocar dimensiones
      canvas.getAttribute('width',300)
      canvas.getAttribute('heigth',300)

      let context = canvas.getContext('2d');

      //dibujamos la imagen dentro del canvas
      context.drawImage(this.videoNode,0,0,canvas.width,canvas.height);

      this.foto = context.canvas.toDataURL();

      canvas = null;
      context = null;

      return this.foto;
  }
}
