setInterval(()=>{
    const waktu = new Date();
    const jam = waktu.getHours();
    const menit = waktu.getMinutes();
    const detik = waktu.getSeconds();
    document.getElementById("jam").innerHTML = jam + " : " + menit + " : " + detik;
}, 1000)

const indikator = new Date().getHours();
const pagi = indikator > 6 && indikator < 12;
const siang = indikator >= 12 && indikator < 20;
if(pagi === true){
    document.getElementById("teks").innerHTML = "Good Morning";
    console.log("setPagi");
} else if(siang === true){
    document.getElementById("teks").innerHTML = "Good Afternoon";
    console.log("setSiang");
} else {
    document.getElementById("teks").innerHTML = "Good Night";
    console.log("setMalam");
}

let animate = anime({
    targets: '.wrapper',
    rotate: 360,
    autoplay: false,
    easing: 'easeInOutElastic'
});
document.querySelector('.button').onclick = animate.play