---
pagination:
  data: collections.categorias
  size: 1
  alias: categoria
permalink: "/categorias/{{ categoria | slug }}/"
layout: layouts/pagina.liquid
---

<blockquote>
  <p>{{ categorias[ categoria ].descricao.ingles }}</p>
</blockquote>

<h2>Artigos na categoria "{{ categoria }}"</h2>
