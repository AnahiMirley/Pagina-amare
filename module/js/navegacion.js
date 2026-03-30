function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    const hamburguesa = document.querySelector('.nav-icono-hamburguesa');
    
    menu.classList.toggle('menu-activo');
    hamburguesa.classList.toggle('activo');
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-enlace').forEach(enlace => {
    enlace.addEventListener('click', () => {
        document.getElementById('menu-mobile').classList.remove('menu-activo');
        document.querySelector('.nav-icono-hamburguesa').classList.remove('activo');
    });
});

// Modal de bienvenida al enviar formulario
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario-maestro');
    
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const botonEnviar = formulario.querySelector('.btn-enviar-form');
            
            // Validar que los campos requeridos estén llenos
            const camposRequeridos = formulario.querySelectorAll('[required]');
            let valido = true;
            
            camposRequeridos.forEach(campo => {
                if (!campo.value.trim()) {
                    valido = false;
                    campo.style.borderColor = '#ff6b6b';
                }
            });
            
            if (!valido) {
                mostrarNotificacion('Por favor completa todos los campos requeridos', 'error');
                return;
            }
            
            // Deshabilitar botón
            botonEnviar.innerHTML = '<span class="spinner"></span> Enviando...';
            botonEnviar.disabled = true;
            
            mostrarModalBienvenida();
            
            // Enviar formulario después de 2.5 segundos
            setTimeout(() => {
                formulario.submit();
            }, 2500);
        });
    }
});

// Función mejorada para mostrar modal de bienvenida
function mostrarModalBienvenida() {
    // Remover modal anterior si existe
    const modalAnterior = document.querySelector('.modal-overlay');
    if (modalAnterior) {
        modalAnterior.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-contenido">
            <div class="modal-icono">✓</div>
            <h2>¡Gracias por Confiar en Nosotros!</h2>
            <p>Hemos recibido tu solicitud exitosamente.</p>
            <p class="modal-subtexto">Nuestro equipo se pondrá en contacto pronto.</p>
            <div class="modal-loader"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Efecto de hover en tarjetas de productos
document.querySelectorAll('.producto-tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(1deg)';
        this.style.boxShadow = '0 10px 30px rgba(197, 160, 89, 0.3)';
        this.style.transition = 'all 0.3s ease';
    });
    
    tarjeta.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
    });
});

// Validación de campos en tiempo real
document.querySelectorAll('.campo input, .campo textarea').forEach(campo => {
    campo.addEventListener('blur', () => {
        validarCampo(campo);
    });
});

function validarCampo(campo) {
    if (campo.hasAttribute('required') && !campo.value.trim()) {
        campo.style.borderColor = '#ff6b6b';
        campo.style.backgroundColor = '#fff5f5';
    } else {
        campo.style.borderColor = '#ddd';
        campo.style.backgroundColor = 'var(--color-beige-claro)';
    }
}

// Contador de caracteres en textarea
const textarea = document.querySelector('textarea[name="comentarios"]');
if (textarea) {
    const contadorDiv = document.createElement('div');
    contadorDiv.className = 'contador-caracteres';
    contadorDiv.textContent = '0/500';
    textarea.parentElement.appendChild(contadorDiv);
    
    textarea.addEventListener('input', () => {
        const limite = 500;
        const actual = textarea.value.length;
        contadorDiv.textContent = `${actual}/${limite}`;
        
        if (actual > limite) {
            textarea.value = textarea.value.substring(0, limite);
            contadorDiv.textContent = `${limite}/${limite}`;
        }
    });
}

// Efecto de enfoque en campos
document.querySelectorAll('.campo input, .campo select, .campo textarea').forEach(campo => {
    campo.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    campo.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Efecto de enfoque en imágenes
document.querySelectorAll('.producto-imagen').forEach(imagen => {
    imagen.addEventListener('focus', function() {
        this.style.border = '2px solid #c5a059';
        this.style.outline = 'none';
    });

    imagen.addEventListener('blur', function() {
        this.style.border = 'none';
    });
});

// Efecto de cambio en select
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', function() {
        this.style.backgroundColor = '#f0f8e2';
    });
});

// Efecto al presionar teclas en campos de texto
document.querySelectorAll('input[type="text"], textarea').forEach(campo => {
    campo.addEventListener('keydown', function() {
        this.style.backgroundColor = '#eaf7ff';
    });

    campo.addEventListener('keyup', function() {
        this.style.backgroundColor = '';
    });
});

// Notificación al agregar a la bolsa
document.querySelectorAll('.boton-agregar').forEach(boton => {
    boton.addEventListener('click', function() {
        mostrarNotificacion('¡Agregado a la bolsa!', 'success');
    });
});

function mostrarNotificacion(mensaje, tipo = 'info') {
    const notif = document.createElement('div');
    notif.className = `notificacion notificacion-${tipo}`;
    notif.textContent = mensaje;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.classList.add('mostrar');
    }, 100);
    
    setTimeout(() => {
        notif.classList.remove('mostrar');
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// Cambiar color de texto al hacer clic en un botón
document.querySelectorAll('.boton-agregar').forEach(boton => {
    boton.addEventListener('click', function() {
        this.style.color = '#fff';
        this.style.backgroundColor = '#c5a059';
    });
});

// Cambiar color de imagen al pasar el mouse
document.querySelectorAll('.producto-imagen').forEach(imagen => {
    imagen.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.2)';
    });

    imagen.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});