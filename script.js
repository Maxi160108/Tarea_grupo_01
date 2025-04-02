function generadorNumerosPrimos() {

    // Solicita al usuario un número límite y lo convierte a entero
    let limite = parseInt(prompt("Ingrese un numero limite para la impresión: "))

    // Array para almacenar los números primos encontrados
    let arrayPrimos = []
    
    // Valida si el límite es 0 o 1 (no válidos para primos)
    if (limite === 0 || limite === 1 || limite < 0) {
        alert("Ingrese un valor valido")
    }

    // Itera desde 2 hasta el límite (incluyéndolo si es primo)
    for(let i = 2; i < limite + 1; i++) {

        // Verifica si el número actual (i) es primo
        if(esPrimo(i)) {

            // Si es primo, lo agrega al array
            arrayPrimos.push(i)
        }
    }
    
    // Función auxiliar para determinar si un número es primo
    function esPrimo(numero) {

        // Itera desde 2 hasta numero-1 para buscar divisores
        for(let j = 2; j < numero; j++) {

            // Si encuentra un divisor, no es primo
            if(numero % j === 0) {
                return false;
            }
        }
        // Si no encontró divisores y no es 1, es primo
        return numero !== 1;
    }

    // Segunda validación para el caso de límite 0 o 1
    if(limite === 0 || limite === 1 || limite < 0) {
        alert("No se ha generado nada")
    } else {
        // Muestra los números primos encontrados separados por guiones
        alert(`Los numeros primos al numero que ingresaste son: ${arrayPrimos.join(" - ")}`)
    }
}