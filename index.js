let btnsAll = document.getElementsByTagName('button');
let screen = document.getElementById('main-screen');
for (const btn of btnsAll) {
    btn.addEventListener('click', function(){
        if(btn.innerText === 'AC'){
            screen.value = '';
        }
        else if(btn.innerText === 'x'){
            screen.value === 'g';
        }
        else{
            screen.value = screen.value+btn.innerText;
        }
    });
}
