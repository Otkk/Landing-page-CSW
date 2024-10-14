function updateLabel() {
    const cpfCnpjLabel = document.getElementById('cpfCnpjLabel');
    const pessoaFisica = document.getElementById('pessoaFisica').checked;
    cpfCnpjLabel.textContent = pessoaFisica ? 'CPF' : 'CNPJ';
}