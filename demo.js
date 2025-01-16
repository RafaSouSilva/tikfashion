document.addEventListener('DOMContentLoaded', function() {
  const demoImages = {
    model1: {
      tshirt: 'https://klingai.com/demo/model1-tshirt.jpg',
      pants: 'https://klingai.com/demo/model1-pants.jpg'
    },
    model2: {
      tshirt: 'https://klingai.com/demo/model2-tshirt.jpg',
      pants: 'https://klingai.com/demo/model2-pants.jpg'
    }
  };

  const generateBtn = document.querySelector('.btn-primary');
  generateBtn.addEventListener('click', function() {
    // Simula o tempo de processamento
    generateBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Gerando...';
    setTimeout(() => {
      showDemoResult();
    }, 2000);
  });
});

function showDemoResult() {
  // Criar modal com resultado
  const modal = `
    <div class="modal fade" id="demoModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-secondary">
            <h5 class="modal-title">Demonstração do Try-On Virtual</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-info">
              <i class="bi bi-info-circle"></i> 
              Esta é uma demonstração. Para resultados reais, será necessária a integração com a API da Kling AI.
            </div>
            <img src="https://klingai.com/demo/result.jpg" class="img-fluid rounded" alt="Demo Result">
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modal);
  new bootstrap.Modal(document.getElementById('demoModal')).show();
} 