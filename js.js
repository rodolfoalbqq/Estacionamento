(function () {
    const $ = q => document.querySelector(q)

    function renderGarage () {
        const garage = getGarage();

        garage.forEach(c => addCarToGarage(c))
    }

    function addCarToGarage (car) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${car.veiculo}</td>
            <td>${car.placa}</td>
            <td data-time="${car.time}">${new Date(car.time)
                 .toLocaleString("pt-BR", {hour: "numeric", minute:"numeric"})}</td>
            
            <td>
                 <button class="delete">x</button>
            </td>
        
        `;

        $("#garage").appendChild(row);
    };

    function checkOut(info){

        
        const placa = info[1].textContent;
    }

    const getGarage = () => localStorage.garage ? JSON.parse(localStorage.garage) : [] ;


    renderGarage();
    $("#botao").addEventListener("click", e =>{
        const veiculo = $("#veiculo").value
        const placa = $("#placa").value;

        if(!veiculo || !placa) {
            alert("Os campos devem ser preenchidos!");
            return;
        }

        const car = {veiculo , placa, time: new Date()}

        const garage = localStorage.garage ? JSON.parse(localStorage.garage) : [] ; garage.push(car);

        localStorage.garage = JSON.stringify(garage);
        console.log(garage);

        addCarToGarage(car);

        $("#veiculo").value = "";
        $("#placa").value = "";

    });

    $("#garage").addEventListener("click", e => {
        if(e.target.className = "delet")
             checkOut(e.target.parentElement.parentElement.cells)
    });
})();
