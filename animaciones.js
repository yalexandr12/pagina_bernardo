document.addEventListener("DOMContentLoaded", function () {
    var boton = document.querySelector('.btn-primary');

    boton.addEventListener('mouseover', function () {
      boton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });

    boton.addEventListener('mouseout', function () {
      boton.style.boxShadow = 'none';
    });
  });


  function redirectToForm() {
    var formElement = document.getElementById('miFormulario');
    scrollToElement(formElement, 1000); // Duración del desplazamiento en milisegundos (en este ejemplo, 1000 ms)
}

function redirectToService() {
    var servicesElement = document.getElementById('servicios');
    scrollToElement(servicesElement, 1000); // Duración del desplazamiento en milisegundos (en este ejemplo, 1000 ms)
}

function scrollToElement(element, duration) {
    var targetPosition = element.offsetTop;
    var startPosition = window.scrollY || window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var easeInOut = timeElapsed < duration ? easeInOutCubic(timeElapsed, startPosition, distance, duration) : targetPosition;
        window.scrollTo(0, easeInOut);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}


  