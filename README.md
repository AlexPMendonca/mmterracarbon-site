# MM Terra Carbon — site

Site institucional da MM Terra Carbon, consultoria em projetos de carbono e sustentabilidade no meio rural.

Versão estática (HTML + CSS + JS), pronta para o GitHub Pages. O contato é feito pelo WhatsApp, então não há servidor nem banco de dados.

## Estrutura

```
index.html            página única do site
static/css/site.css   estilos
static/js/site.js     comportamento do cabeçalho ao rolar a página
static/assets/        logo, favicon, fotos e vídeo do topo
```

## Como editar

- **Textos:** direto no `index.html`.
- **WhatsApp:** procure `wa.me/5535988857323` no `index.html` (são dois links: o botão de contato e o botão flutuante).
- **Cores e visual:** variáveis no início de `static/css/site.css` (`--primary` é o verde).

## Visualizar no computador

Abra o `index.html` no navegador, ou rode na pasta:

```bash
python -m http.server 8000
```

e acesse http://localhost:8000
