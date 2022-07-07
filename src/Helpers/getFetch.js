let productos = [
    { id: "1", nombre: "Takis Fuego", peso: "56 g", precio: "15", imagen: "https://i.ibb.co/hsPzSch/Botana-Barcel-Takis-fuego-56-g.webp", categoria: "chisitos" },
    { id: "2", nombre: "Cheetos Colmillo", peso: "51 g", precio: "15", imagen: "https://i.ibb.co/kBRdn6G/Botana-Cheetos-colmillos-51-g.webp", categoria: "chisitos" },
    { id: "3", nombre: "Cheetos Mix", peso: "70 g", precio: "20", imagen: "https://i.ibb.co/t8Nm2KW/Botana-Cheetos-Mix-70-g.webp", categoria: "chisitos" },
    { id: "4", nombre: "Cheetos", peso: "110 g", precio: "25", imagen: "https://i.ibb.co/9hXt8mN/Botana-Cheetos-Poffs-sabor-queso-110-g.webp", categoria: "chisitos" },
    { id: "5", nombre: "Cheetos Poffs", peso: "45 g", precio: "12", imagen: "https://i.ibb.co/n30cJdy/Cheetos-poffs-40gr.webp", categoria: "chisitos" },
    { id: "6", nombre: "Cheetos Torciditos", peso: "370 g", precio: "32", imagen: "https://i.ibb.co/ZYSh6V3/Botana-Cheetos-Torciditos-sabor-queso-y-chile-370-g.webp", categoria: "chisitos" },
    { id: "7", nombre: "Cheetos Torciditos", peso: "240 g", precio: "28", imagen: "https://i.ibb.co/RzJfWjk/Cheetos-torciditos-sabor-queso-y-chile-240-g.jpg", categoria: "chisitos" },
    { id: "8", nombre: "Cheetos extra Flamin Hot", peso: "240 g", precio: "28", imagen: "https://i.ibb.co/MMzdTjb/Cheetos-xtra-flamin-hot-sabor-chile-y-lim-n-240-g.webp", categoria: "chisitos" },
    { id: "9", nombre: "Cheetos Cheddar Jalapeño", peso: "240 g", precio: "28", imagen: "https://i.ibb.co/7zjfs64/CHEETOS-Crunchy-Cheddar-Jalape-o-Cheese-Flavored-Snacks.webp", categoria: "chisitos" },
    { id: "10", nombre: "Paketaxo Mezcladito", peso: "280 g", precio: "22", imagen: "https://i.ibb.co/vVxGPxS/Paketaxo-Mezcladito-280g.jpg", categoria: "papaFritas" },
    { id: "11", nombre: "Paketaxo Quexo", peso: "215 g", precio: "20", imagen: "https://i.ibb.co/pXJwPZd/Paketaxo-Quexo-215g.jpg", categoria: "papaFritas" },
    { id: "12", nombre: "Doritos", peso: "280 g", precio: "22", imagen: "https://i.ibb.co/B2c1bWx/Doritos-Nacho-Cheese-276-4-G.webp", categoria: "papaFritas" },
    { id: "13", nombre: "Doritos", peso: "155 g", precio: "18", imagen: "https://i.ibb.co/x5yhFGX/DORITOS-NACHOS-GRANDES-155-GRS.webp", categoria: "papaFritas" },
    { id: "14", nombre: "Sabritas Crema y Especias", peso: "170 g", precio: "20", imagen: "https://i.ibb.co/Vj2Sxrd/Papas-Fritas-Sabor-Crema-y-Especias-paquete-170g.webp", categoria: "papaFritas" },
    { id: "15", nombre: "Sabritas Limon", peso: "160 g", precio: "16", imagen: "https://i.ibb.co/QnvcdB3/Papas-Sabritas-lim-n-160-g.webp", categoria: "papaFritas" },
    { id: "16", nombre: "Sabritas Stax", peso: "40 g", precio: "15", imagen: "https://i.ibb.co/dMsvgF8/Papas-Sabritas-Stax-crema-y-cebolla-40-g.webp", categoria: "papaFritas" },
    { id: "17", nombre: "Sabritas Stax", peso: "155 g", precio: "20", imagen: "https://i.ibb.co/SKVPW75/Papas-Sabritas-Stax-Crema-Y-Cebolla-155-9-G.webp", categoria: "papaFritas" },
    { id: "18", nombre: "Pringles Crema y Cebolla", peso: "124 g", precio: "22", imagen: "https://i.ibb.co/nBZcvgq/PRINGLES-CREMA-CEBOLLA-124-G.webp", categoria: "papaFritas" },
    { id: "19", nombre: "Ruffles", peso: "185 g", precio: "22", imagen: "https://i.ibb.co/SNhNW8k/Ruffles-original-con-sal-185-g.jpg", categoria: "papaFritas" },
    { id: "20", nombre: "Ruffles Queso", peso: "185 g", precio: "24", imagen: "https://i.ibb.co/xJ18wTH/Papas-Ruffles-sabor-queso-185-g.jpg", categoria: "papaFritas" },
    { id: "21", nombre: "Sabritas Original", peso: "18 g", precio: "12", imagen: "https://i.ibb.co/nL6yp4w/Sabritas-original-18-g.webp", categoria: "papaFritas" },
    { id: "22", nombre: "Sabritas Original", peso: "57 g", precio: "16", imagen: "https://i.ibb.co/Ln7rd7N/Sabritas-Original-57-g.webp", categoria: "papaFritas" },
    { id: "23", nombre: "Sabritas Original", peso: "160 g", precio: "12", imagen: "https://i.ibb.co/9gqjvd6/Sabritas-Originaloriginal160g.webp", categoria: "papaFritas" },
    { id: "24", nombre: "Churrumais con Limoncito", peso: "185 g", precio: "18", imagen: "https://i.ibb.co/d41WwpB/Botana-Churrumais-Sabritas-con-limoncito-185-g.webp", categoria: "palitos" },
    { id: "25", nombre: "Churrumais con Limoncito", peso: "185 g", precio: "18", imagen: "https://i.ibb.co/d41WwpB/Botana-Churrumais-Sabritas-con-limoncito-185-g.webp", categoria: "palitos" },
    { id: "26", nombre: "Pep sabor Panceta", peso: "135 g", precio: "16", imagen: "https://i.ibb.co/GRT3FQM/PALITOS-SALADOS-PEP-COM-N-X-135-GRS.jpg", categoria: "palitos" },
    { id: "27", nombre: "Dimax Palitos Salados", peso: "75 g", precio: "10", imagen: "https://i.ibb.co/ck4cLrT/palito-salado-sin-gluten.jpg", categoria: "palitos" },
    { id: "28", nombre: "Pehuamar Palitos sabor Queso", peso: "90 g", precio: "14", imagen: "https://i.ibb.co/SyTCK8b/palito-salado-de-queso-90g.jpg", categoria: "palitos" },
    { id: "29", nombre: "Pehuamar Palitos sabor Queso", peso: "180 g", precio: "18", imagen: "https://i.ibb.co/QY0C6qQ/Pehuamar-Palitos-Salados-de-Queso-180-g-Cheese-Sticks.jpg", categoria: "palitos" },
    { id: "30", nombre: "Autenta Pretzels", peso: "1 kg", precio: "50", imagen: "https://i.ibb.co/rvsSMVX/Pretzels-Galletas-Horneadas-Saladas-Autenta-Foods-1kg.webp", categoria: "palitos" },
    { id: "31", nombre: "Arcor caramelo miel", peso: "1", precio: "1", imagen: "https://i.ibb.co/kG9YtFX/Arcor-Miel-Lleno-De-Caramelo-Duro-Envuelto-Por-Sweetgourmet.webp", categoria: "golosinas" },
    { id: "32", nombre: "Arcor Chocolate Relleno de Menta", peso: "1", precio: "1", imagen: "https://i.ibb.co/yFTtCtm/Candy-Shop-Arcor-Chocolate-Relleno-De-Menta-Hard-Candy-6-L.webp", categoria: "golosinas" },
    { id: "33", nombre: "Selz Soda", peso: "420 g", precio: "40", imagen: "https://i.ibb.co/SJQ3BSP/Caramelo-Selz-Soda-Efervescente-420-Gr.jpg", categoria: "golosinas" },
    { id: "34", nombre: "Bon o Bon", peso: "1", precio: "2", imagen: "https://i.ibb.co/vPfPrNQ/Chocolate-Bon-O-Bon-Amarillo-1-Kg.webp", categoria: "golosinas" },
    { id: "35", nombre: "Pulparindo", peso: "280 g", precio: "25", imagen: "https://i.ibb.co/Q9D59FX/De-La-Rosa-Pulparindo-De-Tamarindo-Natural.jpg", categoria: "golosinas" },
    { id: "36", nombre: "Vero Mix", peso: "20", precio: "24", imagen: "https://i.ibb.co/wJWWCzb/Dulces-para-pi-ata-Surtido-de-dulces-Paletas-de-Dulce-Vero-Paquete-Vero-Mix-Dulce-Club-20-paletas-du.jpg", categoria: "golosinas" },
    { id: "37", nombre: "Vero Pica Fresa", peso: "600 g", precio: "50", imagen: "https://i.ibb.co/D5MJkD8/Dulces-Vero-Pica-Fresa-Gomitas-con-chile-dulces-mexicanos-100-unidades-600-gramos.jpg", categoria: "golosinas" },
    { id: "38", nombre: "Panditas Clasico", peso: "1 kg", precio: "65", imagen: "https://i.ibb.co/W2hZSSQ/Gen-rico-Dulces-Gomitas-Panditas-Clasicas-Dulcigomas-1-Kg.jpg", categoria: "golosinas" },
    { id: "39", nombre: "M&Ms", peso: "1757 g", precio: "110", imagen: "https://i.ibb.co/f4GTYR0/M-M-S-Tarro-para-dulces-de-leche-edici-n-limitada-chocolate-66-onzas.jpg", categoria: "golosinas" },
    { id: "40", nombre: "MilkyWay Mini", peso: "420 g", precio: "70", imagen: "https://i.ibb.co/Tk0Scgw/Milky-Way-Mini-442.jpg", categoria: "golosinas" },
    { id: "41", nombre: "Rebanaditas", peso: "640 g", precio: "65", imagen: "https://i.ibb.co/pWn537n/Rebanadita-Sand-a-Con-Chile-Paleta-Sand-a-con-chile.jpg", categoria: "golosinas" },
    { id: "42", nombre: "Red Vines", peso: "1588 g", precio: "120", imagen: "https://i.ibb.co/KNHFNLJ/Red-Vines-Original-Rojo.jpg", categoria: "golosinas" },
    { id: "43", nombre: "Skittles Original", peso: "220 g", precio: "18", imagen: "https://i.ibb.co/7SLYwvX/Skittles-dulces-caramelo-suave-original-10-piezas-de-22g-220g.jpg", categoria: "golosinas" },
    { id: "44", nombre: "Sour Patch Kids", peso: "230 g", precio: "16", imagen: "https://i.ibb.co/XYQTKkF/Sour-Patch-Kids-Candy-Original-1-9-Pound-Bag.jpg", categoria: "golosinas" },
    { id: "45", nombre: "Monster Energy", peso: "473 ml", precio: "15", imagen: "https://i.ibb.co/kXqh2ZQ/Bebida-energ-tica-Monster-473ml.webp", categoria: "gaseosas" },
    { id: "46", nombre: "Coca-Cola", peso: "355 ml", precio: "11", imagen: "https://i.ibb.co/1vMnh6L/Coca-Cola-Original.jpg", categoria: "gaseosas" },
    { id: "47", nombre: "Coca-Cola sin Azucar", peso: "235 ml", precio: "10", imagen: "https://i.ibb.co/w64F7Rv/Coca-Cola-Sin-Az-car.jpg", categoria: "gaseosas" },
    { id: "48", nombre: "Fanta Berry", peso: "355 ml", precio: "12", imagen: "https://i.ibb.co/fnjQJkm/Fanta-Berry-Lata-355.webp", categoria: "gaseosas" },
    { id: "49", nombre: "Fanta Strawberry", peso: "355 ms", precio: "12", imagen: "https://i.ibb.co/HnMsSxG/Fanta-Pi-a-12-Pack-355ml.webp", categoria: "gaseosas" },
    { id: "50", nombre: "Fresca Toronja", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/kxXsP7V/Fresca-600-ml.webp", categoria: "gaseosas" },
    { id: "51", nombre: "Fresca Toronja Lata", peso: "355 ml", precio: "12", imagen: "https://i.ibb.co/GkprQs0/Fresca-Refresco-Sabor-Toronja-Fresca-Lata-355ml-copia.jpg", categoria: "gaseosas" },
    { id: "52", nombre: "Fanta Naranja", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/pJz6CBB/Refresco-Mirinda-sabor-naranja-botella-de-600-ml.webp", categoria: "gaseosas" },
    { id: "53", nombre: "Mundet Manzana", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/TkQB5qq/Refresco-Sidral-Mundet-sabor-manzana-de-600-ml.webp", categoria: "gaseosas" },
    { id: "54", nombre: "Sprite Lima-Limon", peso: "2.5 l", precio: "26", imagen: "https://i.ibb.co/zS2x7Bp/Refresco-Sprite-sabor-lima-lim-n-de-2-5-l.webp", categoria: "gaseosas" },
    { id: "55", nombre: "Squirt Toronja", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/fNkwMFN/Refresco-Squirt-sabor-toronja-600-ml.webp", categoria: "gaseosas" },
    { id: "56", nombre: "Sprite Lima-Limon lata", peso: "355 ml", precio: "12", imagen: "https://i.ibb.co/fNkwMFN/Refresco-Squirt-sabor-toronja-600-ml.webp", categoria: "gaseosas" },
    { id: "57", nombre: "Squirt Toronja", peso: "2.5 l", precio: "28", imagen: "https://i.ibb.co/BszXYh6/Squirt-9-Pack-2-lts.jpg", categoria: "gaseosas" },
    { id: "58", nombre: "Squirt Toronja lata", peso: "355 ml", precio: "14", imagen: "https://i.ibb.co/6yK8vVY/Squirt-Refresco-con-Sabor-a-Toronja.jpg", categoria: "gaseosas" },
    { id: "59", nombre: "Fernet Branca", peso: "750 ml", precio: "400", imagen: "https://i.ibb.co/G2DYFf9/Fernet-Branca.jpg", categoria: "gaseosas" },
    { id: "60", nombre: "Fernet Branca", peso: "1 L", precio: "600", imagen: "https://i.ibb.co/G2DYFf9/Fernet-Branca.jpg", categoria: "gaseosas" }
]

export const getFetch = new Promise((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    } else {
        reject("not found 404")
    }
})