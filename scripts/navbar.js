

function show() {
    document.getElementById('sidebar').classList.toggle('active')

}

document.getElementById('close-btn').addEventListener('click',close);

function close(){

   document.getElementById('sidebar').classList.remove('active')
}


document.getElementById('search-icon').addEventListener('click',searchSlide);
function searchSlide(){

   document.getElementById('search-bar').classList.toggle('active')
}


