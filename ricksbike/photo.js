const photos = {
  'north-cascades': { title: 'North Cascades Traverse', meta: 'August 2026 · 80 miles · 6,300 ft climbing', file: 'north-cascades.jpg', alt: 'Road through the North Cascades', description: 'A gravel and pavement adventure across Washington’s North Cascades.' },
  ramrod: { title: 'RAMROD', meta: 'Ride Around Mount Rainier in One Day', file: 'ramrod.jpg', alt: 'Cyclists riding near Mount Rainier', description: '150 miles and 10,000 feet of climbing with the Redmond Cycling Club.' },
  stp: { title: 'Seattle to Portland', meta: 'STP · 2013–2019, 2024', file: 'stp.jpg', alt: 'Cyclists on the Seattle to Portland ride', description: 'A classic Pacific Northwest ride from Seattle to Portland.' },
  'flying-wheels': { title: 'Flying Wheels', meta: '2017, 2018, 2022–2026', file: 'flying-wheels.jpg', alt: 'Cycling on a Pacific Northwest road', description: 'Rolling roads and big skies around the Eastside.' },
  'redmond-club': { title: 'Redmond Cycling Club', meta: 'Community on two wheels', file: 'redmond-club.jpg', alt: 'Redmond Cycling Club riders', description: 'The people and community behind some of the Northwest’s best rides.' },
  'mount-baker': { title: 'Mount Baker Hill Climb', meta: '2019 · 2023', file: 'mount-baker.jpg', alt: 'Mount Baker viewed from a cycling route', description: 'Two memorable climbs beneath Mount Baker.' }
};
const key = new URLSearchParams(location.search).get('photo') || 'north-cascades';
const photo = photos[key] || photos['north-cascades'];
document.title = `${photo.title} · Rick's Cycling Journal`;
document.querySelector('#photo-meta').textContent = photo.meta;
document.querySelector('#photo-title').textContent = photo.title;
document.querySelector('#photo-description').textContent = photo.description;
const image = document.querySelector('#photo-image');
image.src = `photos/${photo.file}`;
image.alt = photo.alt;
