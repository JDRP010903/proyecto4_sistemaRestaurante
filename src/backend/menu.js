import { db } from "./db"; 



const uploadMenu = () => {
    db.collection('menu').doc('mainMenu').set(menuItems)
        .then(() => {
            console.log('Menú subido con éxito');
        })
        .catch((error) => {
            console.error('Error al subir el menú:', error);
        });
};

