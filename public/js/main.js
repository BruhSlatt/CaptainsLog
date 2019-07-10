const clear = document.getElementsByClassName('clear')
clear[0].addEventListener('click', function(){
    fetch('/clear/' + clear.id, { method: "delete" } )
    .then( (res) => res.json() )
    .then( (data) =>  location.reload() )
}) 