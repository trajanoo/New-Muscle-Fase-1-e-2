const dialog = document.querySelector("dialog")

function abrirDialog(){
    dialog.showModal();
}
function fecharDialog(){
    dialog.close()
}

document.addEventListener('DOMContentLoaded', (event) => {
    const components = document.querySelectorAll('.component');
    const assemblyZone = document.getElementById('assembly-zone');
    const checkAssemblyButton = document.getElementById('check-assembly');
    const messageAssembly = document.getElementById('message-assembly');

    components.forEach(component => {
        component.addEventListener('dragstart', dragStart);
    });

    assemblyZone.addEventListener('dragover', dragOver);
    assemblyZone.addEventListener('drop', dropInAssembly);

    checkAssemblyButton.addEventListener('click', checkAssembly);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dropInAssembly(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (!assemblyZone.contains(element)) {
            assemblyZone.appendChild(element);
        }
    }

    function checkAssembly() {
        const items = assemblyZone.querySelectorAll('.component');
        if (items.length === 4) {
            messageAssembly.textContent = 'Parabéns! Você criou um tecido muscular cardíaco artificial de alta qualidade.';
            messageAssembly.style.color = 'green';
            setTimeout(() => {
                window.location.href = 'fase1pt2.html';
            }, 2000);
        } else {
            messageAssembly.textContent = 'Por favor, adicione todas as células necessárias para criar o tecido muscular.';
            messageAssembly.style.color = 'red';
        }
        
        
    }
});

