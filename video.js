
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
  
    allVideos.forEach((video) => {
      const { title, thumbnail, description } = video;
      const { profile_picture, profile_name, verified } = video.authors[0]; // Assuming authors is an array and we are taking the first author
  
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
          <details>${description} </details>
      `;
  
      videoContainer.appendChild(div);
    });
  };

  