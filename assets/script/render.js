export const renderTV = (data) => {
  const $cardFragment = document.createDocumentFragment();
  data.forEach((element) => {
    const $div = document.createElement("div");
    $div.className = "card";
    $div.innerHTML = `
            <a target="_blank" href="../../pages/preview-movie.html?movie-id=${element.id}"><img src="${element.image.medium}"/></a>
            <small>${element.premiered.slice(0, 4)}</small>
            <div class="card-content">
                <h3>${element.name} </h3>
                <p><strong>Language:</strong> ${element.language}</p>
                <span><strong class="rating">Rating:</strong> ${
                    element.rating.average
                } / 10</span> 
                <p><strong>Scheduled:</strong> <span>${
                    element.schedule.days
                }, ${element.schedule.time}</span></p>
                <button class="btn"><a target="_blank" href="../../pages/preview-movie.html?movie-id=${element.id}"><i class="bi bi-camera-reels"></i>Watch</a></button>
            </div>
        `;
    $cardFragment.appendChild($div);
  });

  $content.appendChild($cardFragment);
};

export const renderPreviewMovie = (data) => {
  const $cardFragment = document.createDocumentFragment();
  const $div = document.createElement("div");
  $div.className = "movie-card";
  $div.innerHTML = `
  <div class="page"><a href="../../index.html">All Movies</a> /  <span>${data.name}</span></div>
        <div class="movie-card-content">
            <p class="preview-movie-title"> <strong> ${data.name}</strong></p>
            <div class="show-content">
                <img src="${data.image.original}"/>
                <p class="description">${data.summary}</p>
                <div class="show-info-content">
                    <h4>Show Info</h4>
                    <p><strong>Network: </strong><span>${data.network.name}</span> (${data.premiered.slice(0, 4)} - ${data.ended.slice(0, 4)})</p>
                    <p><strong>Schedule: </strong>${data.schedule.days} at ${data.schedule.time} (${data.runtime}min)</p>
                    <p><strong>Status: </strong>${data.status}</p>
                    <p><strong>Show Type: </strong>${data.type}</p>
                    <p><strong>Genres: </strong>${data.genres[0] ? data.genres[0]: ""}  ${data.genres[1] ? " | " + data.genres[1]   : ""}  ${data.genres[2] ? " | " +data.genres[2]: ""}</p>
                    <p><strong>Official site: </strong><a href="${data.network.officialSite}"><i class="bi bi-globe-asia-australia"></i> Link</a></p>
                </div>
            </div>
        </div>
        `;
  $cardFragment.appendChild($div);

  $movieContent.appendChild($cardFragment);
};


