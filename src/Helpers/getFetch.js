let productos = [
    { id: "1", nombre: "Takis Fuego", peso: "56 g", precio: "15", imagen: "https://i.ibb.co/hsPzSch/Botana-Barcel-Takis-fuego-56-g.webp" },
    { id: "2", nombre: "Cheetos Colmillo", peso: "51 g", precio: "15", imagen: "https://i.ibb.co/kBRdn6G/Botana-Cheetos-colmillos-51-g.webp" },
    { id: "3", nombre: "Cheetos Mix", peso: "70 g", precio: "20", imagen: "https://i.ibb.co/t8Nm2KW/Botana-Cheetos-Mix-70-g.webp" },
    { id: "4", nombre: "Cheetos", peso: "110 g", precio: "25", imagen: "https://i.ibb.co/9hXt8mN/Botana-Cheetos-Poffs-sabor-queso-110-g.webp" },
    { id: "5", nombre: "Cheetos Poffs", peso: "45 g", precio: "12", imagen: "https://i.ibb.co/n30cJdy/Cheetos-poffs-40gr.webp" },
    { id: "6", nombre: "Cheetos Torciditos", peso: "370 g", precio: "32", imagen: "https://i.ibb.co/ZYSh6V3/Botana-Cheetos-Torciditos-sabor-queso-y-chile-370-g.webp" },
    { id: "7", nombre: "Cheetos Torciditos", peso: "240 g", precio: "28", imagen: "https://i.ibb.co/RzJfWjk/Cheetos-torciditos-sabor-queso-y-chile-240-g.jpg" },
    { id: "8", nombre: "Cheetos extra Flamin Hot", peso: "240 g", precio: "28", imagen: "https://i.ibb.co/MMzdTjb/Cheetos-xtra-flamin-hot-sabor-chile-y-lim-n-240-g.webp" },
    { id: "9", nombre: "Cheetos Cheddar Jalapeño", peso: "240 g", precio: "28", imagen: "https://i.ibb.co/7zjfs64/CHEETOS-Crunchy-Cheddar-Jalape-o-Cheese-Flavored-Snacks.webp" },
    { id: "10", nombre: "Paketaxo Mezcladito", peso: "280 g", precio: "22", imagen: "https://i.ibb.co/vVxGPxS/Paketaxo-Mezcladito-280g.jpg" },
    { id: "11", nombre: "Paketaxo Quexo", peso: "215 g", precio: "20", imagen: "https://i.ibb.co/pXJwPZd/Paketaxo-Quexo-215g.jpg" },
    { id: "12", nombre: "Doritos", peso: "280 g", precio: "22", imagen: "https://i.ibb.co/B2c1bWx/Doritos-Nacho-Cheese-276-4-G.webp" },
    { id: "13", nombre: "Doritos", peso: "155 g", precio: "18", imagen: "https://i.ibb.co/x5yhFGX/DORITOS-NACHOS-GRANDES-155-GRS.webp" },
    { id: "14", nombre: "Sabritas Crema y Especias", peso: "170 g", precio: "20", imagen: "https://i.ibb.co/Vj2Sxrd/Papas-Fritas-Sabor-Crema-y-Especias-paquete-170g.webp" },
    { id: "15", nombre: "Sabritas Limon", peso: "160 g", precio: "16", imagen: "https://i.ibb.co/QnvcdB3/Papas-Sabritas-lim-n-160-g.webp" },
    { id: "16", nombre: "Sabritas Stax", peso: "40 g", precio: "15", imagen: "https://i.ibb.co/dMsvgF8/Papas-Sabritas-Stax-crema-y-cebolla-40-g.webp" },
    { id: "17", nombre: "Sabritas Stax", peso: "155 g", precio: "20", imagen: "https://i.ibb.co/SKVPW75/Papas-Sabritas-Stax-Crema-Y-Cebolla-155-9-G.webp" },
    { id: "18", nombre: "Pringles Crema y Cebolla", peso: "124 g", precio: "22", imagen: "https://i.ibb.co/nBZcvgq/PRINGLES-CREMA-CEBOLLA-124-G.webp" },
    { id: "19", nombre: "Ruffles", peso: "185 g", precio: "22", imagen: "https://i.ibb.co/SNhNW8k/Ruffles-original-con-sal-185-g.jpg" },
    { id: "20", nombre: "Ruffles Queso", peso: "185 g", precio: "24", imagen: "https://i.ibb.co/xJ18wTH/Papas-Ruffles-sabor-queso-185-g.jpg" },
    { id: "21", nombre: "Sabritas Original", peso: "18 g", precio: "12", imagen: "https://i.ibb.co/nL6yp4w/Sabritas-original-18-g.webp" },
    { id: "22", nombre: "Sabritas Original", peso: "57 g", precio: "16", imagen: "https://i.ibb.co/Ln7rd7N/Sabritas-Original-57-g.webp" },
    { id: "23", nombre: "Sabritas Original", peso: "160 g", precio: "12", imagen: "https://i.ibb.co/9gqjvd6/Sabritas-Originaloriginal160g.webp" },
    { id: "24", nombre: "Churrumais con Limoncito", peso: "185 g", precio: "18", imagen: "https://i.ibb.co/d41WwpB/Botana-Churrumais-Sabritas-con-limoncito-185-g.webp" },
    { id: "25", nombre: "Churrumais con Limoncito", peso: "185 g", precio: "18", imagen: "https://i.ibb.co/d41WwpB/Botana-Churrumais-Sabritas-con-limoncito-185-g.webp" },
    { id: "26", nombre: "Pep sabor Panceta", peso: "135 g", precio: "16", imagen: "https://i.ibb.co/GRT3FQM/PALITOS-SALADOS-PEP-COM-N-X-135-GRS.jpg" },
    { id: "27", nombre: "Dimax Palitos Salados", peso: "75 g", precio: "10", imagen: "https://i.ibb.co/ck4cLrT/palito-salado-sin-gluten.jpg" },
    { id: "28", nombre: "Pehuamar Palitos sabor Queso", peso: "90 g", precio: "14", imagen: "https://i.ibb.co/SyTCK8b/palito-salado-de-queso-90g.jpg" },
    { id: "29", nombre: "Pehuamar Palitos sabor Queso", peso: "180 g", precio: "18", imagen: "https://i.ibb.co/QY0C6qQ/Pehuamar-Palitos-Salados-de-Queso-180-g-Cheese-Sticks.jpg" },
    { id: "30", nombre: "Autenta Pretzels", peso: "1 kg", precio: "50", imagen: "https://i.ibb.co/rvsSMVX/Pretzels-Galletas-Horneadas-Saladas-Autenta-Foods-1kg.webp" },
    { id: "31", nombre: "Arcor caramelo miel", peso: "1", precio: "1", imagen: "https://i.ibb.co/kG9YtFX/Arcor-Miel-Lleno-De-Caramelo-Duro-Envuelto-Por-Sweetgourmet.webp" },
    { id: "32", nombre: "Arcor Chocolate Relleno de Menta", peso: "1", precio: "1", imagen: "https://i.ibb.co/yFTtCtm/Candy-Shop-Arcor-Chocolate-Relleno-De-Menta-Hard-Candy-6-L.webp" },
    { id: "33", nombre: "Selz Soda", peso: "420 g", precio: "40", imagen: "https://i.ibb.co/SJQ3BSP/Caramelo-Selz-Soda-Efervescente-420-Gr.jpg" },
    { id: "34", nombre: "Bon o Bon", peso: "1", precio: "2", imagen: "https://i.ibb.co/vPfPrNQ/Chocolate-Bon-O-Bon-Amarillo-1-Kg.webp" },
    { id: "35", nombre: "Pulparindo", peso: "280 g", precio: "25", imagen: "https://i.ibb.co/Q9D59FX/De-La-Rosa-Pulparindo-De-Tamarindo-Natural.jpg" },
    { id: "36", nombre: "Vero Mix", peso: "20", precio: "24", imagen: "https://i.ibb.co/wJWWCzb/Dulces-para-pi-ata-Surtido-de-dulces-Paletas-de-Dulce-Vero-Paquete-Vero-Mix-Dulce-Club-20-paletas-du.jpg" },
    { id: "37", nombre: "Vero Pica Fresa", peso: "600 g", precio: "50", imagen: "https://i.ibb.co/D5MJkD8/Dulces-Vero-Pica-Fresa-Gomitas-con-chile-dulces-mexicanos-100-unidades-600-gramos.jpg" },
    { id: "38", nombre: "Panditas Clasico", peso: "1 kg", precio: "65", imagen: "https://i.ibb.co/W2hZSSQ/Gen-rico-Dulces-Gomitas-Panditas-Clasicas-Dulcigomas-1-Kg.jpg" },
    { id: "39", nombre: "M&Ms", peso: "1757 g", precio: "110", imagen: "https://i.ibb.co/f4GTYR0/M-M-S-Tarro-para-dulces-de-leche-edici-n-limitada-chocolate-66-onzas.jpg" },
    { id: "40", nombre: "MilkyWay Mini", peso: "420 g", precio: "70", imagen: "https://i.ibb.co/Tk0Scgw/Milky-Way-Mini-442.jpg" },
    { id: "41", nombre: "Rebanaditas", peso: "640 g", precio: "65", imagen: "https://i.ibb.co/pWn537n/Rebanadita-Sand-a-Con-Chile-Paleta-Sand-a-con-chile.jpg" },
    { id: "42", nombre: "Red Vines", peso: "1588 g", precio: "120", imagen: "https://i.ibb.co/KNHFNLJ/Red-Vines-Original-Rojo.jpg" },
    { id: "43", nombre: "Skittles Original", peso: "220 g", precio: "18", imagen: "https://i.ibb.co/7SLYwvX/Skittles-dulces-caramelo-suave-original-10-piezas-de-22g-220g.jpg" },
    { id: "44", nombre: "Sour Patch Kids", peso: "230 g", precio: "16", imagen: "https://i.ibb.co/XYQTKkF/Sour-Patch-Kids-Candy-Original-1-9-Pound-Bag.jpg" },
    { id: "45", nombre: "Monster Energy", peso: "473 ml", precio: "15", imagen: "https://i.ibb.co/kXqh2ZQ/Bebida-energ-tica-Monster-473ml.webp" },
    { id: "46", nombre: "Coca-Cola", peso: "355 ml", precio: "11", imagen: "https://i.ibb.co/1vMnh6L/Coca-Cola-Original.jpg" },
    { id: "47", nombre: "Coca-Cola sin Azucar", peso: "235 ml", precio: "10", imagen: "https://i.ibb.co/w64F7Rv/Coca-Cola-Sin-Az-car.jpg" },
    { id: "48", nombre: "Fanta Berry", peso: "355 ml", precio: "12", imagen: "https://i.ibb.co/fnjQJkm/Fanta-Berry-Lata-355.webp" },
    { id: "49", nombre: "Fanta Strawberry", peso: "355 ms", precio: "12", imagen: "https://i.ibb.co/HnMsSxG/Fanta-Pi-a-12-Pack-355ml.webp" },
    { id: "50", nombre: "Fresca Toronja", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/kxXsP7V/Fresca-600-ml.webp" },
    { id: "51", nombre: "Fresca Toronja Lata", peso: "355 ml", precio: "12", imagen: "https://i.ibb.co/GkprQs0/Fresca-Refresco-Sabor-Toronja-Fresca-Lata-355ml-copia.jpg" },
    { id: "52", nombre: "Fanta Naranja", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/pJz6CBB/Refresco-Mirinda-sabor-naranja-botella-de-600-ml.webp" },
    { id: "53", nombre: "Mundet Manzana", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/TkQB5qq/Refresco-Sidral-Mundet-sabor-manzana-de-600-ml.webp" },
    { id: "54", nombre: "Sprite Lima-Limon", peso: "2.5 l", precio: "26", imagen: "https://i.ibb.co/zS2x7Bp/Refresco-Sprite-sabor-lima-lim-n-de-2-5-l.webp" },
    { id: "55", nombre: "Squirt Toronja", peso: "600 ml", precio: "18", imagen: "https://i.ibb.co/fNkwMFN/Refresco-Squirt-sabor-toronja-600-ml.webp" },
    { id: "56", nombre: "Sprite Lima-Limon lata", peso: "355 ml", precio: "12", imagen: "https://i.ibb.co/fNkwMFN/Refresco-Squirt-sabor-toronja-600-ml.webp" },
    { id: "57", nombre: "Squirt Toronja", peso: "2.5 l", precio: "28", imagen: "https://i.ibb.co/BszXYh6/Squirt-9-Pack-2-lts.jpg" },
    { id: "58", nombre: "Squirt Toronja lata", peso: "355 ml", precio: "14", imagen: "https://i.ibb.co/6yK8vVY/Squirt-Refresco-con-Sabor-a-Toronja.jpg" },
    { id: "59", nombre: "Fernet Branca", peso: "750 ml", precio: "400", imagen: "https://i.ibb.co/G2DYFf9/Fernet-Branca.jpg" },
    { id: "60", nombre: "Fernet Branca", peso: "1 L", precio: "600", imagen: "https://i.ibb.co/G2DYFf9/Fernet-Branca.jpg" }
]

export const getFetch = new Promise((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    } else {
        reject("not found 404")
    }
})