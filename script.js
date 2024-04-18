document.addEventListener("DOMContentLoaded", function () {
  fetchNews();
});

function fetchNews() {
  const apiKey = "pub_422563eb940880a969e32c255f1e5675ef4f3";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us&language=en`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayNews(data.results))
    .catch((error) => console.error("Error fetching data:", error));
}

function displayNews(articles) {
  const container = document.getElementById("news-container");
  container.innerHTML = ""; // Clear previous results

  articles.forEach((article) => {
    const div = document.createElement("div");
    div.className = "article";
    div.innerHTML = `
              <h2 class="title">${article.title}</h2>
              <img src="${article.image_url}" class="image">
              <p class="description">${
                article.description || "No description available."
              }</p>
              <a href="${article.link}" target="_blank">Read more</a>
          `;
    container.appendChild(div);
  });
}
