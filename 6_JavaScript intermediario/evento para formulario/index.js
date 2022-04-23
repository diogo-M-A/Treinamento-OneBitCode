function save(){
  let name = document.querySelector('input[name="name"]').value
  let option = document.querySelector('select[name="programming-lang"]').value
  alert('Nome: '+name+'\nPrograma em: '+option)
}