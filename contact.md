---
layout: default
title: Contatti
---

## Contatti

Via dei Vigneti 1

66100 Chieti (CH)

Tel: +39 0871 123456

Email: info@abruzzodivino.it

### Richiedi informazioni

Questo modulo è una versione statica: per abilitare l'invio aggiungi un provider di form (Netlify Forms, Formspree o simili) o integralo nel tuo backend.

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="contact-form">
  <input type="hidden" name="form-name" value="contact">
  <p class="hidden"><label>Don’t fill this out if you're human: <input name="bot-field"></label></p>

  <label for="name">Nome</label>
  <input id="name" name="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>

  <label for="message">Messaggio</label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <button class="btn btn--primary" type="submit">Invia</button>

  <noscript>
    <p>Per inviare il messaggio abilita JavaScript o contattaci via email: <a href="mailto:info@abruzzodivino.it">info@abruzzodivino.it</a></p>
  </noscript>
</form>
