<template>
  <nav>
    <div class="top-container">
      <div></div>
      <div>
        <a href="#contact">Contact</a>
        <a
          href="https://www.mondossiernotaire.fr/Account/Login/"
          target="_blank"
          >Espace client</a
        >
      </div>
    </div>
    <div class="container">
      <div class="logo-collapse">
        <NuxtLink to="/">
          <img id="logo" src="~/assets/jpg/logo.jpg" alt="Logo NOTACOEUR" />
        </NuxtLink>
        <img
          id="collapse-icon"
          @click="toggleCollapse"
          src="~/assets/svg/CollapseMenu.svg"
          alt="Collapse menu"
        />
      </div>

      <transition name="transformX">
        <div class="menu" v-if="displayMenu">
          <NuxtLink to="/notre-etude">Notre étude</NuxtLink>
          <NuxtLink to="/notre-equipe">Notre équipe</NuxtLink>
          <NuxtLink to="/nos-competences">Nos compétences</NuxtLink>
          <NuxtLink to="/annonces-immobilieres">
            Annonces immobilières
          </NuxtLink>
          <NuxtLink to="/actualites">Actualités</NuxtLink>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      displayMenu: true,
      value: null,
    }
  },
  methods: {
    toggleCollapse() {
      this.displayMenu = !this.displayMenu
    },
    checkScreenSize() {
      if (window.matchMedia('screen and (max-width: 800px)').matches) {
        this.displayMenu = false
      } else {
        this.displayMenu = true
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  mounted() {
    this.checkScreenSize()
  },
}
</script>

<style lang="scss" scoped>
a {
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
#logo {
  max-width: 100%;
  width: 500px;
}
nav {
  margin: 0;
  padding: 0px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.top-container {
  display: flex;
  justify-content: space-around;
  max-height: 50px;
  padding: 20px;
  background-color: var(--main);
  a,
  a.nuxt-link-active {
    margin: 0 10px;
    font-weight: bold;
    color: var(--secondary);
  }
}
img {
  max-width: 80%;
  max-height: 120px;
  object-fit: contain;

  cursor: pointer;
  transition: transform 0.2s;
  &:not(:hover) {
    transform: scale(0.95);
  }
}
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  a {
    font-family: serif;
    font-size: 22px;
    font-weight: bold;
    color: var(--main);
    text-decoration: none;
    transition: color 0.2s, background-color 0.2s;
    margin: 4px 16px;
    padding: 10px;
    &:hover,
    &.nuxt-link-active {
      color: white;
      background-color: var(--main);
    }
  }
}
.container {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-align: left;
  }
}
#collapse-icon {
  object-fit: contain;
  visibility: hidden;
  width: 40px;
  position: absolute;
}
.top-container a {
  color: white;
}
@media screen and (max-width: 800px) {
  .container {
    flex-wrap: wrap;
  }
  .menu {
    display: flex;
    flex-direction: column;
  }
  .logo-collapse {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  #collapse-icon {
    position: static;
    visibility: visible;
    width: 40px;
  }
}
</style>
