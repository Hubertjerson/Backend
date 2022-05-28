const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.txt");

const main = async () => {
    const id1 = await contenedor.save({
        title: "Regla",
        price: 75.66
    });
    console.log(id1);


    //const object2 = await contenedor.getById(20);
    //console.log(object2);

    //await contenedor.deleteById(20);

    //const allCurrentObjects = await contenedor.getAll();
    //console.log(allCurrentObjects);

    await contenedor.deleteAll();
};

main();