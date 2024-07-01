function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Successful connection',
        type: "success",
        duration: 5000
    });
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Errors detected',
        type: "error",
        duration: 5000
    });
}

function showWarnError() {
    toast({
        title: 'Warning',
        message: 'Something is not right',
        type: "warning",
        duration: 5000
    });
}




function toast({title ='', message='', type ='success', duration=3000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast',`toast--${type}`);

        const icons = {
            success: 'fa-solid fa-check',
            info: 'fa-solid fa-info',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-triangle-exclamation',
        };

        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
          }, duration + 1000);
        
        toast.onclick = function(e) {
            if(e.target.closest(".toast__close")){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        
        const icon = icons[`${type}`];
        const delay = (duration/1000).toFixed(2);

        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = 
            `<div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>`;

        main.appendChild(toast);
    }

}