function formatUrl() {
  const url = document.querySelector('input[type="text"]').value;
  const id = url.substr(url.indexOf('=') + 1, 42)
  const template = `https://img.youtube.com/vi/${id}/hqdefault.jpg`

  return template
}

const preventDefault = event => event.preventDefault();

const getThumbnail = () => {
  const thumbnailUrl = formatUrl();
  const img = document.querySelector('img')
  const thumbContainer = document.querySelector('.thumb-container')
  thumbContainer.classList.add('active')
  img.setAttribute('src', thumbnailUrl)
}



