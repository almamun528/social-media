const loadAllUsers = async() =>{
  const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  const data = await response.json()
  displayAllUsers(data.videos)
}

const displayAllUsers = (getUsers)=>{
  const userContainer = document.querySelector(".all-users")
  document.querySelector(".all-posts").innerHTML = ""
  document.querySelector(".all-videos").innerHTML =""


  getUsers.forEach((user) => {
    const { profile_picture, profile_name, verified,video_id} = user.authors[0];
    //create div for each user
    const div = document.createElement("div")
    div.innerHTML = `
                  <div class="border-2 w-fit mx-auto p-2 rounded shadow mb-3 h-[300px]">
                <img class="h-[180px] w-full" src=${profile_picture} alt="">
                <h1 class="my-2">${profile_name}</h1>
               
                 <button class="bg-blue-500 p-2 rounded text-white  font-extralight addBtn" onclick="addFriendRequest(this)">Add Friend</button>

                <button class="bg-blue-500 p-2 rounded text-white  " onclick="removeRequest(this)">Remove </button>
            </div>
    `
     userContainer.appendChild(div) //append Child 

    addFriendRequest = (button) =>{
      button.innerText ="Request Sent"
      //!Create Element and append To notification center.
      const notificationContainer = document.querySelector(".all-notifications")
      const div = document.createElement("div")
      div.innerHTML = `
  
          <p> You Sent Friend Request wait for Response</p>
      `;
      notificationContainer.appendChild(div)

    }

    // ? Remove Button
    removeRequest = (button) =>{
      
      button.parentNode.querySelector(".addBtn").innerText ="Add Friend"
      const notificationContainer = document.querySelector(".all-notifications")
      const div = document.createElement("div")
      div.innerHTML = `
  
          <p> You Remove Friend Request </p>
      `
      notificationContainer.appendChild(div)

    }
  });
}
