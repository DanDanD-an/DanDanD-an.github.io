---
layout: page
-permalink: /Categories/
title: Categories
---

<section class="list">
    <h1 class="title">Categories</h1>

    {% assign tags_list = site.categories %}

    {% if tags_list.first[0] == null %}
        {% for categories in tags_list %}
            <a class="item" href="#{{ categories | slugify }}">{{ categories }}</a>
        {% endfor %}
    {% else %}
        {% for categories in tags_list %}
            <a class="item" href="#{{ categories[0] | slugify }}">{{ categories[0] }}</a>
        {% endfor %}
    {% endif %}

    {% assign tags_list = nil %}
</section>

<hr>

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">> {{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
<p></p>
</div>
