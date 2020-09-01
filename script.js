const classes = Array.from(document.querySelectorAll('.class'));
console.log(classes)

const links_wrappers = classes.map((c) => c.querySelector('.links-wrapper'))
console.log(links_wrappers)

fetch("data.json")
  .then(response => response.json())
  .then(json => {

    classes.forEach((c, i) => {
      c.querySelector('.class-title').innerText = json.classes[i].name;
      c.querySelector('.class-description').innerText=json.classes[i].description;
      
    })
    
    links_wrappers.forEach((w, i) => {
      for(let j = 0 ; j < json.classes[i].href.length; j++){

        // 조립
        const link = document.createElement('div');
        link.classList.add('link');
        const btn = document.createElement('button');
        btn.classList.add('link-btn');
        btn.innerText= json.classes[i].href[j].name;
        

        // 버튼 클릭 기능
        btn.onclick = () => {
          window.open(json.classes[i].href[j].url);
        }
        link.appendChild(btn);
        w.appendChild(link);
      }
    })


  });