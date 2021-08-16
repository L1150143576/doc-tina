let i,a=1
for(var i=0;i<10;i++){
    a=document.createElement('div')
    a.innerHTML=i+'<br/>'
    a.addEventListener('click',function(e){
        e.preventDefault()
        console.log(i)
    })
}
document.body.append(a)