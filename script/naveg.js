const titulo=document.getElementById("titulo");
const mudarCor=document.querySelectorAll("#Corm");
const proc=document.querySelector(".proc");
const BtnProc=document.querySelector(".BtnProc");
const Categ=document.querySelector(".Categ");
const toggleBtn1 = document.getElementById('toggleBtn');

window.addEventListener("scroll", ()=>{
    var header = document.getElementById("page-header");
    if (window.scrollY > 100) {
      header.style.backgroundColor = "var(--verde)";
      titulo.style.color = "white"
      mudarCor.forEach((el)=>{
        el.classList.add("mudarCor");
      })
      proc.classList.add("mudarProc");
      BtnProc.classList.add("mudarProc");
      toggleBtn1.style.fill = "white";
    } else if (window.scrollY > 50){
      header.style.backgroundColor = "rgb(255 255 255 / 39%)";
      titulo.style.color = "var(--verde)";
      mudarCor.forEach((el)=>{
        el.classList.remove("mudarCor");
      })
      proc.classList.remove("mudarProc")
      BtnProc.classList.remove("mudarProc")
      toggleBtn1.style.fill = "var(--verde)";
    }
  });


  // Aqui quando clica no botão "Categoria" aparece a lista
  // const listaCateg=document.querySelector(".listaCateg")
  // Categ.addEventListener("mouseover", (evt)=>{
  //   listaCateg.classList.add("listaCategBlock")
  // })

  // Categ.addEventListener("mouseout", (evt)=>{
  //   listaCateg.classList.remove("listaCategBlock")
  // })

  // listaCateg.addEventListener("mouseover", (evt)=>{
  //   listaCateg.classList.add("listaCategBlock")
  // })

  



  
