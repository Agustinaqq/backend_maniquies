const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let inventarioSimulado = [
    { id_maniqui: 1, nombre_modelo: 'Slim Modificado', estado: 'Vendido', materiales: 'Plástico', colores: 'Blanco' },
    { id_maniqui: 2, nombre_modelo: 'Modelo Muscular M2', estado: 'Disponible', materiales: 'Fibra de Vidrio', colores: 'Negro' },
    { id_maniqui: 3, nombre_modelo: 'Modelo Infantil K3', estado: 'Disponible', materiales: 'Plástico', colores: 'Piel' }
];

app.get('/', (req, res) => {
    res.json({ mensaje: "API Backend de Maniquíes" });
});

app.get('/maniquies', (req, res) => {
    res.json(inventarioSimulado);
});

app.post('/maniquies', (req, res) => {
    const { nombre_modelo, estado, material, color } = req.body;
    
    if (!nombre_modelo || !estado || !material || !color) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const nuevoManiqui = {
        id_maniqui: inventarioSimulado.length + 1,
        nombre_modelo,
        estado,
        materiales: material,
        colores: color
    };

    inventarioSimulado.push(nuevoManiqui);
    res.status(201).json({ mensaje: 'Maniquí creado con éxito', dato: nuevoManiqui });
});

app.delete('/maniquies/:id', (req, res) => {
    const { id } = req.params;
    const index = inventarioSimulado.findIndex(m => m.id_maniqui === parseInt(id));
    
    if (index === -1) {
        return res.status(404).json({ mensaje: 'No encontrado' });
    }
    
    inventarioSimulado.splice(index, 1);
    res.json({ mensaje: 'Maniquí eliminado del array' });
});

app.listen(PORT, () => {
    console.log(` Server corriendo en http://localhost:${PORT}`);
});