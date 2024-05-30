document.addEventListener("DOMContentLoaded", function(){
    var text = document.getElementById('textin')
    var btn = document.getElementById('btn')
    var list = document.getElementById('list')

    
    btn.addEventListener("click", function(){
        const task = text.value.trim()
        if(task !== "")
            {
                const li = document.createElement('li')
                li.textContent = task
                li.addEventListener('click', function(){
                    li.style.textDecoration='line-through'
                })
                if(li.style.textDecoration=='line-through')
                    {
                        li.addEventListener('click', function(){
                            li.style.textDecoration='none'
                        })
                    }
                const del = document.createElement('button')
                del.textContent = "Delete"
                del.className = "del-btn"
                del.addEventListener("click", function(){
                    li.remove()
                })
                li.appendChild(del)
                list.prepend(li)

                text.value=""
            }
            else
            {
                alert('Enter a task')
            }        
    })
    
})