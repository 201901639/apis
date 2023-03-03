let tradicional = 5;
console.log(tradicional);

let esperarPromesa = async () => {
    let promesa = await new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(5);
        }, 1000);
    });
    console.log(promesa*tradicional);
}

esperarPromesa();

let llamarAGithub = async () => {
    let peticion = await fetch("https://api.github.com/users/201901639", {
        method: "GET",
    });
    if (peticion.status === 200){
        let datos = await peticion.json();
        console.log(datos);
        console.log(datos.public_repos);
    }
};

llamarAGithub();