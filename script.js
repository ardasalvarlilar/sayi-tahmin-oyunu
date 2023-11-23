const input = document.getElementById('input')
const p = document.querySelector('p')
const select = document.getElementById('zorluk')
const btn = document.querySelector('button')

btn.disabled = true
input.disabled = true
btn.textContent = 'Bir zorluk seç'

let random
let select_value
select.addEventListener('change',function(event){
  select_value = Number(event.target.value)
  random = Math.floor(Math.random() * select_value) + 1
  if(random != undefined){
    btn.disabled = false
    input.disabled = false
    btn.textContent = 'Tahmin et'
  }
  console.log(random)
})

input.addEventListener('keyup', e => {
  if(e.key == "Enter"){
    tahminEt(e)
  }
})

let kacKere = 1
function tahminEt(e){
  let value = Number(input.value)
  if(kacKere < 4 && value != ''){
    input.value = ""
    if(value === random){
      p.innerHTML = `Doğru bildin. ${kacKere} kere denedin. <span>${(e.timeStamp / 1000).toFixed(2)}</span> saniye içerisinde bildin`
      p.style.color = 'green'
    }else if(value > random){
      p.textContent = `Daha küçük bir sayı girin ${3 - kacKere} hakkın kaldı`
      p.style.color = 'red'
      kacKere++
      clearMessage()
    }else if(value < random){
      p.textContent = `Daha büyük bir sayı girin ${3 - kacKere} hakkın kaldı`
      p.style.color = 'red'
      kacKere++
      clearMessage()
    }else{
      p.textContent = `Geçersiz bir değer girdiniz. 0 ile ${select_value} arasında bir sayı giriniz`
      clearMessage()
    }
  }
  if(kacKere === 4){
    p.textContent = "Oyunu kaybettin"
    btn.disabled = true
    input.disabled = true
  }
}
btn.addEventListener('click',tahminEt)

function clearMessage(){
  setTimeout(function(){
    p.textContent = ''
  },3000)
}


// Zaman ayarlı fonksiyon
// setInterval
// setTimeout

// setTimeout(() => {
//   console.log('merhaba')
// },3000) // 3 saniye sonra çalış

// setInterval(function(){
//   console.log('merhaba')
// },3000) // 3 saniyede bir çalış

// function zaman(){
//   console.log('zaman fonksiyonu')
// }
// setInterval(zaman,1000)