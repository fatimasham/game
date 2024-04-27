const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*15)+1;

input.addEventListener("keypress", function(e){
    if (e.keyCode === 13) 
        play();
})

button.addEventListener("click", play);

function play() {

    const userNumber = document.querySelector("#guess").value;
    if (userNumber < 1 || userNumber > 15) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 15!',
          })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число',
        })
    }

    else {
        if (userNumber < answer) {
            Swal.fire('Попробуй число повыше!',
            'Компьютер пока побеждает!')
        }

        else if (userNumber > answer) {
            Swal.fire('Попробуй число пониже!',
            'Компьютер пока побеждает!')
        }

        else {
            Swal.fire({
              title: 'ПОБЕДА!',
              imageUrl: 'https://www.scribbler.com/Images/Product/Default/large/GO1040SCR.jpg',
              imageWidth: 600,
              imageHeight: 400,
              imageAlt: 'Победа',
            })
        }
    }

}