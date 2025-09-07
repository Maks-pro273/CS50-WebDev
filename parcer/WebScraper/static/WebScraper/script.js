document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#domain_form").onsubmit = function(e) {
    e.preventDefault();

    const Domain = document.querySelector("#link-input").value;
    fetch("parse", {
      method: "POST",
      body: JSON.stringify({url: Domain})
    })
    .then(response => response.text())
    .then(html => Parser(html))
    .catch(error => console.log(error));
    }
})

function Parser(html){
  // Парсинг
  const result_block = document.querySelector("#Result")
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const images = doc.querySelectorAll("img");
  images.forEach(img => {
    if (!img.hasAttribute('src') && img.hasAttribute('data-src')) {
      img.setAttribute('src', img.getAttribute('data-src'));
    }
  });

  // Очищуємо результати
  result_block.innerHTML = '';

  // Витягуємо параграфи
  const isMedia = ['img', 'hr']
  const isText = ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote']
  const text_elements = doc.querySelectorAll(`${isText.join(", ")}, ${isMedia.join(", ")}`);
  console.log('Found text_elements:', text_elements.length);
  
  text_elements.forEach(element => {
    const tag = element.tagName.toLowerCase()
    const isMediaTag = isMedia.includes(tag)
    const isTextTag = isText.includes(tag)

    if (isMediaTag) {
      const width = element.getAttribute('width')

      // Якщо є атрибути і вони малі (аватарки) — пропускаємо
      if (width && parseInt(width) <= 128) {
        return
      }
      result_block.appendChild(element.cloneNode(true))
    }

  // Фільтр для тексту
    if (isTextTag && element.textContent.trim().length > 0) {

      if (/^h[1-6]$/.test(tag)) {
        // Заголовок h1–h6 з непорожнім текстом
        result_block.appendChild(element);
      } else if (element.textContent.trim().length > 73) {
        // Інші текстові елементи (p, blockquote), якщо довгі
        result_block.appendChild(element);
      }
    }

  })

  // const mainContent = doc.body;
  // result_block.innerHTML = mainContent.innerHTML
}