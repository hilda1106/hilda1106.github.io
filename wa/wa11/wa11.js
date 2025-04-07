const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.JPG','pic2.JPG', 'pic3.JPG', 'pic4.JPG', 'pic5.JPG'];
const alternative = { 'pic1.JPG' : 'snowy mountains','pic2.JPG' : 'sunset from the highway','pic3.JPG' : 'sunset from my house','pic4.JPG' : 'view of the mountains','pic5.JPG' : 'sunrise from my house'
}

/* Declaring the alternative text for each image file */

/* Looping through images */

for (const image of images) { const newImage = document.createElement('img');
    newImage.setAttribute('src',`/wa/wa11/img/${image}`);
    newImage.setAttribute('alt', alternative[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt; 
    });}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') { btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(4, 34, 67, 0.53)';
    } 
    else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }});