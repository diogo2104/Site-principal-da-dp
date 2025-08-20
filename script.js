// Script de redirecionamento de container
function scrollToWithOffset(elementId) {
    const element = document.getElementById(elementId);
    const ribbonHeight = document.querySelector('.ribbon').offsetHeight;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const offset = elementTop - ribbonHeight;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-home").addEventListener("click", () => {
        scrollToWithOffset("containerInicio");
    });

    document.querySelector(".button-about").addEventListener("click", () => {
        scrollToWithOffset("containerSobre");
    });

    document.querySelector(".button-contact").addEventListener("click", () => {
        scrollToWithOffset("containerContato");
    });

    document.querySelector(".button-project").addEventListener("click", () => {
        scrollToWithOffset("containerProject");
    });
});
function scrollToWithOffset(elementId) {
    const element = document.getElementById(elementId);
    const ribbonHeight = document.querySelector('.ribbon').offsetHeight;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const offset = elementTop - ribbonHeight;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

function scrollToWithOffset(elementId) {
    const element = document.getElementById(elementId);
    const ribbonHeight = document.querySelector('.ribbon').offsetHeight;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const offset = elementTop - ribbonHeight;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}
//evento do video logo desktop
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidLogo");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 8000); 
        });
    }
});


//Funções no mobile

//Função para mudar os cards automatico
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768) {
        const mobileCards = document.querySelectorAll(
            ".mobile-card, .mobile-card2, .mobile-card3, .mobile-card4"
        );

        if (mobileCards.length > 0) {
            let currentIndex = 0;
            mobileCards[currentIndex].classList.add("active");

            // Função para iniciar o intervalo
            let intervalId;
            function startInterval() {
                intervalId = setInterval(() => {
                   
                    mobileCards[currentIndex].classList.remove("active");

                    
                    currentIndex = (currentIndex + 1) % mobileCards.length;

                    
                    mobileCards[currentIndex].classList.add("active");
                }, 8000);
            }

            
            startInterval();

            
            mobileCards.forEach((card, index) => {
                card.addEventListener("click", () => {
                    
                    mobileCards.forEach(c => c.classList.remove("active"));

                    
                    card.classList.add("active");

                    currentIndex = index;

                    clearInterval(intervalId);
                    startInterval();
                });
            });
        }
    }
});

//Função para recomeçar efeito da logo mobile
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidMobile");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 8000); 
        });
    }
});
//Funções do Carrossel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carrosel");
  const originalCards = Array.from(carousel.children);

  
  const firstClone = originalCards[0].cloneNode(true);
  const lastClone = originalCards[originalCards.length - 1].cloneNode(true);

  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  carousel.insertBefore(lastClone, originalCards[0]);
  carousel.appendChild(firstClone);

  const cards = Array.from(carousel.children);
  let currentIndex = 1;
  let intervalId;

  function updateCarousel(scroll = true) {
    const card = cards[currentIndex];
    const carouselWidth = carousel.offsetWidth;
    const cardWidth = card.offsetWidth;
    const scrollPosition = card.offsetLeft - (carouselWidth / 2) + (cardWidth / 2);

    carousel.scrollTo({
      left: scrollPosition,
      behavior: scroll ? "smooth" : "auto"
    });
  }

  function startAutoScroll() {
    clearInterval(intervalId); 
    intervalId = setInterval(() => {
      currentIndex++;
      updateCarousel();

      if (currentIndex >= cards.length - 1) {
        setTimeout(() => {
          currentIndex = 1;
          updateCarousel(false);
        }, 400);
      }
    }, 5000); 
  }

  // Botões com reinício do contador do container4
  document.querySelector(".button-left").addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateCarousel();
    startAutoScroll();

    if (currentIndex === 0) {
      setTimeout(() => {
        currentIndex = originalCards.length;
        updateCarousel(false);
      }, 400);
    }
  });

  document.querySelector(".button-right").addEventListener("click", () => {
    if (currentIndex >= cards.length - 1) return;
    currentIndex++;
    updateCarousel();
    startAutoScroll(); 

    if (currentIndex === cards.length - 1) {
      setTimeout(() => {
        currentIndex = 1;
        updateCarousel(false);
      }, 400);
    }
  });

  // Inicial
  updateCarousel(false);
  startAutoScroll(); // inicia rotação automática
});
// Função para mobile do container 2 
document.addEventListener("DOMContentLoaded", () => {
  const frame = document.querySelector(".frame-about");
  const flipper = frame?.querySelector(".flipper");
  const backface = document.getElementById("backface");

  if (!frame || !flipper || window.innerWidth > 768) return;

  let isFlipped = false;
  let flipInterval = null;
  let flipTimeout = null;

  // Aplica a rotação
  function updateFlip() {
    flipper.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
  }

  // Inicia o flip automático
  function startAutoFlip() {
    clearInterval(flipInterval);
    flipInterval = setInterval(() => {
      isFlipped = !isFlipped;
      updateFlip();
    }, 5000);
  }

  // Clique na frente do card
  frame.addEventListener("click", (e) => {
    if (e.target.id === "backface") return; // ignora clique no verso

    clearInterval(flipInterval);
    clearTimeout(flipTimeout);

    if (!isFlipped) {
      isFlipped = true;
      updateFlip();

      flipTimeout = setTimeout(() => {
        isFlipped = false;
        updateFlip();
        startAutoFlip();
      }, 5000);
    }
  });

  // Clique no verso do card (id="backface")
  backface.addEventListener("click", (e) => {
    e.stopPropagation(); // evita conflito com outro clique
    clearInterval(flipInterval);
    clearTimeout(flipTimeout);

    if (isFlipped) {
      isFlipped = false;
      updateFlip();
      startAutoFlip();
    }
  });

  // Início
  updateFlip();
  startAutoFlip();

  // Se redimensionar para desktop, para tudo
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      clearInterval(flipInterval);
      clearTimeout(flipTimeout);
      flipper.style.transform = ""; // limpa
    } else {
      isFlipped = false;
      updateFlip();
      startAutoFlip();
    }
  });
});

//Função do video do card1 container 1
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidCard1");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 5000); 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidCard2");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 6000); 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidCard3");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 7000); 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidCard4");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 8000); 
        });
    }
});


// função para video nos cards para mobile 


document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidcardMobile1");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 6000); 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidcardMobile2");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 6000); 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidcardMobile3");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 6000); 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vidcardMobile4");

    if (video) {
        // Forçar a reprodução automática quando a página carregar
        video.play().catch(err => {
            console.warn("Erro ao tentar reproduzir automaticamente:", err);
        });

        // Quando o vídeo terminar, esperar 15 segundos e reiniciar
        video.addEventListener("ended", () => {
            console.log("Vídeo terminou. Recomeçando em 15 segundos...");
            setTimeout(() => {
                video.currentTime = 0;
                video.play().catch(err => {
                    console.warn("Erro ao tentar reproduzir novamente:", err);
                });
            }, 6000); 
        });
    }
});