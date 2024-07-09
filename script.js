function calcularTributos() {
    const valor = parseFloat(document.getElementById('valor').value.replace(',', '.'));

    if (isNaN(valor)) {
        alert('Por favor, insira um valor válido.');
        return;
    }
    const pis = valor * 0.0065;
    const cofins = valor * 0.03;
    const ir = valor * 0.015;
    const csll = valor * 0.01;

    const totalTributos = pis + cofins + ir + csll;
    const valorRestante = valor - totalTributos;

    document.getElementById('pis').textContent = pis.toFixed(2);
    document.getElementById('cofins').textContent = cofins.toFixed(2);
    document.getElementById('ir').textContent = ir.toFixed(2);
    document.getElementById('csll').textContent = csll.toFixed(2);
    document.getElementById('totalTributos').textContent = totalTributos.toFixed(2);
    document.getElementById('valorRestante').textContent = valorRestante.toFixed(2);
}