import { types } from "../types/types";

const initialState = [
    {
        name: 'El titulo',
        fecha: new Date(),
        body: '<h1>Descripcion</h1> <img src="https://res.cloudinary.com/dsjubfgpw/image/upload/v1617637443/WhatsApp_Image_2021-03-09_at_12.05.21_PM_12_a3779o.jpg" class="img11" />',
        descripcion: 'Esta es la descripcion del articulo'
    },
    {
        name: 'El titulo2',
        fecha: new Date(),
        body: '<h1>Descripcion</h1>',
        descripcion: 'Esta es la descripcion del articulo'
    }
];

export const articulosReducers = (state = initialState, action) => {
    switch(action.type){
        case types.loadArticles:
            return [...state, action.payload];

        default:
            return state;
    }
}