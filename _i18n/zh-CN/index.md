<script type="text/javascript">
  function changeQuote(){
    var baseurl = "{{site.baseurl_root}}";
    var urlQuotes = baseurl + "/assets/data/quotes.json";
    $.ajax({
      url: urlQuotes,
      type: "GET",
      dataType: "JSON",
      success: function(msg){
        var quotes = msg;
        var i = Math.floor( Math.random()*(quotes.length) );
        var quote = quotes[i];
        document.getElementById("quoteLine").innerHTML = quote.text;
        document.getElementById("quoteAuthor").innerHTML = quote.author;
      },
      error: function(msg){alert(msg);}
    });
  };
  document.addEventListener("DOMContentLoaded", changeQuote);
</script>

<section>
<blockquote>
  <p id="quoteLine">当您启用 JavaScript 时，此处将随机显示一条格言。</p>
  <p>——<span id="quoteAuthor">阿掖山：一个博客</span></p>
</blockquote>
</section>

{% assign post = site.posts[0] %}
<section>
  <a href="{{ post.url | prepend:site.baseurl }}">
    <h1>{{ post.title }}</h1>
    <p>{{ post.date | date: "%b %-d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | tuncatewords: 80 }}</p>
  </a>
</section>

{% for i in (1..4) %}
{% assign post = site.posts[i] %}
<section>
  <a href="{{ post.url | prepend:site.baseurl }}">
    <h3>{{ post.title }}</h3>
    <p>{{ post.date | date: "%b %-d, %Y" }}</p>
  </a>
</section>
{% endfor %}
