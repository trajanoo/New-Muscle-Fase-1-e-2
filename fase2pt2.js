
const dialog = document.querySelector("dialog")

function abrirDialog(){
    dialog.showModal();
}
function fecharDialog(){
    dialog.close()
}

document.addEventListener('DOMContentLoaded', (event) => {
    const tissue = document.getElementById('tissue');
    const muscleZone = document.getElementById('muscle-zone');
    const checkMuscleButton = document.getElementById('check-muscle');
    const messageMuscle = document.getElementById('message-muscle');

    tissue.addEventListener('dragstart', dragStart);
    muscleZone.addEventListener('dragover', dragOver);
    muscleZone.addEventListener('drop', dropInMuscle);

    checkMuscleButton.addEventListener('click', checkMuscle);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dropInMuscle(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (!muscleZone.contains(element)) {
            muscleZone.appendChild(element);
        }
    }

    function checkMuscle() {
        const items = muscleZone.querySelectorAll('.component');
        if (items.length === 1) {
            messageMuscle.textContent = 'Ótimo! Você implantou o tecido no músculo com sucesso.';
            messageMuscle.style.color = 'green';
        } else {
            messageMuscle.textContent = 'O tecido ainda não está completo. Crie o tecido primeiro antes de implantá-lo.';
            messageMuscle.style.color = 'red';
        }
    }
});
