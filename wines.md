---
layout: default
title: Cantine & Vini
---

## Le Nostre Cantine

Qui trovi una selezione delle cantine presenti nel portale. Clicca sul nome per la scheda dettagliata.

<div class="cantine-grid">
{% for cantina in site.cantine %}
	<article class="cantina-card">
		<div class="card-content">
			<h4><a href="{{ cantina.url | relative_url }}">{{ cantina.title }}</a></h4>
			<p class="card-description">{% if cantina.excerpt %}{{ cantina.excerpt }}{% else %}{{ cantina.content | strip_html | truncate: 140 }}{% endif %}</p>
			<p class="provincia">Provincia: {{ cantina.provincia }}</p>
			<a href="{{ cantina.url | relative_url }}" class="btn btn--secondary">Scopri di più</a>
		</div>
	</article>
{% endfor %}
</div>

## I Nostri Vini

Una panoramica delle principali tipologie vinicole abruzzesi presenti sul sito:

- Montepulciano d'Abruzzo DOC — Rosso strutturato e intenso
- Montepulciano Colline Teramane DOCG — Eccellenza di Teramo
- Trebbiano d'Abruzzo DOC — Bianco fresco e aromatico
- Cerasuolo d'Abruzzo DOC — Rosato elegante
- Pecorino — Vitigno antico, aromatico
- Passerina — Bianco fruttato, ideale con pesce
