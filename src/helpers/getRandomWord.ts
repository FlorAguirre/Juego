let words:string[] = [
        'COMPUTADORA',
        'DOCTOR',
        'TECLADO',
        'SARMIENTO',
        'VENTILADOR',
        'CAMPERA',
        'INVIERNO',
        'VEHICULO',
        'ANIMAL',
        'VETERINARIO',
        'CELULAR'

];



export function getRandomWord() {

    const randomWord = Math.floor(Math.random() * words.length);
    return words[randomWord];
}