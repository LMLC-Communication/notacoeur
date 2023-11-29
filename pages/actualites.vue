<template>
	<div v-if="articles">
		<h1>Actualités</h1>
		<div v-for="article in articles" :key="article.id" class="card">
			<ArticleCard :article="article.acf" />
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title: 'Actualités',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: "Actualités liées à l'étude notariale de Bourges",
			},
		],
	},
	data() {
		return {
			articles: this.$store.state.articles,
			retracted: true,
			textSize: 200,
		}
	},
	async fetch() {
		this.articles = await fetch(
			'https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/posts?per_page=1000'
		).then((res) => res.json())
	},
	fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
.card {
	margin: 20px;
	padding: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.1);
	h2 {
		font-family: serif;
	}
}
</style>