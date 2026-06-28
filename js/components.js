async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

loadComponent("navbar", "./components/navbar.html");
loadComponent("hero", "./components/hero.html");
loadComponent("message-box", "./components/message-box.html");
loadComponent("tabs", "./components/tabs.html");
loadComponent("necessidades", "./components/necessidades.html");
loadComponent("emocoes", "./components/emocoes.html");
loadComponent("comunicacao", "./components/comunicacao.html");
loadComponent("footer", "./components/footer.html");