<template>
  <div class="views">
    <h1>Notre Etude</h1>
    <div class="content">
      <div class="description">
        <div class="row">
          <img src="../assets/jpg/bureau.jpg" alt="agence bureau" />
          <div class="box second">
            <h2>NOTACOEUR</h2>
            <p>
              Situé au coeur du quartier historique de la ville de Bourges, près
              de la Mairie de la Cathédrale classée UNESCO, Maîtres Jérome Bergerault, Edouard
              Brungs, Séverine Thomas, Albane Bernachez, Arthur Bergerault, Amélie Bedu-Sah
              ainsi que leurs collaborateurs vous accueillent dans leurs locaux
              situés 42 rue Moyenne à Bourges,<br />
              L’étude dispose d’un parking réservé à la clientèle, et vous
              pouvez utiliser le parking de la Mairie juste aux abords de notre
              étude<br /><br />
              Etude historique de Bourges, son essor remonte aux années trente
              par l’installation d’Henri Bergerault qui vit avec ses trois fils
              Jean, Francis, puis Bruno Bergerault s’associer avec lui, par la
              suite un petit-fils Jérôme, et plus récemment un arrière
              petit-fils Arthur.<br /><br />
              Mais l’étude adopte désormais le nom de NOTACOEUR, pour donner
              toute la dimension notariale à cet Office lié à la région Centre,
              au coeur de nos territoires, lié au personnage haut en couleur de
              Jacques Cœur, qui a fait la renommée de Bourges inventant le
              commerce international , et lié à notre profonde conception de
              notre métier où l’humain a encore une place primordiale.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="box first">
            <h2>Notre étude à votre service</h2>
            <p>
              L’étude se compose aujourd’hui de
              <em>six notaires</em> et d’une
              <em>trentaine de collaborateurs</em>, spécialisés en différents
              services, de vente, promotion immobilière, famille (succession,
              divorce, donation), droit des affaires, droit agricole,
              collectivités et institutionnels, négociation immobilière.<br /><br />
              Dynamiques, toutes nos équipes se veulent
              <em>à votre écoute</em> pour vous offrir un service de qualité,
              adapté à vos besoins, associant les valeurs traditionnelles de
              notre profession notariale, que sont la compétence, l’excellence,
              la déontologie et la confidentialité, avec vos préoccupations
              résolument actuelles, et les technologies modernes de la signature
              électronique, à distance et de la visioconférence.<br /><br />
              Nous sommes donc <em>à votre disposition</em>, pour vous
              accompagner en tant qu’interlocuteur à la fois pluridisciplinaire
              et spécialisé afin de vous donner
              <em>le meilleur conseil</em> dans les moments importants de votre
              vie, personnelle ou professionnelle.<br /><br />
              Nous serons en mesure de vous apporter les avis nécessaires sur la
              portée tant juridique que fiscale de vos engagements, pour
              <em>vous aider à faire des chois les plus éclairés</em>.
            </p>
          </div>
          <img src="../assets/jpg/tableau.jpg" alt="agence tableau" />
        </div>
      </div>
      <div class="section">
        <h2>Le notaire</h2>
        <div class="gallery">
          <div class="card">
            <h3>
              <!-- <img src="~/assets/svg/livre.svg" alt="agence bibliothèque" /> -->
              Autorité publique
            </h3>
            <p>
              Le notaire est détenteur de l’autorité publique, ayant pour
              mission de rédiger et recevoir des actes authentiques, leur
              conférant une force probatoire et exécutoire incontestable.
            </p>
          </div>
          <div class="card">
            <h3>
              <!-- <img src="~/assets/svg/businessman.svg" alt="picto homme d'affaire" /> -->
              Officier public
            </h3>
            <p>
              Le notaire est un officier public, représentant de l’Etat, ayant
              ainsi une mission de service public de sécuriser les actes et
              contrats.
            </p>
          </div>
          <div class="card">
            <h3>
              <!-- <img src="~/assets/svg/lighthouse.svg" alt="picto phare" /> -->
              Indépendant
            </h3>
            <p>
              Le notaire est indépendant, conseillant au mieux ses clients, tant
              sur le plan personnel que professionnel.
            </p>
          </div>
          <div class="card">
            <h3>
              <!-- <img
								src="~/assets/svg/balance-balance.svg"
								alt="picto balance"
							/> -->
              Connaissance juridique
            </h3>
            <p>
              Le notaire a donc su maîtriser depuis toujours une connaissance
              juridique, confrontée à la pratique des personnes et des biens,
              pour être le témoins et l’accompagnateur de plus de vingt millions
              de clients par ans, toujours avec disponibilité et
              confidentialité.
            </p>
          </div>
          <div class="card">
            <h3>
              <!-- <img src="~/assets/svg/juge.svg" alt="picto juge" /> -->
              Juge
            </h3>
            <p>Le notaire est un juge de l’amiable.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title:
      'Notre étude notarial Bruno BERGERAULT - Jérôme BERGERAULT -  Pierre-Olivier DHALLUIN - Edouard BRUNGS à BOURGES CEDEX',
    meta: [
      {
        hid: 'notre etude',
        name: 'description',
        content: "Présentation de l'étude notariale NOTACOEUR à Bourges",
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 60px 16px 10px 16px;
  color: var(--main);
}
p {
  text-align: justify;
}
.description {
  background-color: #eeeeee;
  @media screen and (min-width: 720px) {
    padding: 20px;
  }
  .box {
    @media screen and (min-width: 720px) {
      text-align: center;
      padding: 40px 20px;
      margin: auto;
      position: relative;
      background-color: #fff;
    }
    h2 {
      margin-top: 20px;
      text-align: center;
    }
    p {
      font-weight: 300;
      font-size: 12px;
      margin: 16px;
      margin-bottom: 30px;
      em {
        font-style: normal;
        color: var(--main);
        font-weight: normal;
      }
      @media screen and (min-width: 720px) {
        font-size: 14px;
        // height: 340px;
        &.first {
          left: 40px;
        }
        &.second {
          right: 40px;
        }
      }
      @media screen and (min-width: 1000px) {
        // height: 400px;
        font-size: 16px;
      }
    }
  }
  .row:first-child .box {
    background-color: var(--main);
    color: white;
    h2 {
      color: white;
    }
    em {
      font-weight: normal;
      font-style: normal;
      color: var(--secondary);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }
  .row {
    display: flex;
    max-height: 600px;
    @media screen and (max-width: 720px) {
      max-height: none;
      flex-direction: column;
      &:nth-child(2n) {
        flex-direction: column-reverse;
      }
    }
  }
  img {
    width: 33%;
    object-fit: contain;
    position: relative;
    @media screen and (max-width: 720px) {
      width: 100%;
      position: static;
    }
  }
}
.section {
  background-color: #e0e0e0;
  padding: 10px;
  h2 {
    text-align: center;
  }
}
.gallery {
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: var(--main);
    padding: 16px;
    margin: 10px;
    width: calc(20% - 20px);
    height: calc(20vw - 24px);
    @media screen and (max-width: 1400px) {
      width: calc(33% - 20px);
      height: calc(33vw - 36px);
    }
    @media screen and (max-width: 1000px) {
      width: calc(50% - 30px);
      height: calc(50vw - 40px);
    }
    @media screen and (max-width: 720px) {
      width: calc(100% - 20px);
      height: auto;
      padding-bottom: 30px;
    }
    h3 {
      font-family: serif;
      text-align: center;
      font-family: serif;
      margin-bottom: 10px;
      font-size: 20px;
      @media screen and (min-width: 720px) {
        margin-bottom: 0;
        font-size: 30px;
      }
      @media screen and (min-width: 1400px) {
        font-size: 20px;
      }
      @media screen and (min-width: 2000px) {
        font-size: 30px;
      }
    }
    p {
      margin: auto 0;
      font-weight: 300;
      @media screen and (min-width: 720px) {
        font-size: 20px;
      }
      @media screen and (min-width: 1400px) {
        text-align: center;
        font-size: 16px;
      }
      @media screen and (min-width: 1600px) {
        font-size: 20px;
      }
      @media screen and (min-width: 2000px) {
        line-height: 40px;
      }
    }
  }
}
.last-text {
  margin-bottom: 60px;
}
</style>
