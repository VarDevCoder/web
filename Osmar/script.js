// Validación del formulario de contacto
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validar campos
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Por favor completa todos los campos.');
    return;
  }

  // Enviar formulario (aquí puedes agregar tu lógica para enviar el formulario)
  console.log('Nombre:', nameInput.value);
  console.log('Correo Electrónico:', emailInput.value);
  console.log('Mensaje:', messageInput.value);

  // Puedes agregar código para enviar el formulario a través de AJAX, Fetch API u otra tecnología

  // Limpiar formulario después de enviar
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  alert('Mensaje enviado correctamente.');
});

// Efecto de smooth scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const sectionId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
