<template>
	<div>
		<h1>Annonces Immobilieres</h1>
		<div class="container">
			<loader v-if="!annonce['@attributes']" />
			<div v-else>
				<TagGallery v-if="annonce.Photo" :urls="annonce.Photo" />
				<div class="description">
					<div class="title">
						<div>
							<h2>{{ annonce.TitreParution }}</h2>
							<h4>
								{{ annonce['@attributes'].commune }} ({{
									annonce['@attributes'].cp
								}})
							</h4>
						</div>
						<div>
							<h3>
								{{ numberWithSpaces(Math.round(annonce.PVB)) }}€
							</h3>
							<p>
								Dont prix de vente :
								{{
									numberWithSpaces(Math.round(annonce.PNV))
								}}€<br />
								Dont HN* :
								{{
									numberWithSpaces(
										parseInt(annonce.PVB) -
											parseInt(annonce.PNV)
									)
								}}€ ({{
									round(
										((parseInt(annonce.PVB) -
											parseInt(annonce.PNV)) /
											parseInt(annonce.PVB)) *
											100,
										2
									)
										.toString()
										.replace('.', ',')
								}}
								%)<br />
								Charge acquéreur
							</p>
						</div>
					</div>
					<div class="bien">
						<h2>Description du bien</h2>
						<hr />
						<h3>Description de la propriété</h3>
						<p class="annonce">{{ annonce.AnnonceParution }}</p>
						<hr />
						<h3>Détails de la propriété</h3>
						<ul>
							<li v-if="parseInt(annonce.SurfaceHabitable)">
								Surface habitable de
								{{ parseInt(annonce.SurfaceHabitable) }}m²
							</li>
							<li v-if="parseInt(annonce.SurfaceTerrain)">
								Terrain de
								{{ parseInt(annonce.SurfaceTerrain) }}m²
							</li>
							<li
								v-if="
									annonce['@attributes'].terrasse ===
										'true' &&
									parseInt(annonce.SurfaceTerrasse)
								"
							>
								Terrasse de {{ annonce.SurfaceTerrasse }}m²
							</li>
							<li v-if="parseInt(annonce.NbrePiece) === 1">
								1 pièce
							</li>
							<li v-else-if="parseInt(annonce.NbrePiece) > 1">
								{{ annonce.NbrePiece }} pièces
							</li>
							<li v-if="parseInt(annonce.NbrePiece) === 1">
								1 chambre
							</li>
							<li v-else-if="parseInt(annonce.NbreChambre) > 1">
								{{ annonce.NbreChambre }} chambres
							</li>
							<li v-if="annonce.NatureChauffage">
								Chauffage : {{ annonce.NatureChauffage }}
							</li>
							<li
								v-if="
									annonce['@attributes'].aRenover === 'true'
								"
							>
								A rénover
							</li>
							<li
								v-if="
									annonce['@attributes'].plainPied === 'true'
								"
							>
								Plain pied
							</li>
							<li v-if="annonce['@attributes'].garage === 'true'">
								Garage
							</li>
							<li
								v-if="annonce['@attributes'].parking === 'true'"
							>
								Parking
							</li>
							<li v-if="annonce['@attributes'].etage === 'true'">
								Etage
							</li>
							<li
								v-if="
									annonce['@attributes'].cheminee === 'true'
								"
							>
								Cheminée
							</li>
							<li
								v-if="annonce['@attributes'].piscine === 'true'"
							>
								Piscine
							</li>
							<li v-if="annonce['@attributes'].balcon === 'true'">
								Balcon
							</li>
							<li
								v-if="
									annonce['@attributes'].ascenseur === 'true'
								"
							>
								Ascenseur
							</li>
						</ul>
						<hr />
						<h3>Diagnostic énergétique</h3>
						<div class="diagnostics">
							<div
								v-if="
									annonce.DpeNrj && annonce.DpeNrj.length > 0
								"
							>
								<h4>Diagnostic de Performance Énergétique</h4>
								<DPE :value="annonce.DpeNrj" />
							</div>
							<div v-else>
								<h4>
									Pas de Diagnostic de Performance Énergétique
								</h4>
							</div>
							<div
								v-if="
									annonce.DpeGes && annonce.DpeGes.length > 0
								"
							>
								<h4>Diagnostic de Gaz à Effet de Serre</h4>
								<GES :value="annonce.DpeGes" />
							</div>
							<div v-else>
								<h4>
									Pas de Diagnostic de Gaz à Effet de Serre
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		annonce() {
			return this.$store.state.annonces.find(
				(annonce) => annonce['@attributes'].id === this.$route.params.id
			)
		},
	},
	async fetch() {
		const data = await fetch(
			'https://api.notacoeur-bourges.notaires.fr/'
		).then((res) => res.json())
		this.annonce = data.response.CrpCen.Clef.find(
			(annonce) => annonce['@attributes'].id === this.$route.params.id
		)
	},
	methods: {
		numberWithSpaces(x) {
			try {
				return x
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
					.replace('.', ',')
			} catch {
				return 0
			}
		},
		round(num, dec) {
			return Number(
				Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
			)
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	text-align: center;
}
h2,
h3,
h4,
h5,
h6 {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
}
.description {
	max-width: calc(100vw - 100px);
	margin: 0 auto;
	margin-bottom: 40px;
	@media screen and (max-width: 700px) {
		max-width: calc(100vw - 20px);
	}
	.title {
		display: flex;
		justify-content: space-between;
		text-align: left;
		@media screen and (max-width: 1000px) {
			flex-direction: column;
		}
		@media screen and (max-width: 700px) {
			div:last-child {
				margin-top: 20px;
			}
		}
		h2 {
			font-size: 22px;
			@media screen and (max-width: 1000px) {
				font-size: 18px;
			}
		}
		h4 {
			padding: 10px 0;
			font-weight: 300;
			@media screen and (max-width: 1000px) {
				font-size: 14px;
			}
		}
		h3,
		p {
			font-size: 16px;

			@media screen and (max-width: 1000px) {
				font-size: 12px;
			}
		}
		div:last-child {
			text-align: right;
		}
	}
	.bien {
		h2 {
			margin-top: 40px;
			font-size: 30px;
			font-weight: 300;
			color: var(--main);
			@media screen and (max-width: 1000px) {
				font-size: 24px;
			}
		}
		h3 {
			text-align: left;
			margin: 40px 0 20px 0;
			font-size: 24px;
			font-weight: 300;
			color: var(--main);
			@media screen and (max-width: 1000px) {
				font-size: 20px;
			}
		}
		hr {
			height: 1px;
			border: none;
			background-color: rgb(206, 206, 206);
		}
		hr,
		p {
			text-align: justify;
			margin: 20px auto;
			line-height: 24px;
		}
		ul li {
			text-align: left;
		}
		color: gray;
		border: var(--main) solid 1px;
		padding: 100px;
		padding-top: 0;
		margin-bottom: 60px;
		@media screen and (max-width: 700px) {
			padding: 10px;
			border: none;
		}
	}
	.diagnostics {
		display: flex;
		justify-content: space-around;
		h4 {
			font-weight: 300;
			padding-bottom: 10px;
			margin-bottom: 10px;
			color: gray;
			border-bottom: 1px solid lightgray;
		}
		@media screen and (max-width: 1000px) {
			flex-direction: column;
			h4,
			div {
				margin-bottom: 20px;
			}
		}
	}
}
</style>