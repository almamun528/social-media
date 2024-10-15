const loadAllPostFromJsonApi = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    displayAllPostDataIntoHomepage(data)
    
}

const displayAllPostDataIntoHomepage = (posts)=>{
    const postContainer = document.querySelector(".all-posts")
     document.querySelector(".all-videos").innerHTML =""
     document.querySelector(".all-users").innerHTML =""


    posts.forEach((post) => {
        const {userId,title,body,id} = post
        
        const div = document.createElement("div")
        div.classList.add('shadow' ,'p-4', 'm-3', 'rounded-md')
        div.innerHTML =`
        <h1 class="mb-1">Author's Id: ${id}</h1>
            <h1 class="text-md font-semibold mb-3" > Caption: ${title} </h1>
            <p class="text-sm"> <span class="font-semibold">Post:</span> ${body}</p>
            <br>
            <h1 class="text-gray-400"> id number : ${userId}</h1>
        `;
        postContainer.appendChild(div)
        

    });
}
loadAllPostFromJsonApi()