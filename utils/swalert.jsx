import Swal from "sweetalert2"

const swalert = (msg, icon) => {
    Swal.fire({
        title : msg,
        icon  : icon || 'info',
        showConfirmButton : false,
        background : 'var(--primary)',
        customClass: { container: 'swalert' },
        color: '#eee'
    })
}

export default swalert;