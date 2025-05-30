// Animación de partículas en el fondo
const particlesContainer = document.querySelector(".particles-container");
for (let i = 0; i < 80; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particlesContainer.appendChild(particle);
}

// Animación de la estrella: Desaparece y muestra a Hello Kitty en el centro
document.getElementById("estrella").addEventListener("click", function() {
    let destello = document.createElement("div");
    destello.classList.add("destello");
    document.body.appendChild(destello);

    gsap.to(destello, { 
        duration: 0.5, 
        opacity: 0, 
        scale: 2, 
        ease: "power2.out", 
        onComplete: function() {
            destello.remove();
        }
    });

    // Hacer desaparecer la estrella
    gsap.to("#estrella", { duration: 0.5, opacity: 0, scale: 0, onComplete: function() {
        document.getElementById("estrella").style.display = "none";
    }});

    // Aparecer Hello Kitty en el centro con tamaño fijo
    document.getElementById("hello-kitty").classList.remove("hidden");
    document.getElementById("click-sound").play();

    gsap.to("#hello-kitty img", { duration: 1, opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)" });

    // Mostrar el globo de texto
    gsap.to(".texto", { duration: 1, opacity: 1, delay: 0.5 });
});


// Evento para el botón "Sí"
document.getElementById("si").addEventListener("click", function() {
    gsap.to("#pregunta", { duration: 1, opacity: 0, onComplete: function() {
        document.getElementById("pregunta").style.display = "none";
        document.getElementById("contenido").classList.remove("hidden");

        // Animación de caída de la estrella
        gsap.fromTo("#estrella img", 
            { y: -150 },  // Posición inicial fuera de pantalla
            { y: 300, ease: "bounce.out", duration: 2 } // Cae con efecto de rebote
        );
    }});
});

// Evento para el botón "No"
document.getElementById("no").addEventListener("click", function() {
    gsap.to("#pregunta", { duration: 1, opacity: 0, scale: 0, onComplete: function() {
        document.getElementById("pregunta").style.display = "none";
    }});
});
