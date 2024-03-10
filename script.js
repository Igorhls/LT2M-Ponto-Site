function redirectToSubpage() {
    // Obtém o valor do input
    var matricula = document.getElementById("input").value;
  
    // Redireciona para a página "subpagina.html" com parâmetro na URL
    window.location.replace("subpagina.html?matricula=" + encodeURIComponent(matricula));
  }
  