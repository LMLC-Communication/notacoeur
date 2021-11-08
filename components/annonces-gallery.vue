<template>
	<div class="gallery" v-if="annonces.length > 0">
		<NuxtLink
			v-for="annonce in annonces"
			:key="annonce['@attributes'].id"
			:to="`/annonces-immobilieres/${annonce['@attributes'].id}`"
			class="field"
			tag="div"
		>
			<img
				v-if="annonce.Photo && annonce.Photo[0]"
				:src="`https://api.notacoeur-bourges.notaires.fr/assets/${annonce.Photo[0]}`"
				alt="aperçu bien"
			/>
			<img
				v-else
				src="~/assets/svg/DefaultHouse.svg"
				alt="bien par défaut"
			/>
			<div v-if="annonce.Photo" class="nb-photos">
				{{ annonce.Photo.length }} Photo<span
					v-if="annonce.Photo.length > 1"
					>s</span
				>
			</div>
			<div class="attributes">
				<div class="title">
					<h2>{{ annonce.TitreParution }}</h2>
					<h4>{{ annonce['@attributes'].commune }}</h4>
					<h3>{{ numberWithSpaces(Math.round(annonce.PVB)) }} €</h3>
				</div>
				<div class="detail">
					<h6 v-if="annonce.SurfaceHabitable">
						{{ annonce.SurfaceHabitable }}<span>m²</span>
					</h6>
					<h6 v-else-if="annonce.SurfaceTerrain">
						{{ parseInt(annonce.SurfaceTerrain) }}<span>m²</span>
					</h6>
					<h6 v-if="parseInt(annonce.NbrePiece) === 1">
						{{ annonce.NbrePiece }} <span>Pièce</span>
					</h6>
					<h6 v-else-if="parseInt(annonce.NbrePiece) > 1">
						{{ annonce.NbrePiece }} <span>Pièces</span>
					</h6>
					<h6 v-if="annonce['@attributes'].garage === 'true'">
						<span>Garage</span>
					</h6>
					<h6 v-if="annonce['@attributes'].parking === 'true'">
						<span>Parking</span>
					</h6>
					<h6 v-if="annonce['@attributes'].cheminee === 'true'">
						<span>Cheminee</span>
					</h6>
					<h6 v-if="annonce['@attributes'].piscine === 'true'">
						<span>Piscine</span>
					</h6>
					<h6 v-if="annonce['@attributes'].balcon === 'true'">
						<span>Balcon</span>
					</h6>
					<h6 v-if="annonce['@attributes'].terrasse === 'true'">
						<span>Terrasse</span>
					</h6>
					<h6 v-if="annonce['@attributes'].ascenseur === 'true'">
						<span>Ascenseur</span>
					</h6>
				</div>
			</div>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	props: ['annonces'],
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
	},
}
</script>

<style lang="scss" scoped>
.gallery {
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	max-width: 1800px;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(0, 500px));
	grid-gap: 1rem;
	padding: 20px;
	justify-content: center;
	@media screen and (max-width: 1000px) {
		justify-content: center;
		margin: 0;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}
	grid-template-columns: repeat(4, minmax(0, 1fr));
	@media screen and (max-width: 1260px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media screen and (max-width: 630px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.field {
		max-width: calc(100vw - 20px);
		margin: auto;
		cursor: pointer;
		text-align: center;
		width: 100%;
		transition: box-shadow 0.2s;
		box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.1);
		&:hover {
			box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);
		}
		img {
			width: 100%;
			min-width: 100%;
			height: 200px;
			object-fit: cover;
		}
		.nb-photos {
			position: absolute;
			transform: translateY(-26px);
			font-size: 12px;
			padding: 4px 10px;
			background-color: var(--main);
			color: #fff;
		}
		.attributes {
			padding: 0;
			height: calc(100% - 200px);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			h2,
			h3,
			h4,
			span {
				color: var(--main);
			}
			.title {
				h2 {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 14px;
					padding: 20px;
					font-weight: 600;
					height: 74px;
				}
				h4 {
					font-size: 12px;
					padding-bottom: 10px;
					font-weight: 400;
				}
				h3 {
					font-size: 16px;
					padding-bottom: 20px;
				}
			}
			.detail {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
				h6 {
					border-top: solid 1px #e2e2e2;
					padding: 10px 0;
					&:not(:last-child) {
						border-right: solid 1px #e2e2e2;
					}
				}
			}
		}
	}
}
</style>