const sits = document.querySelectorAll(".sitHover")
let total = 0
let status = false

for (let item of sits) {
  item.addEventListener("click", function () {
    item.classList.toggle("valgt")
    if (item.classList.contains("valgt")){
      total += 100
    }else{total -=100
    }
    console.log(total);

  })
}

console.log('hey')
