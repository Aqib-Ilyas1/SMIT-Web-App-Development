

function allahuakbar() {
    var allahuakbar = document.getElementById("allahuakbar").value;
    var tasbeehname = document.getElementById('tasbeehname');
 
    localStorage.setItem('Tasbeeh-Name',JSON.stringify(allahuakbar))
    
    tasbeehname = JSON.parse(localStorage.getItem('Tasbeeh-Name'))
    // out.value = tasbeehname;

    console.log(tasbeehname)

    if(allahuakbar==tasbeehname){
    window.location.href = "./counter.html"
    }
}




