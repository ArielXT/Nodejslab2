export const index = (req, res) => {
    res.json({
        data: "test success",
    });
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
};

export const signup = (req, res) => {
    const { nombre, apellido, email, clave } = req.body;
    res.json({
        data: {
            type: "signup",
            nombre,
            apellido,
            email,
            clave,
        },
    });
};

export const showuser = (req, res) => {
    res.json({
        data: {
            type: "showuser",
            id: 737378625,
            show: "Ariel Zarate",
        },
    });
};

export const reset = (req, res) => {
    const { email, clave } = req.body;
    res.json({
        data: {
            type: "reset",
            email,
            clave,

        },
    });
};

export const update = (req, res) => {
    const { id, userdata } = req.body;
    res.json({
        data: {
            type: "update",
            id,
            userdata,
        },
    });
};

export const deletear = (req, res) => {
    const { id } = req.body;
    res.json({
        data: {
            type: "deletear",
            id,
        },
    });
};