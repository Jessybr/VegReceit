const conteiner = document.querySelector("#conteiner");

class Receita {
    constructor(nome, tempo, rendim, dific, ingred, modo, categ, imag) {
        this.nome = nome;
        this.tempo = tempo;
        this.rendim = rendim;
        this.dific = dific;
        this.ingred = ingred;
        this.modo = modo;
        this.categ = categ;
        this.imag = imag;
        Receita.instances.push(this);
    }

    card() {
        conteiner.innerHTML = `<div class="card">
            <img class="card-img" src="images/${this.imag}.png" alt="${this.nome}">
            <div class="tituloRec">
                <h3 class="card-title">${this.nome}</h3>
            </div>
            <div class="botao">
                <button id="btnVerRec" style="color: var(--marromCla);">Receita</button>
                <img src="images/iconReceita.png" alt="icone receita">
            </div>
        </div>`;
    }

    static getInstances() {
        return Receita.instances;
    }
}

Receita.instances = [];

const ingredTofu = ["500g de tofu em cubos", "3 colheres (sopa) de farinha de trigo", "2 colheres (sopa) de óleo de soja", "2 cenouras raladas grosseiramente", "1 xícara (chá) de vagem em pedaços", "1 pimentão vermelho em tiras", "2 colheres (sopa) de molho de soja (shoyu)", "Sal e pimenta-do-reino a gosto", "Cebolinha verde para decorar", "Gergelim branco torrado para polvilhar"];
const tofu = new Receita("Tofú Oriental com Vegetais", "30 minutos", "6 porções", "Fácil", ingredTofu, "Passe o tofu na farinha de trigo...", "Pratos Quentes", "tofu-oriental-vegetais");

const ingredArrozDoce = ["1 xícara (chá) de arroz", "2 xícaras (chá) de água", "4 colheres (sopa) de açúcar demerara", "500 mililitros de leite de coco", "2 unidades de canela em pau", "100 gramas de coco ralado", "Cravo-da-índia (ou cravinho) a gosto", "Canela em pó para polvilhar cada porção"];
const arrozDoce = new Receita("Arroz Doce", "30 minutos", "6 porções", "Fácil", ingredArrozDoce, "Cozinhe o arroz com água...", "Sobremesas", "arroz-doce-micro-ondas");

const ingredBatatDcFrita = ["2 batatas-doces", "Óleo para fritar", "Sal a gosto"];
const batatDcFrita = new Receita("Batata Doce Frita", "20 minutos", "4 porções", "Fácil", ingredBatatDcFrita, "Lave as batatas, descasque e fatie-as...", "Pratos Frios", "batata-doce-frita");

const ingreSucoMelancMoran = ["300ml de água de coco", "1 xícara (chá) de melancia em cubos", "1/2 xícara (chá) de amoras", "6 morangos", "1/2 xícara (chá) de mel", "Gelo a gosto"];
const sucoMelancMoran = new Receita("Suco de Melancia com Morango", "15 minutos", "3 porções", "Fácil", ingreSucoMelancMoran, "No liquidificador, bata a água de coco, a melancia, as amoras, os morangos, o mel e gelo a gosto até ficar homogêneo. Coe e sirva em seguida, se desejar, em copos decorados com morangos.", "Bebidas", "suco-melancia-morango");

const ingrePaoQueijo = ["1 xícara de chá de batata cozida", "2 xícaras de chá de polvilho doce", "1/2 xícara de chá de polvilho azedo", "1/2 xícara de chá de água morna", "1/3 de xícara de chá de azeite", "Sal a gosto"];
const paoQueijo = new Receita("Pão de Queijo", "30 minutos", "25 porções", "Médio", ingrePaoQueijo, "Em um recipiente, coloque a batata cozida e amasse bem com um garfo até ficar um purê bem macio.", "Aperitivos", "pao-de-queijo");

const ingreBoloLaranjaA = ["120 g de mix de farinhas sem glúten", "100 g de farelo de aveia", "150 g de açúcar demerara", "70 ml de suco de laranja", "180 ml de água", "100 ml de azeite de oliva", "2 ramos de alecrim sem o talo", "12 g de fermento químico", "1 colher de sopa de vinagre de maçã", "1 pitada de sal", "Açúcar a gosto"];
const boloLaranjaA = new Receita("Bolo de Laranja com Alecrim", "45 minutos", "10 porções", "Médio", ingreBoloLaranjaA, "Em uma tigela, misture a farinha com o farelo de aveia e reserve.", "Aperitivos", "bolo-de-laranja-com-alecrim");

const ingrePanqueca = ["3 xícaras de chá de água", "1/2 xícara de chá de óleo vegetal", "3 xícaras de chá de farinha de trigo", "Sal a gosto", "1 colher de chá de fermento químico em pó (fermento para bolo)"];
const panqueca = new Receita("Panqueca Vegana", "30 minutos", "5 porções", "Médio", ingrePanqueca, "Em um liquidificador, adicione a água, o óleo, a farinha de trigo e o sal. Bata até obter uma massa homogênea e lisa;", "Pratos Quentes", "panqueca");

const ingreChoq = ["500 ml de leite vegetal de sua preferência", "2 colheres de sopa de amido de milho", "2 colheres de sopa de cacau em pó", "Açúcar a gosto", "2 quadradinhos de chocolate vegano"];
const choq = new Receita("Chocolate quente vegano", "15 minutos", "2 porções", "Fácil", ingrePanqueca, "Em uma panela, coloque o leite, o amido de milho e misture bem até dissolver.", "Bebidas", "chocolate-quente");

let todasReceitas = Receita.getInstances();

let cardsHTML = '';
let receita_PQ = '';
let receita_AP = '';
let receita_BD = '';
let receita_SB = '';

todasReceitas.forEach((el) => {
    el.card();
    cardsHTML += conteiner.innerHTML;
    if (el.categ === "Pratos Quentes") {
        receita_PQ += el;
    } else if (el.categ === "Aperitivos") {
        receita_AP += el;
    } else if (el.categ === "Bebidas") {
        receita_BD += el;
    } else if (el.categ === "Sobremesas") {
        receita_SB += el;
    }
});


conteiner.innerHTML = cardsHTML;

