
    const loadAllVideos = async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/videos"
    );
    const data = await response.json();
    displayAllVideos(data.videos);
  };
  
  const displayAllVideos = (allVideos) => {
    const videoContainer = document.querySelector(".all-videos");
    document.querySelector(".all-posts").innerHTML = ""
    document.querySelector(".all-users").innerHTML =""
  
    allVideos.forEach((video) => {
      const { title, thumbnail, description } = video;
      const { views, posted_date } = video.others;
      const { profile_picture, profile_name, verified } = video.authors[0];

      // Create a new div for each video
      const div = document.createElement("div");
      div.classList.add('shadow-sm', 'mx-3', 'p-3', 'rounded', 'space-y-3', 'overflow-x-hidden', 'border-2', 'my-2');
  
      div.innerHTML = `
          <h1 class="text-lg font-semibold">${title}</h1>
          <img class="w-fit" src="${thumbnail}" alt="${title}">
          <hr>
       
          <span class="flex items-center gap-2">
              <img class="w-10 h-10 rounded-full" src="${profile_picture}" alt="${profile_name}">
              <h6>${profile_name}${verified ? " ✔️" : ""}</h6>
          </span>
          <details>${description} 

        <span class="flex gap-3 items-center"> 
          <p class="mt-3 font-semibold">views: ${views}</P>
          <p class="mt-3 font-semibold">Hours ago: ${posted_date? posted_date : "not found"}</P>
        </span>
          </details>
      `;
  
      videoContainer.appendChild(div); 
    });
  };