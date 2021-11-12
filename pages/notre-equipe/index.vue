<template>
  <div>
    <h1>Notre Equipe</h1>
    <img
      class="featured"
      src="../../assets/jpg/Notaires.jpg"
      alt="équipe des notaires"
    />
    <div class="notaires" v-if="notaires">
      <h2>Les Notaires</h2>
      <hr />
      <div class="gallery">
        <!-- :to="`/notre-equipe/${notaire.id}`" -->
        <NuxtLink
          to=""
          v-for="notaire in notaires.filter(
            (notaire) => notaire.acf.profession === 'notaire'
          )"
          :key="notaire.id"
          class="card"
        >
          <img :src="notaire.acf.image" alt="notaire" class="notaire" />
          <img
            src="../../assets/jpg/logoNotacoeur.jpg"
            alt="Logo NOTACOEUR"
            class="hover-logo"
          />
          <h3 :class="far(notaire)">
            {{ notaire.acf.prenom }} {{ notaire.acf.nom }}
          </h3>
          <p>{{ notaire.acf.label_profession }}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="clercs" v-if="clercs">
      <h2>Les Clercs de Notaires</h2>
      <hr />
      <div class="gallery">
        <!-- :to="`/notre-equipe/${clerc.id}`" -->
        <NuxtLink to="" v-for="clerc in clercs" :key="clerc.id" class="card">
          <img :src="clerc.acf.image" alt="clerc" class="clerc" />
          <img
            src="../../assets/jpg/logoNotacoeur.jpg"
            alt="Logo NOTACOEUR"
            class="hover-logo"
          />
          <h3 class="nom">{{ clerc.acf.prenom }} {{ clerc.acf.nom }}</h3>
          <p>{{ clerc.acf.label_profession }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Notre équipe',
    meta: [
      {
        hid: 'notre équipe',
        name: 'description',
        content:
          "Equipe de notaires et clercs de notaires pour l'étude notariale NOTACOEUR à Bourges",
      },
    ],
  },
  data() {
    return {
      personnes: this.$store.state.equipe,
    }
  },
  methods: {
    far(notaire) {
      if ((notaire.acf.prenom + notaire.acf.nom).length > 20) {
        return 'far-text'
      }
      return ''
    },
  },
  computed: {
    notaires() {
      return this.personnes
        .filter((notaire) => notaire.acf.profession === 'notaire')
        .sort((a, b) => {
          return parseInt(a.acf.position) - parseInt(b.acf.position)
        })
    },
    clercs() {
      return this.personnes
        .filter((notaire) => notaire.acf.profession === 'clerc de notaire')
        .sort((a, b) => {
          return parseInt(a.acf.position) - parseInt(b.acf.position)
        })
    },
  },
  async fetch() {
    this.personnes = await fetch(
      'https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/notaires?per_page=1000&order=asc'
    ).then((res) => res.json())
    this.$store.commit('setEquipe', this.personnes)
  },
}
</script>

<style lang="scss" scoped>
img.featured {
  width: 100%;
}
.notaires {
  margin: 30px 0;
  background: rgb(238, 238, 238);
  width: 100vw;
}
.clercs {
  margin-top: -30px;
  background: rgb(224, 224, 224);
}
.notaires,
.clercs {
  width: 100%;
  h2 {
    padding: 30px 0;
    text-align: center;
    color: var(--main);
    font-size: 30px;
  }
  hr {
    width: calc(100% - 32px);
    margin: 16px auto;
    border: 1px solid lightgray;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 40px;
    .card {
      text-align: right;
      margin-bottom: -10px;
      transform: scale(0.9);
      img {
        object-fit: cover;
      }
      img.clerc,
      img.notaire {
        width: 100%;
        transition: filter 0.2s;
      }
      img.hover-logo {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 63px;
        transition: left 100ms;
      }
      p {
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        text-decoration: none;
        color: var(--main);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
      }
      h3 {
        text-transform: uppercase;
        font-size: 20px;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 57px;
        z-index: 1;
        padding: 20px 8px;
        // box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
        color: var(--main);
        background-color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
        &.far-text {
          letter-spacing: -1px;
        }
      }
      @media screen and (min-width: 1000px) {
        &:not(:hover) > {
          img.notaire,
          img.clerc {
            // filter: brightness(0.9) hue-rotate(-35deg);
            filter: brightness(0.9);
            &:after {
              position: absolute;
              content: '';
              display: block;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: rgba(55, 70, 188, 0.4);
              mix-blend-mode: multiply;
            }
          }
          img.hover-logo {
            left: 57px;
          }
        }
      }
      margin: 10px;
      width: calc(100% / 6 - 10px * 6);
      @media screen and (max-width: 2500px) {
        margin: 10px 5vw;
        width: calc(100% / 3 - 5vw * 3);
        h3 {
          font-size: 14px;
        }
        img.hover-logo {
          height: 57px;
        }
        h3,
        &:not(:hover) > img.hover-logo {
          left: 56px;
        }
      }
      @media screen and (max-width: 1500px) {
        margin: 10px 3vw;
        width: calc(100% / 3 - 3vw * 3);
      }
      @media screen and (max-width: 1120px) {
        margin: 10px;
        width: calc(100% / 3 - 10px * 3);
      }
      @media screen and (max-width: 1000px) {
        width: calc(100% / 2 - 10px * 2);
        h3 {
          font-size: 18px;
        }
        &:not(:hover) > img.hover-logo {
          left: 0;
        }
      }
      @media screen and (max-width: 700px) {
        width: calc(100% - 10px);
        h3 {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
