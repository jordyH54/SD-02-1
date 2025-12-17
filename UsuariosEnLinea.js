let usuarios = ["jordy", "Jorge", "Fernando"];
let mensaje = "";

if (usuarios.length > 1) {
    mensaje = usuarios[0] + " y otros están en línea";
} else {
    mensaje = usuarios[0] + " está en línea";
}

console.log(mensaje);
