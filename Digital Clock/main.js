setInterval(()=>{
    const waktu = new Date();
    const jam = waktu.getHours();
    const menit = waktu.getMinutes();
    const detik = waktu.getSeconds();
    document.getElementById("jam").innerHTML = jam + " : " + menit + " : " + detik;

    let timezone; const currentTitle = "Digital Clock";
    if(jam >= 12 && jam < 24){
            timezone = " PM.";
        } else {
            timezone = " AM.";
        }
    window.addEventListener("blur", () => {
        document.title = "It is " + jam + timezone;
        console.log("title changed to custom")
    });
    window.addEventListener("focus", () => {
        document.title = currentTitle;
        console.log("title changed to default")
    });
}, 100)

let greet = function() {
    const indikator = new Date().getHours();
    const pagi = indikator > 6 && indikator < 12;
    const siang = indikator >= 12 && indikator < 20;
    if(pagi === true){
        const isPagi = document.getElementById("teks").innerHTML = "Good Morning";
        console.log("setPagi");
    } else if(siang === true){
        document.getElementById("teks").innerHTML = "Good Afternoon";
        console.log("setSiang");
    } else {
        document.getElementById("teks").innerHTML = "Good Night";
        console.log("setMalam");
}}
greet();

let animate = anime({
    targets: '.wrapper',
    rotate: 360,
    autoplay: false,
    easing: 'easeInOutBack'
});
document.querySelector('#btn-start').onclick = animate.play;
document.querySelector('#btn-reverse').onclick = animate.reverse;

function bgRed(color) {
    document.getElementById('body').style.backgroundColor = color;
    document.getElementById('teks').style.color = '#fff';
    document.getElementById('teks').innerHTML = "Hover here to reset";
}

function bgWhite(color) {
    document.getElementById('body').style.backgroundColor = color;
    document.getElementById('teks').style.color = '#E34234';
    greet();
}