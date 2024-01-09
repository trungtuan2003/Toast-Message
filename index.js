function toast ({
    title = '', 
    message = '',
    type = 'info',   
    duration = 3000
}) {
    const main = document.getElementById("toast");
    
   


    if(main) {
        const toast = document.createElement("div");

        const timeDisappear = 1000;
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + timeDisappear)
        
        toast.onclick = (e) => {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);

            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info : 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation'
        }

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

       
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideIn ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <div class="toast__title">
                        ${title}
                    </div>
                    <div class="toast__msg">
                        ${message}
                    </div>
                </div> 
                <div class="toast__close";">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `;
        main.appendChild(toast);

        
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Thanh cong',
        type: 'success',
        duration: 3000
    });
} 

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'That bai',
        type: 'warning',
        duration: 3000
    });
}