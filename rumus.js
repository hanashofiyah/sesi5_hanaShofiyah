export function kalkulator (angka1, angka2, operator){
    
    switch (operator){
        case "+":
            return angka1 + angka2;
        break;

        case "-":
            return angka1 - angka2;
        break;
        
        case "*":
            return angka1 * angka2;
        break;
        
        case "/":
            return angka2 === 0
            ? "division by zero is not allowed"
            : angka1 / angka2;
        
            break;
        default:
            return "Operator tidak valid";
        
            break;
    }
}