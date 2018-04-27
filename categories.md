---
layout: page
-permalink: /categories/
title: Categories
---

<section class="list">
    <h1 class="title">Categories</h1>

    {% assign tags_list = site.categories %}

    {% if tags_list.first[0] == null %}
        {% for categories in tags_list %}
            <a class="item" href="#{{ categories | slugify }}">{{ categories }}</a>&nbsp;
        {% endfor %}
    {% else %}
        {% for categories in tags_list %}
            <a class="item" href="#{{ categories[0] | slugify }}" style = "text-decoration = none">{{ categories[0] }}</a>
        {% endfor %}
    {% endif %}

    {% assign tags_list = nil %}
</section>

<hr>

<section class="tag-list">
    {% for categories in site.categories  %}
    <h2 class="title" id="{{ categories[0] | slugify }}">> {{ categories[0] }}</h2>

    <ul class="list">
        {% assign pages_list = categories[1] %}
        {% for post in pages_list reversed %}
            {% if post.title != null %}
                {% if group == null or group == post.group %}
                    <li class="item">
                        <a class="url" href="{{ site.url }}{{ post.url }}">
                            <aside class="date"><time datetime="{{ post.date | date:"%d-%m-%Y" }}">{{ post.date | date: "%b %d %Y" }}</time></aside>
                            <h3 class="title">{{ post.title }}</h3>
                        </a>
                    </li>
                {% endif %}
            {% endif %}
        {% endfor %}
        {% assign pages_list = nil %}
        {% assign group = nil %}
    </ul>

    <div class="breaker"></div>
    {% endfor %}
</section>
