const tips = {
    necessidades: 'Toque em um cartão para expressar o que você precisa agora',
    emocoes: 'Toque em um cartão para compartilhar como você está se sentindo',
    comunicacao: 'Toque em um cartão para dizer o que você quer comunicar'
};

function switchTab(id, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section-panel').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById('panel-' + id).classList.add('active');
    document.getElementById('tip-text').textContent = tips[id];

    syncNav(id);
}

function goTo(id, btn) {
    document.querySelectorAll('.nav-link-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('onclick')?.includes(id));
    });

    document.querySelectorAll('.section-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + id).classList.add('active');
    document.getElementById('tip-text').textContent = tips[id];
}

function syncNav(id) {
    document.querySelectorAll('.nav-link-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('onclick')?.includes(id));
    });
}