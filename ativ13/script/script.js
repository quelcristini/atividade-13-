function diferençaEntreVariaveis() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1a').innerHTML = numero1 - numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultado1a').innerHTML  = 0;
    }
    else{
        document.getElementById('resultado1a').innerHTML  = numero2 - numero1;
    }

}

function dobroXmaisTriploY() {

    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);
    document.getElementById('resultado1b').innerText  = (2 * numero1 + 3 * numero2);
}

function multEDivXY() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value); 

    document.getElementById('resultado1c').innerText = numero1 * numero2;

}

function colocaEmOrdem() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1d').innerHTML = numero1 + ', ' + numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultado1d').innerHTML  = numero1 + ', ' + numero2;
    }
    else{
        document.getElementById('resultado1d').innerHTML  = (numero2 + ', ' + numero1);
    }

}

function calculoINSS() {
    const nome1 = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salarioBruto').value);
    const valorINSS = salario * 0.08;
    const salarioLiq = salario - valorINSS;

    document.getElementById('nomee').innerText = nome1;
    document.getElementById('salarioBrutoo').innerText = salario;
    document.getElementById('valorINSS').innerText = valorINSS;
    document.getElementById('salarioLiq').innerText = salarioLiq;
   
}

const form = document.getElementById('salaryForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const salary = parseFloat(document.getElementById('salary').value);
  let discountRate;
  let discountAmount;

  if (salary <= 1000) {
    discountRate = 0.08;
    discountAmount = salary * discountRate;
  } else if (salary > 1000 && salary <= 1500) {
    discountRate = 0.085;
    discountAmount = salary * discountRate;
  } else {
    discountRate = 0.09;
    discountAmount = salary * discountRate;
  }

  result.innerHTML = `
    <span>Salário em consideração: ${salary.toFixed(2)}</span>
    <span>Taxa de desconto: ${discountRate.toFixed(2)}</span>
    <span>Valor do desconto: ${discountAmount.toFixed(2)}</span>
  `;

  console.log(`Salário em consideração: ${salary}`);
  console.log(`Taxa de desconto: ${discountRate}`);
  console.log(`Valor do desconto: ${discountAmount}`);
});