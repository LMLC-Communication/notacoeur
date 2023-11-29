<template>
	<div>
		<h1>Nos Compétences</h1>
		<Grille>
			<NuxtLink
				v-for="competence in competences"
				:key="competence.id"
				:to="`/nos-competences/${competence.id}`"
				class="element"
			>
				<img
					:src="competence.acf.image.sizes.medium_large"
					:alt="competence.acf.image.filename"
				/>
				<h2>{{ competence.acf.titre }}</h2>
			</NuxtLink>
		</Grille>
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
	data() {
		return {
			competences: this.$store.state.competences,
		}
	},
	async fetch() {
		this.competences = await fetch(
			'https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/competences?per_page=1000&order=asc'
		).then((res) => res.json())
		this.$store.commit('setCompetences', this.competences)
	},
	fetchOnServer: false,
}
</script>