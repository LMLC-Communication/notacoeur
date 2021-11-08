<template>
	<div class="vue">
		<h1>Notre Equipe</h1>
		<loader v-if="!notaire" />
		<div v-else class="detail">
			<div class="text">
				<h2>{{ notaire.acf.prenom }} {{ notaire.acf.nom }}</h2>
				<p v-html="notaire.acf.description" class="description"></p>
			</div>
			<img :src="notaire.acf.image" :alt="notaire.acf.name" />
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		notaire() {
			return this.$store.state.equipe.find(
				(personne) => personne.id === parseInt(this.$route.params.id)
			)
		},
	},
	async fetch() {
		this.notaire = await fetch(
			`https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/notaires/${this.$route.params.id}`
		).then((res) => res.json())
		// if (this.notaire) {
		// 	this.notaire.acf.description
		// }
	},
}
</script>

<style lang="scss" scoped>
.detail {
	display: flex;
	align-items: center;
	text-align: justify;
	justify-content: space-between;
	margin: 20px;
	.text {
		padding-right: 20px;
		h2 {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
			color: var(--main);
		}
	}
	img {
		height: 400px;
	}
}
@media screen and (max-width: 900px) {
	.detail {
		flex-direction: column-reverse;
		.text {
			padding: 20px 0;
		}
	}
}
</style>