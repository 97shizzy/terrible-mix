const cube = document.querySelector(".cube");
let rotationX = 0, rotationY = 0;

document.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 360;
    let y = (e.clientY / window.innerHeight - 0.5) * 360;

    rotationX = y;
    rotationY = x;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
