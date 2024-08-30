function validar(){
    var ElNombre=document.MiForm.Nom.value;
    var ElApellido=document.MiForm.Ape.value;
    var opciones = document.getElementsByName("ElGenero");
    var seleccion = false;

    if(ElNombre.length==0)
    {
        Swal.fire({
                    title: '¡Error!',
                    text: 'Campo nombre es obligatorio',
                    icon: 'error',
                    confirmButtonText: '¡Aceptar!'
                });
        return false;
    }
    else
    {
        if(ElApellido.length==0){
            Swal.fire({
                title: '¡Error!',
                text: 'Campo apellido es obligatorio',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        return false;
    }
    else
    {
    for(var i=0; i<opciones.length; i++) {    
        if(opciones[i].checked) {
            seleccion = true;
            Swal.fire({
                title: 'Access',
                text: 'Registrado',
                icon: 'Access',
                confirmButtonText: '¡Aceptar!'
            });
            break;
            }
            }
            
        if(!seleccion){
            Swal.fire({
                title: '¡Error!',
                text: 'Debe seleccionar genero',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
    return false;
    }
    }
 

}
}
