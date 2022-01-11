const closeBtn = document.querySelector('#search-box-close-btn');
const searchBtn = document.querySelector('#search-btn');
const searchContainer = document.querySelector('.search-box-container');
const headers = document.querySelectorAll('header');
const playBtn = document.querySelectorAll('.play-btn');
const closeVideo = document.querySelector('.video-container #close-btn');
const videoContainer = document.querySelector('.video-container');

searchBtn.addEventListener('click', () => {
    searchContainer.style.opacity = '1';
    searchContainer.style.transform = 'scale(1)';
});

closeBtn.addEventListener('click', () => {
    searchContainer.style.opacity = '0';
    searchContainer.style.transform = 'scale(0)';
});
window.addEventListener('scroll', () => {
    headers.forEach(header =>{
        if(window.pageYOffset > 0){
            header.classList.add('bg-header');
        }else{
            header.classList.remove('bg-header');
        };
    });
    searchContainer.style.opacity = '0';
    searchContainer.style.transform = 'scale(0)';
    videoContainer.style.display = 'none';
});

playBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        videoContainer.style.display = 'block';
    });
});
closeVideo.addEventListener('click',()=>{
    videoContainer.style.display = 'none';
});

function darkSwitch(btn){
    btn.classList.toggle('fa-sun'); 
    document.body.classList.toggle('dark-mode-on');
};