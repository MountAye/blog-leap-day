{% for post in site.posts %}
<section>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h2>{{ post.title }}</h2>
    <p>{{ post.date | date: "%Y 年 %-m 月 %-d 日" }} | {% for kw in post.keywords %}<code>.{{kw}}</code>{% endfor %}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
  </a>
</section>
{% endfor %}