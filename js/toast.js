function toast ({
    title = "",
    message = "",
    duration = 3000     
}) {
    const main = document.getElementById("toast");
    if(main) {

        const delay = (duration/1000).toFixed(2);
        const toast = document.createElement("div");
        toast.classList.add('toast', `toast--success`);
        toast.style.animation = `slideInTop ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
        <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
           <p class="toast__msg">${message}</p>
        </div>
        `;
        main.appendChild(toast);
        
        //auto remove toast
        const removeAuto = setTimeout(function ()  {
            main.removeChild(toast);
        }, duration + 1000);
    }
}

function showSuccessToast() {
    toast ({
    title: 'Thành công',
    message: 'Thêm sản phẩm thành công',
    duration:  1000,
});
}

export { showSuccessToast };