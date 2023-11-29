<template>
	<div v-if="competence">
		<h1>{{ competence.acf.titre }}</h1>
		<div v-html="competence.acf.contenu" class="content"></div>
		<section>
			<h2>Nos autres compétences</h2>
			<GrilleId>
				<NuxtLink
					v-for="comp in competences"
					:key="comp.id"
					:to="`/nos-competences/${comp.id}`"
					class="element"
				>
					<img
						:src="comp.acf.image.sizes.medium_large"
						:alt="comp.acf.image.filename"
					/>
					<h2>{{ comp.acf.titre }}</h2>
				</NuxtLink>
			</GrilleId>
		</section>
	</div>
</template>

<script>
export default {
	head: {
		title: 'Nos compétences',
		meta: [
			{
				hid: 'nos compétences',
				name: 'description',
				content:
					"Présentation des compétences de l'étude notariale NOTACOEUR à Bourges",
			},
		],
	},
	computed: {
		competence() {
			return this.$store.state.competences.find(
				(competence) =>
					competence.id === parseInt(this.$route.params.id)
			)
		},
		competences() {
			return this.$store.state.competences.filter(
				(competence) =>
					competence.id !== parseInt(this.$route.params.id)
			)
		},
	},
	async fetch() {
		this.competences = await fetch(
			`https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/competences`
		).then((res) => res.json())
		this.competence = this.competences.find(
			(competence) => competence.id === parseInt(this.$route.params.id)
		)
		this.competences = this.competences.filter(
			(competence) => competence.id !== parseInt(this.$route.params.id)
		)
	},
	fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
.content {
	margin: 40px;
	margin-top: 0;
	margin-bottom: 100px;
}
section {
	color: var(--main);
	background-color: rgb(224, 224, 224);
	h2 {
		font-size: 30px;
		padding: 40px;
		padding-bottom: 0;
	}
}
</style>