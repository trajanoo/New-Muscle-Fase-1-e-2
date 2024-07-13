const dialog = document.querySelector("dialog")

function abrirDialog(){
    dialog.showModal();
}
function fecharDialog(){
    dialog.close()
}

document.addEventListener('DOMContentLoaded', (event) => {
    const tissue = document.getElementById('tissue');
    const heartZone = document.getElementById('heart-zone');
    const checkHeartButton = document.getElementById('check-heart');
    const messageHeart = document.getElementById('message-heart');

    tissue.addEventListener('dragstart', dragStart);
    heartZone.addEventListener('dragover', dragOver);
    heartZone.addEventListener('drop', dropInHeart);

    checkHeartButton.addEventListener('click', checkHeart);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dropInHeart(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (!heartZone.contains(element)) {
            heartZone.appendChild(element);
        }
    }

    function checkHeart() {
        const items = heartZone.querySelectorAll('.component');
        if (items.length === 1) {
            messageHeart.textContent = 'Ótimo! Você implantou o tecido no coração com sucesso.';
            messageHeart.style.color = 'green';
        } else {
            messageHeart.textContent = 'O tecido ainda não está completo. Crie o tecido primeiro antes de implantá-lo.';
            messageHeart.style.color = 'red';
        }
        
        setTimeout(() => {
            location.href = 'explicação2.html';
        }, 2000)
    }
});