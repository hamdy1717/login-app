let imgs = document.querySelectorAll('img.w-25');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function(e) {
        let targetImgSrs = e.target.getAttribute('src');
        document.querySelector('img.w-100').setAttribute('src', targetImgSrs)
    })

}
let test = document.querySelector('.test');
test.style.cssText = `
background-color:black !important;


`
    // document.querySelector('h1').style.color = 'white';
test.style.marginTop = '50px';
test.style.borderTopLeftRadius = '30px'
document.body.addEventListener('keydown', function(e) {
    if (e.code == 'Space') {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        document.body.style.cssText = `background-color:rgb(${r}, ${g}, ${b}) !important;`
    }
})