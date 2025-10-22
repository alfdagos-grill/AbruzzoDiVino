---
layout: default
title: Novità
---

## Novità ed Eventi

{% for post in site.posts %}
<article class="news-card">
  <div class="news-content">
    <span class="news-date">{{ post.date | date: "%B %Y" }}</span>
    <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
    <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
  </div>
</article>
{% endfor %}
