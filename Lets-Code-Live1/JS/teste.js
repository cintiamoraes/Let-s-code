//queremos escutar o evento da pagina carregada
window.addEventListener("load", () => {
    const botao = document.getElementById("botao");

    botao.addEventListener("click",() => {


        //tempo em segundos
        let sec = 360

const countDiv = document.getElementById("timer")

const secPass = () => {

            // math.floor é uma função disponível para obter um número inteiro da divisão
            let min = Math.floor(sec / 60)

            let segundosRestantes = sec % 60

            if (segundosRestantes < 10) {
                segundosRestantes = "0" + segundosRestantes
            }

            if (min < 10) {
                min = "0" + min
            }

            //Vai gerar o formato 02:59
            countDiv.innerHTML = min + " : " + segundosRestantes

            //condição final
            if (sec > 0) {
                sec = sec - 1

            } else {
                countDiv.innerHTML = "Acabou!"
            }
        };

        const countDown = setInterval(() => secPass(), 1000)
   });
})