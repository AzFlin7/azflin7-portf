function getDetails(index) {
  fetch('assets/projectDetail.json')
  .then(response => response.json())
  .then(data => {
      // Access the keys and values of the JSON data
    data.forEach(item => {
      // const titleToFind = item.title;
      if(item.id == index) {
        const swiper_slide_wrapper = document.getElementsByClassName('swiper-wrapper align-items-center')[0];
        for (let i = 0; i < item.imgs.length; i++) {
          let swiper_slide = document.createElement('div');
          swiper_slide.className = "swiper-slide";
          let slide_img = document.createElement('img');
          slide_img.src = "assets/img/portfolio/" + item.imgs[i];
          swiper_slide.appendChild(slide_img);
          swiper_slide_wrapper.appendChild(swiper_slide);
        }
        const header_title = document.getElementById('project_title');
        header_title.innerHTML = item.title;
        const title = document.getElementById('title');
        title.innerHTML = item.title;
        const category = document.getElementById('category');
        category.innerHTML = ": " + item.category;
        const company = document.getElementById('company');
        company.innerHTML = ": " + item.client;
        const projectLink = document.getElementById('link');
        projectLink.href = item.link;
        projectLink.innerHTML = item.link;
        const description = document.getElementById('description');
        description.innerHTML = item.description;
      }
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
}

$(document).ready(function(){
  const queryString  = window.location.search;
  const idMatch = queryString.match(/id=([^&]*)/);
  console.log("Is match? ", idMatch);
  let id = idMatch ? idMatch[1] : 1;
  id > 30 ? id = 1: parseInt(id);
  getDetails(id);
});