var sesiones = {
    sesion1:{
        id: 1,
        nombre:"Ariel Alejandro",        
        apellido:"Zarate Tanta",
        email:"abc@gmail.com",
        clave:"tecsup2021",
        userdata:"Az"
    },
    sesion2:{
        id: 2,
        nombre:"Noe Jhon",
        apellido:"Sierra Sotelo",
        email:"zab@gmail.com",
        clave:"trafalgar",        
        userdata:"Ns"        
    }
}

var emails = {
    correo1:{
        id: 1,
        email:"abc@gmail.com"
    },
    correo2:{
        id: 2,
        email:"zab@gmail.com"
    }
}

export const index = (req, res) => {
    console.log("--->Lista de usuarios<--- \n" + JSON.stringify(sesiones,null,4));
    res.end("Lista de usuarios \n" + JSON.stringify(sesiones, null, 4));
};

export const login = (req, res) => {
    const { email, clave } = req.body;
    res.json({
        data: {
            type: "login",
            email,
            clave,
        },
    });
    console.log("---> Logueado Correctamente<--- \n" + "Email: " + email);
};

export const signup = (req, res) => {    
    var n_sesion = req.body;
    sesiones["sesion" + n_sesion.id] = n_sesion;
    console.log("--> Registrado Correctamente <--- \n" + JSON.stringify(sesiones,null,4));
    res.end("Post hecho Correctamente: \n" + JSON.stringify(n_sesion, null, 4));

};

export const showuser = (req, res) => {
    var sesion = sesiones["sesion" + req.params.id];
    console.log("--->Encuentra un usuario<--- \n" + JSON.stringify(sesion,null,4));
    res.end("Encontrando al usuario \n" + JSON.stringify(sesion, null, 4));
};

export const reset = (req, res) => {
    var email = req.body;
    emails["correo: " + email.id] = email;
    console.log("--> Registrado Correctamente <--- \n" + JSON.stringify(emails,null,4));
    res.end("Post hecho Correctamente: \n" + JSON.stringify(email, null, 4));
};

export const update = (req, res) => {
    var id = parseInt(req.params.id);
    var reset = req.body;
    if(sesiones["sesion" + id] != null){
        sesiones["sesion" + id] = reset;
        console.log("--->Reseteo hecho, sesion<--- \n" + JSON.stringify(sesiones,null,4));
        res.end("Reseteo hecho \n" + JSON.stringify(reset, null, 4));
    }else{
        res.end("No existe la sesion\n" + JSON.stringify(reset, null, 4));
    }
};

export const deletear = (req, res) => {
    var eliminar = sesiones["sesion" + req.params.id];
    delete sesiones["sesion" + req.params.id];
    console.log("--->Lista luego de la eliminacion<--- \n" + JSON.stringify(sesiones,null,4));
    res.end("Usuario eliminado \n" + JSON.stringify(eliminar, null, 4));
};