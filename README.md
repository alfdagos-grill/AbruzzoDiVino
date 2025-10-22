# Abruzzo DiVino — Jekyll site

Questo repository contiene una conversione minimale del sito statico in un sito Jekyll razionalizzato.

Struttura principale:

- `_layouts/default.html` — layout principale
- `_includes/{head,header,footer}.html` — componenti riutilizzabili
- `assets/css/style.css` — foglio di stile principale (copiato dall'originale)
- `assets/js/app.js` — script principale (versione adattata)
- `index.md`, `wines.md`, `about.md`, `contact.md` — pagine principali

Prerequisiti locali:

- Ruby 2.7+ o 3.x
- Bundler (opzionale ma consigliato)

Installazione e avvio rapido:

1) Installa le gemme:

```bash
gem install bundler
bundle install
```

2) Avvia il server Jekyll in locale:

```bash
bundle exec jekyll serve --livereload
```

Il sito sarà disponibile tipicamente su `http://127.0.0.1:4000/`.

Verifiche utili:

- Vedere le cantine create come collection: visita `http://127.0.0.1:4000/wines/` (la pagina itera su `site.cantine`).
- Vedere i post (News): `http://127.0.0.1:4000/news/` e controlla `_posts/` per i file dei post.

Netlify (opzionale):

- Il form nella pagina `contact.md` è già configurato per Netlify Forms (ha `data-netlify="true"` e il campo `form-name`).
- Per pubblicare su Netlify: collega il repository, abilita `jekyll build` come comando di build (Netlify rileva automaticamente Jekyll), e il form funzionerà senza backend aggiuntivo. Controlla le submission nel pannello Netlify -> Forms.

Next steps tecnici raccomandati:

- Ottimizzare `assets/css/style.css` (minificazione, rimozione regole non usate).
- Aggiungere metadati SEO nelle front-matter delle pagine e usare `jekyll-seo-tag` (già presente nel Gemfile e nei plugin).
- Creare pagine individuali per le cantine con campi strutturati (indirizzo, orari, link social, immagini) nella collection `_cantine/`.

