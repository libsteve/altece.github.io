---
layout: index
title: "Contact"
---

<p>
Here are a few ways you can get in touch with me and see some of my work.
</p>

<div>
{% for c in site.data.contacts %}
<a class="button button-list" href="{{ c.link }}">{{ c.type }}</a>
{% endfor %}
</div>

