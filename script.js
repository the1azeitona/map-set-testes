function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin') {
            admins.push(key)
        } 
    }
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Matheus', 'Admin');
usuarios.set('Eduardo', 'Usuario');
usuarios.set('Vitoria', 'Admin');

console.log(getAdmins(usuarios));chmod u+x app.js