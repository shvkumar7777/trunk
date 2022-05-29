function playSound(e){
    const audio = document.querySelector(`Audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//if no audio attached to that key , stop it 
    // console.log(audio);
    audio.currntTime = 0;
    audio.play();
    key.classList.add('playing');


    function removeTransition(e){
        // console.log(e)
        if(e.propertyName !== "transform") return;
        console.log(e)
        key.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.keys')
    keys.forEach(key=>{
        key.addEventListener('transitionend',removeTransition)
    })
}  
    window.addEventListener('keydown',playSound)
