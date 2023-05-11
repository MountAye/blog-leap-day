{% for post in site.posts %}
<section>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h2>{{ post.title }}</h2>
    <p>{{ post.date | date: "%b %-d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
  </a>
</section>
{% endfor %}