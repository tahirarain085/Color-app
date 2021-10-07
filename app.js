const colorBtn = document.querySelector('.btn-color');
const bodybcg = document.querySelector('body');
const colors = ['red','green','blue','pink','orange','#ef777f'];


colorBtn.addEventListener('click',changeColor);

function changeColor (){
    // bodybcg.style.backgroundColor = colors[4];
    /* make a variable by using math.floor and math random method  */

    let random = Math.floor(Math.random()*colors.length);
    bodybcg.style.backgroundColor = colors[random]

}