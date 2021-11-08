export const state = () => ({
  filter: [],
  order: 0,
  equipe: [],
  articles: [],
  competences: [],
  annonces: [],
  prix: { min: 0, max: 0 },
  surface: { min: 0, max: 0 },
  pieces: { min: 0, max: 0 },
})

export const mutations = {
  setFilter(state, value) {
    state.filter = value
  },
  setOrder(state, value) {
    state.order = value
  },
  setEquipe(state, value) {
    state.equipe = value
  },
  setArticles(state, value) {
    state.articles = value
  },
  setCompetences(state, value) {
    state.competences = value
  },
  setAnnonces(state, value) {
    state.annonces = value
  },
  setPrix(state, value) {
    state.prix = { min: value[0], max: value[1] }
  },
  setSurface(state, value) {
    state.surface = { min: value[0], max: value[1] }
  },
  setPieces(state, value) {
    state.pieces = { min: value[0], max: value[1] }
  },
}
