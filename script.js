setTimeout(ApresentarModal, 5000);
function ApresentarModal(){
    document.querySelector(".modal").style.display ="block";
    document.querySelector(".modal a")
            .addEventListener("click",function(){
                document.querySelector(".modal").style.display="none";
            });
} 

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

