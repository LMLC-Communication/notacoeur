<template>
  <footer>
    <div id="contact">
      <div class="infos">
        <div class="section">
          <h1>Nous contacter</h1>
          <h2>Office Notarial</h2>
        </div>
        <hr />
        <div class="section">
          <h2>Notaires Associés</h2>
          <p>
            Jérôme Bergerault | Arthur Bergerault | Séverine Thomas | Edouard
            Brungs
          </p>
          <br />
          <h2>Notaires Salariés</h2>
          <p>Albane Bernachez | Amélie Bedu-Sah</p>
        </div>
        <hr />
        <div class="section">
          <p>
            42 Rue Moyenne Bourges Cedex<br />
            <a href="tel:0248240277">02 48 24 02 77</a><br />
            <a href="mailto:scp.bergerault@notaires.fr"
              >scp.bergerault@notaires.fr</a
            >
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2716.8951047854243!2d2.3975499!3d47.0815206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1610024073814!5m2!1sfr!2sfr"
        frameborder="0"
        style="border: 0"
        allowfullscreen="true"
        aria-hidden="false"
        tabindex="0"
      />
    </div>
    <div class="foot">
      <span>© {{ new Date().getFullYear() }}</span>
      <!-- <NuxtLink to="/tarifs.pdf">Tarifs de l'étude</NuxtLink> -->
      <NuxtLink to="/tarifs-de-l-etude">Tarifs de l'étude</NuxtLink>
      <NuxtLink to="/mentions-legales">Mentions Légales</NuxtLink>
      <NuxtLink to="/politique-de-confidentialite">
        Politique de Confidentialité
      </NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  overflow: hidden;
  text-align: center;
  a {
    text-decoration: none;
    color: var(--main);
    font-weight: bold;
  }
}
hr {
  width: calc((100% - 32px) * 0.95);
  margin: auto;
  height: 1px;
  border: none;
  background-color: var(--light);
}
iframe {
  width: 50vw;
  min-height: 300px;
  padding: 16px;
  transition: transform 0.2s;
  &:not(:hover) {
    transform: scale(0.95);
  }
}
.section {
  margin: 20px;
  a {
    color: white;
  }
}
h2 {
  font-size: 40px;
}
p {
  font-size: 20px;
}
.foot {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
#contact {
  background-color: var(--footer);
  color: var(--light);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: var(--light);
    font-size: 28px;
    margin-left: 0;
  }
  h2:not(.first) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 22px;
  }
}
@media only screen and (max-width: 740px) {
  #contact {
    flex-wrap: wrap;
  }
  iframe {
    width: 100%;
    transform: scale(1);
  }
}
@media only screen and (max-width: 580px) {
  .foot {
    flex-direction: column;
    * {
      padding: 10px 0;
    }
  }
}
</style>
