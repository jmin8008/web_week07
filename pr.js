const time =document.getElementById('time');
const sun = document.getElementsByClassName("sun")[0];
const moon = document.getElementById('moon');
const skt = document.getElementsByTagName("body")[0];

let day = true ;

   time.addEventListener('click',function(){
    day = !day;
    if(day){
        sun.style.display='block';
        moon.style.display='none';
        sky.style.backgroundColor='white';
    }
    else{
        sun.style.display='none';
        moon.style.display='block';
        sky.style.backgroundColor='black';
    }

})
