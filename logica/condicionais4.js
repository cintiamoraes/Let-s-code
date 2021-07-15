let sinal = "vermelho";

switch (sinal) {
    case "verde":
        console.log("pode passar");
        break;

    case "amarelo":
        console.log("Prestes a fechar, cuidado...");
        break;

    case "vermelho":
        console.log("Fechado, não passe.");
        break;
        default:
            console.log("Sinal inválido");

}
