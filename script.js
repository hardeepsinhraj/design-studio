const designs = [
  'assets/designs/1.jpg',
  'assets/designs/2.jpg',
  'assets/designs/3.jpg',
  'assets/designs/4.jpg',
  'assets/designs/5.jpg',
  'assets/designs/6.jpg'
];

const gallery = document.getElementById('gallery');

designs.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Design work';
  gallery.appendChild(img);
});
