---
layout: index
title: "Contact"
description: "Here are a few ways you can get in touch with me and see some of my work."
---

<div>
{% for c in site.data.contacts %}
<a class="button button-list" href="{{ c.link }}">{{ c.type }}</a>
{% endfor %}
</div>

