let img = document.querySelector('img');
img.addEventListener("click", function() {
        img.classList.toggle('rounded-circle')
    })
    // img.style.position = 'absolute';
    // // img.style.top = '100px';
    // document.body.addEventListener('mousemove', function(e) {
    //     img.style.left = e.clientX
    //     img.style.top = e.clientY
    // })
    // img.addEventListener('click', function() {
    //         img.classList.remove('rounded-circle')
    //     })
    // document.body.addEventListener("keydown", function(e) {


//     if (e.code == "Space") {
//         let r = Math.round(Math.random() * 255)
//         let g = Math.round(Math.random() * 255)
//         let b = Math.round(Math.random() * 255)
//         document.body.style.cssText = `background-color:rgb(${r},${g},${b});`
//     }
// })