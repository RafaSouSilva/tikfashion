document.addEventListener('DOMContentLoaded', function() {
    // Estado inicial dos avatares e produtos
    let selectedAvatar = '1';
    let selectedProduct = '1';

    // Seleciona todos os avatares e produtos
    const avatars = document.querySelectorAll('.avatar-select');
    const products = document.querySelectorAll('.product-select');
    const previewImage = document.getElementById('previewImage');

    // Função para atualizar a imagem de preview
    function updatePreview() {
        const imagePath = `./assets/avatar${selectedAvatar}-${selectedProduct === '1' ? 'branca' : 'preta'}.jpg`;
        previewImage.src = imagePath;
    }

    // Adiciona eventos de clique aos avatares
    avatars.forEach(avatar => {
        avatar.addEventListener('click', function() {
            avatars.forEach(a => {
                a.classList.remove('border-primary');
                a.classList.add('border-primary-subtle');
            });
            
            this.classList.remove('border-primary-subtle');
            this.classList.add('border-primary');
            
            selectedAvatar = this.dataset.avatar;
            updatePreview();
        });
    });

    // Adiciona eventos de clique aos produtos
    products.forEach(product => {
        product.addEventListener('click', function() {
            products.forEach(p => {
                p.classList.remove('border-primary');
                p.classList.add('border-primary-subtle');
            });
            
            this.classList.remove('border-primary-subtle');
            this.classList.add('border-primary');
            
            selectedProduct = this.dataset.product;
            updatePreview();
        });
    });

    // Código existente do formulário
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const email = document.getElementById('email').value.trim();
            const loja = document.getElementById('loja').value.trim();
            const vendeOnline = document.getElementById('vendeOnline').value;
            
            if (!nome || !telefone || !email || !loja || !vendeOnline) {
                alert('Por favor, preencha todos os campos');
                return;
            }
            
            const formData = {
                nome: nome,
                telefone: telefone,
                email: email,
                loja: loja,
                vendeOnline: vendeOnline
            };
            
            console.log('Dados sendo enviados:', formData);
            
            const formModal = bootstrap.Modal.getInstance(document.getElementById('formModal'));
            formModal.hide();
            
            const sucessoModal = new bootstrap.Modal(document.getElementById('sucessoModal'));
            sucessoModal.show();
            
            fetch('https://script.google.com/macros/s/AKfycbzexc3gY_uZ6u2HkqN7WvJ3cAJq6LdQnlvC14pJenPwrFf8fhhfjJtgLFIfJ_3IJRyi/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                form.reset();
            })
            .catch(error => {
                console.error('Erro:', error);
                sucessoModal.hide();
                alert('Erro ao enviar o formulário. Por favor, tente novamente.');
            });
        });
    }

    // Botão "Começar Agora"
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            const formModal = new bootstrap.Modal(document.getElementById('formModal'));
            formModal.show();
        });
    }

    // Smooth scroll para links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});