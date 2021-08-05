function calcularDescuento (){
    const inputValue = document.getElementById("InputValue");
    const price = inputValue.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;
    if (discount === "Cupon1" || discount === "Cupon2" || discount === "Cupon3") {    
        if (discount === "Cupon1"){
            const resultado = valorDescuento (price, 5);
            const resultP = document.getElementById("footer");
            resultP.innerText = "el precio final es $"+resultado
        }
        if (discount === "Cupon2"){
            const resultado = valorDescuento (price, 10);
            const resultP = document.getElementById("footer");
            resultP.innerText = "el precio final es $"+resultado
        }
        if (discount === "Cupon3"){
            const resultado = valorDescuento (price, 15);
            const resultP = document.getElementById("footer");
            resultP.innerText = "el precio final es $"+resultado
        }
    }
    else {
        alert("intoduce un cupon valido");
    }
    
}

function valorDescuento (precio, descuento) {
    const valorDescuento = precio * (1-(descuento/100))
    return valorDescuento;
}

