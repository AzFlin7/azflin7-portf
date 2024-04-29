fetch('assets/projectDetail.json')
    .then(response => response.json())
    .then(data => {
        // Access the keys and values of the JSON data
      data.forEach(item => {
        // const titleToFind = item.title;
        const portfolio_container = document.getElementsByClassName('portfolio-container')[0];
        const portfolio_item = document.createElement('div');
        portfolio_item.className = "col-lg-4 col-md-6 portfolio-item " + item.filter
        const portfolio_wrap = document.createElement('div');
        portfolio_wrap.className = "portfolio-wrap";
        const imgElement = document.createElement('img');
        imgElement.src = "assets/img/portfolio/" + item.img;
        imgElement.className = "img-fluid";
        const portfolio_links = document.createElement('div');
        portfolio_links.className = "portfolio-links";
        // const shortLink = document.createElement('a');
        // shortLink.href = "assets/img/portfolio/"+item.img;
        // shortLink.setAttribute('data-gallery', "portfolioGallery");
        // shortLink.className = "portfolio-lightbox";
        // shortLink.title = item.title;
        // const shortIcon = document.createElement('i');
        // shortIcon.className = "bx bx-plus";
        // shortLink.appendChild(shortIcon);
        const detailLink = document.createElement('a');
        detailLink.href = "portfolio-details.html?id=" + item.id;
        detailLink.title = "More Details";
        const detailIcon = document.createElement('i');
        detailIcon.className = "bx bx-link";
        detailLink.appendChild(detailIcon);
        // portfolio_links.appendChild(shortLink);
        portfolio_links.appendChild(detailLink);
        portfolio_wrap.appendChild(imgElement);
        portfolio_wrap.appendChild(portfolio_links);
        portfolio_item.appendChild(portfolio_wrap);

        portfolio_container.appendChild(portfolio_item);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
