

document.addEventListener("DOMContentLoaded", 
function () 
{
    const sistemaSelect = document.getElementById("sistema-select");

    const fichaContainer = document.getElementById("ficha");

    sistemaSelect.addEventListener
    ("change", function () 
    {
        const sistema = sistemaSelect.value;

        fichaContainer.innerHTML = "";
        
        if (sistema === "dnd") {
            fichaContainer.innerHTML =
             `
                <h3>Ficha de Dungeons & Dragons</h3>
                <form>
                    <label>Nome do Personagem: <input type="text" name="nome"></label><br>
                    <label>Classe: <input type="text" name="classe"></label><br>
                    <label>Nível: <input type="number" name="nivel" min="1"></label><br>
                    <label>Raça: <input type="text" name="raca"></label><br>
                </form>`
            ;
        } else if (sistema === "vampiro") {
            fichaContainer.innerHTML = `
                <h3>Ficha de Vampiro: A Máscara</h3>

                <form>
                    <label>Nome do Personagem: <input type="text" name="nome"></label>
                    <br>
                    <label>Clã: <input type="text" name="cla"></label><br>
                    <label>Geração: <input type="number" name="geracao" min="1"></label><br>
                    <label>Natureza: <input type="text" name="natureza"></label><br>
                </form>
            `;
        }
    });
});