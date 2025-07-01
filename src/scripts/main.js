document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
        header.classList.add('header--minimal');
    } else {
        header.classList.remove('header--minimal');
    }
});

document.querySelectorAll('.plans__list__personagens').forEach(item => {
    item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
        if (targetId) {
            document.getElementById(targetId).style.display = 'flex';
            document.body.classList.add('modal-open');
        }
    });
});

document.querySelectorAll('.fechar').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        }
    });
});

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
}


for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.currentTarget.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            if (aba) {
                aba.classList.add('shows__list--is-active');
            }
            removeBotaoAtivo();
            botao.currentTarget.classList.add('shows__tabs__button--is-active')
        })
    }

    
    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active')
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }
    
    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;

        elementoPai.classList.toggle(classe)
    }

})
