(function () {
    const $ = q => document.querySelector(q)

    $("#botao").addEventListener("click", e =>{
        const veiculo = $("#veiculo").value
        const placa = $("#placa").value;

        const car = {veiculo , placa, time: new Date()}

        const garage = localStorage.garage ? JSON.parse(localstorage.garage) : [] ;
        garage.push(car);
    });
})();
