import Swal from "sweetalert2"

const swalert = async (msg, icon, timer) => {
    return Swal.fire({
        title : msg,
        icon  : icon || 'info',
        showConfirmButton : false,
        background : 'var(--primary)',
        customClass: { container: 'swalert' },
        color: '#eee',
        timer : timer || false
    })
}

export default swalert;