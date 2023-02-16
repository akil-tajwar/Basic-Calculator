let btnsAll = document.getElementsByTagName('button');
let screen = document.getElementById('main-screen');
for (const btn of btnsAll) {
    btn.addEventListener('click', function(){
        if(btn.innerText === 'AC'){
            screen.value = '';
        }
        else if(btn.innerText === 'DEL'){
            let digit = screen.value.split('');
            digit.pop();
            screen.value = digit.join('');
        }
        else if(btn.innerText === 'x'){
            screen.value = screen.value+'*';
        }
        else if(btn.innerText === this.className){
            screen.value = screen.value+'/';
        }
        else if(btn.innerText === '='){
            screen.value = eval(screen.value);
        }
        else{
            screen.value = screen.value+btn.innerText;
        }
    });
}
