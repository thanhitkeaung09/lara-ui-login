import * as bootstrap from "bootstrap";
import Swal from 'sweetalert2'
import ScrollReveal from "scrollreveal";

let modalControl = document.getElementById("modalControl");
let check = document.getElementById("check");

modalControl.addEventListener("click",function (){
    // console.log("san kyi tar")
    let exapleModal = new bootstrap.Modal(document.getElementById("exampleModal"),{
        backdrop : 'static'
    });
    exapleModal.show();
})

check.addEventListener("click",function (){
    // console.log("check")
    Swal.fire({
        title: 'သေချာလား',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'info',
                title: 'Signed in successfully'
            })
        }
        else{
            console.log(false)
        }
    })
})

ScrollReveal().reveal(".list-group-item",{
    distance: "70px",
    delay : 500,
    origin : "top",
    interval : 200,
    duration : 1000,
    easing : 'ease-out',
    reset : true,
    cleanup : true
})
