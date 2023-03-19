let sayi = 0;

const buttons = document.querySelectorAll(".btn");
const gosterge = document.getElementById("sayi");

buttons.forEach(function(btn) {
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('geri')){
            sayi--;

        }else if (styles.contains('ileri')){
            sayi++;

        }else {
            sayi = 0;
        }

        if(sayi > 0){
            gosterge.style.color = "green";
        }else if (sayi < 0){
            gosterge.style.color = "red";
        }else if (sayi === 0){
            gosterge.style.color = "black";
        }

        gosterge.textContent = sayi;
        
    })
});





