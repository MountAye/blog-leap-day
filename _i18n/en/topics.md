{% assign category = site.data.category %}
{% assign length = category | size | minus: 1 %}
<!-- <section id="word-cloud">

</section> -->

{% for i in (0..length) %}
  {% assign cate = category[i] %}
  <section>
    <h2>.{{ cate.ext }} | {{ cate.name }}</h2>
    <ul>
    {% for post in site.posts %}
      {% if post.keywords contains cate.ext %}
        <li>
          <a href="{{ post.url | prepend:site.baseurl }}">
            {{ post.title }}
          </a>
        </li>
      {% endif %}
    {% endfor %}
    </ul>
  </section>
{% endfor %}
