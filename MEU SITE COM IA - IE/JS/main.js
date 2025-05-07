document.addEventListener("DOMContentLoaded", function () {
    // Variável para controlar o estado das cores
    let currentColorScheme = 0;

    // Paletas de cores do arco-íris
    const colorSchemes = [
        {
            bodyBackground: "linear-gradient(135deg,rgb(148, 15, 15),rgb(214, 92, 47))", // Vermelho e Laranja
            textColor: "white",
            cardBackground: "rgba(255, 255, 255, 0.1)",
            buttonBackground: "#ff4500",
            buttonHover: "#ff6347"
        },
        {
            bodyBackground: "linear-gradient(135deg,rgb(228, 154, 16),rgb(234, 216, 115))", // Laranja e Amarelo
            textColor: "black",
            cardBackground: "rgba(255, 255, 255, 0.15)",
            buttonBackground: "#ffd700",
            buttonHover: "#ffff00"
        },
        {
            bodyBackground: "linear-gradient(135deg,rgb(38, 143, 38),rgb(85, 151, 85))", // Verde
            textColor: "white",
            cardBackground: "rgba(255, 255, 255, 0.1)",
            buttonBackground: "#00ff00",
            buttonHover: "#32cd32"
        },
        {
            bodyBackground: "linear-gradient(135deg, #00bfff, #1e90ff)", // Azul Claro e Azul
            textColor: "white",
            cardBackground: "rgba(255, 255, 255, 0.1)",
            buttonBackground: "#1e90ff",
            buttonHover: "#00bfff"
        },
        {
            bodyBackground: "linear-gradient(135deg, #8a2be2, #9370db)", // Violeta e Lilás
            textColor: "white",
            cardBackground: "rgba(255, 255, 255, 0.15)",
            buttonBackground: "#9370db",
            buttonHover: "#8a2be2"
        },
        {
            bodyBackground: "linear-gradient(135deg,rgb(234, 139, 144),rgb(229, 119, 119))", // Rosa e Magenta
            textColor: "white",
            cardBackground: "rgba(255, 255, 255, 0.1)",
            buttonBackground: "#ff1493",
            buttonHover: "#ee82ee"
        }
    ];

    // Função para aplicar a paleta de cores
    function applyColorScheme(scheme) {
        document.body.style.background = scheme.bodyBackground;
        document.body.style.color = scheme.textColor;

        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.style.backgroundColor = scheme.cardBackground;
        });

        const buttons = document.querySelectorAll("#color-button, .quiz-option");
        buttons.forEach(button => {
            button.style.backgroundColor = scheme.buttonBackground;
            button.onmouseover = () => (button.style.backgroundColor = scheme.buttonHover);
            button.onmouseout = () => (button.style.backgroundColor = scheme.buttonBackground);
        });
    }

    // Adiciona o evento de clique ao botão
    const colorButton = document.getElementById("color-button");
    colorButton.addEventListener("click", function () {
        currentColorScheme = (currentColorScheme + 1) % colorSchemes.length;
        applyColorScheme(colorSchemes[currentColorScheme]);
    });
});