import { Router } from "express";
import { validateCar } from "../validators/carValidator.js";

const router = Router();
const carsList = [];

router.get('/', (req, res) => {
    return res.json(carsList);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    if(Number.isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    if (carsList[id] === undefined) {
        return res.status(404).json({ error: 'Carro não encontrado' });
    }

    return res.json(carsList[id]);
});

router.post('/', (req, res) => {
    const error = validateCar(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    const { brand, model, year, electric, manufacturerSite } = req.body;
    const newCar = { brand, model, year, electric, manufacturerSite };
    carsList.push(newCar);
    
    return res.status(201).json(newCar);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const car = carsList[id];
    if (car === undefined) {
        return res.status(404).json({ error: 'Carro não encontrado' });
    }

    const error = validateCar(req.body, { partial: true });
    if (error) {
        return res.status(400).send(error);
    }

    const { brand, model, year, electric, manufacturerSite } = req.body;

    if (brand !== undefined) {
        car.brand = brand;
    }

    if (model !== undefined) {
        car.model = model;
    }    

    if (year !== undefined) {
        car.year = year;
    }

    if (electric !== undefined) {
        car.electric = electric;
    }

    if (manufacturerSite !== undefined) {
        car.manufacturerSite = manufacturerSite;
    }

    return res.status(200).json(car);
});

router.delete('/:id', (req, res) =>{
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const car = carsList[id];
    if (car === undefined) {
        return res.status(404).json({ error: 'Carro não encontrado'});
    }

    const removedCar = carsList.splice(id, 1);

    return res.status(200).json(removedCar[0]);
})

export { router };