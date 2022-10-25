<template>
	<div>
		<h1>Accueil</h1>
		<video loop muted autoplay preload="auto" playsinline>
			<source
				src="https://backoffice.notacoeur-bourges.notaires.fr/wp-content/uploads/2021/11/video-notacoeur.mp4"
				type="video/mp4"
			/>
			<!-- <source src="~/assets/videos/video notacoeur.webm" type="video/webm" /> -->
			Votre navigateur ne supporte pas la balise video.
		</video>
		<div class="numbers-section">
			<div class="group">
				<div class="single">
					<h2><number :value="110" /></h2>
					<p>Années d'existence</p>
				</div>
				<div class="single">
					<h2><number :value="6" /></h2>
					<p>Notaires</p>
				</div>
			</div>
			<div class="group">
				<div class="single">
					<h2><number :value="30" /></h2>
					<p>Collaborateurs</p>
				</div>
				<div class="single">
					<h2><number :value="2000" /></h2>
					<p>Actes par an</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title:
			'Notaire à BOURGES CEDEX (18), Office notarial de Bruno BERGERAULT - Jérôme BERGERAULT -  Pierre-Olivier DHALLUIN - Edouard BRUNGS',
		meta: [
			{
				hid: 'accueil',
				name: 'description',
				content: 'Etude notariale NOTACOEUR à Bourges',
			},
		],
	},
	async fetch() {
		const articles = await fetch(
			'https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/posts?per_page=1000'
		).then((res) => res.json())
		this.$store.commit('setArticles', articles)

		const data = await fetch(
			'httpS://api.notacoeur-bourges.notaires.fr/'
		).then((res) => res.json())
		this.$store.commit('setAnnonces', data.response.CrpCen.Clef)

		const personnes = await fetch(
			'https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/notaires?per_page=1000&order=asc'
		).then((res) => res.json())
		this.$store.commit('setEquipe', personnes)

		const competences = await fetch(
			'https://backoffice.notacoeur-bourges.notaires.fr/wp-json/acf/v3/competences?per_page=1000&order=asc'
		).then((res) => res.json())
		this.$store.commit('setCompetences', competences)
	},
}
</script>

<style lang="scss" scoped>
video {
	width: 100%;
}
.numbers-section {
	margin: 50px 0;
	background-color: var(--main);
	color: var(--light);
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
	padding: 24px;
	.group {
		display: flex;
		flex-direction: row;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		.single {
			text-align: center;
			margin: 20px 0;
			transition: transform 0.2s;
			h2 {
				font-size: 60px;
			}
			p {
				font-size: 24px;
			}
			&:not(:hover) {
				transform: scale(0.95);
			}
		}
	}
}
</style>