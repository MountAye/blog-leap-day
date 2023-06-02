var mainHeight = function() {
  var total = window.innerHeight;
  var sections = document.querySelectorAll('.outlined');
  
  sections.forEach(function(section) {
    section.style.height = 'auto';
    var sectionHeight = section.getBoundingClientRect().height;
    
    if (sectionHeight < total) {
      var margin = section.offsetHeight - section.clientHeight;
      section.style.height = total - margin - 20 + 'px';
    }
  });
};

window.addEventListener('resize', mainHeight);
document.addEventListener('DOMContentLoaded', function() {
  var outlinedHeadings = document.querySelectorAll('.outlined h1, .outlined h2, .outlined h3');
  var navList = document.querySelector('nav ul');

  outlinedHeadings.forEach(function(heading) {
    var tagName = heading.tagName.toLowerCase();
    var text = heading.textContent.trim();
    var id = text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    var listItem = document.createElement('li');
    listItem.className = 'tag-' + tagName;
    var link = document.createElement('a');
    link.href = '#' + id;
    link.textContent = text;
    listItem.appendChild(link);
    navList.appendChild(listItem);

    heading.setAttribute('id', id);
  });

  navList.querySelector('li:first-child a').parentElement.classList.add('active');

  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var position = document.querySelector(targetId).offsetTop - 190;
      window.scrollTo({ top: position, behavior: 'smooth' });
      navList.querySelectorAll('li a').forEach(function(a) {
        a.parentElement.classList.remove('active');
      });
      this.parentElement.classList.add('active');
    });
  });

  mainHeight();

  var images = document.querySelectorAll('img');
  images.forEach(function(image) {
    image.addEventListener('load', mainHeight);
  });
});
