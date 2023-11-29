<template>
	<div id="immo">
		<h1>Annonces Immobilieres</h1>
		<loader v-if="annonces.length === 0" />
		<div v-else class="content">
			<h4>Filtrer par</h4>
			<div class="filters">
				<InputGroup
					:vals="vals"
					v-model="typeBien"
					:refresh="refreshFilter"
					type="checkbox"
				/>
			</div>
			<br />
			<h4>Trier par</h4>
			<div class="sort">
				<div class="filters">
					<InputGroup
						:vals="sortVals.slice(0, 2)"
						v-model="order"
						:refresh="refreshSort"
						@click="refreshSort"
						type="radio"
					/>
				</div>
				<div class="filters">
					<InputGroup
						:vals="sortVals.slice(2, 4)"
						v-model="order"
						:refresh="refreshSort"
						@click="refreshSort"
						type="radio"
					/>
				</div>
				<div class="filters">
					<InputGroup
						:vals="sortVals.slice(4, 6)"
						v-model="order"
						:refresh="refreshSort"
						@click="refreshSort"
						type="radio"
					/>
				</div>
				<div class="filters">
					<InputGroup
						:vals="sortVals.slice(6, 8)"
						v-model="order"
						:refresh="refreshSort"
						@click="refreshSort"
						type="radio"
					/>
				</div>
			</div>
			<div class="sliders">
				<div class="slider">
					<label>Prix</label>
					<vue-slider
						v-model="prix"
						:max="prixMax"
						tooltip="always"
						tooltip-placement="bottom"
						:tooltip-formatter="(v) => `${numberWithSpaces(v)}€`"
						@drag-end="$store.commit('setPrix', prix)"
					></vue-slider>
				</div>
				<div class="slider">
					<label>Surface</label>
					<vue-slider
						v-model="surface"
						:max="surfaceMax"
						tooltip="always"
						tooltip-placement="bottom"
						:tooltip-formatter="'{value}m²'"
						@drag-end="$store.commit('setSurface', surface)"
					></vue-slider>
				</div>
				<div class="slider">
					<label>Nombre de pièces</label>
					<vue-slider
						v-model="pieces"
						:max="piecesMax"
						:tooltip="piecesMax / 10 <= 1 ? 'none' : 'always'"
						tooltip-placement="bottom"
						:marks="piecesMax / 10 <= 1"
						@drag-end="$store.commit('setPieces', pieces)"
					></vue-slider>
				</div>
			</div>
			<p class="find">
				<span v-if="filtered(annonces).length !== 0">
					<span v-if="filtered(annonces).length > 1">
						{{ filtered(annonces).length }} biens trouvés :
					</span>
					<span v-else>
						{{ filtered(annonces).length }} bien trouvé :
					</span>
				</span>
				<span v-else class="not-found"
					>Aucun élément n'a été trouvé</span
				>
			</p>
			<AnnoncesGallery
				v-if="annonces.length > 0"
				:annonces="filtered(annonces)"
			/>
		</div>
	</div>
</template>

<script>
import '~/style/vue-slider.css'
Number.prototype.between = function (array) {
	return array[0] <= this && this <= array[1]
}
export default {
	head: {
		title:
			'Annonces immobilières notaires, secteur BOURGES CEDEX – Location, Vente et Enchères (18)',
		meta: [
			{
				hid: 'annones immobilières',
				name: 'description',
				content: 'Annonces immobilières',
			},
		],
	},
	data() {
		return {
			data: [],
			annonces: this.$store.state.annonces,
			typeBien: this.$store.state.filter,
			order: this.$store.state.order,
			prixMax: this.$store.state.prix.max,
			prix: this.$store.state.prix,
			surfaceMax: this.$store.state.surface.max,
			surface: this.$store.state.surface,
			piecesMax: this.$store.state.pieces.max,
			pieces: this.$store.state.pieces,
			vals: [],
			filterVals: [
				{ value: 'MAIS', label: 'Maison' },
				{ value: 'APPT', label: 'Appartement' },
				{ value: 'IMMR', label: 'Immeuble' },
				{ value: 'GARA', label: 'Garage' },
				{ value: 'PARK', label: 'Parking' },
				{ value: 'FDCO', label: 'Fond de commerce' },
				{ value: 'LOCP', label: 'Locaux professionnels' },
				{ value: 'BURE', label: 'Bureaux' },
				{ value: 'TEBA', label: 'Terrain à bâtir' },
				{ value: 'BAGR', label: 'Terrain agricole' },
				{ value: 'BOIS', label: 'Bois' },
				{ value: 'ETAN', label: 'Etang' },
				{ value: 'TLOI', label: 'Terrain de loisir' },
				{ value: 'PROP', label: 'Propriété' },
				{ value: 'PROV', label: 'Propriétés viticoles' },
				{ value: 'NEUF', label: 'Programmes neufs' },
				{ value: 'DIVE', label: 'Autres' },
			],
			sortVals: [
				{
					value: 0,
					label: 'Plus récents',
					key: 'dateCreation',
					order: 'asc',
				},
				{
					value: 1,
					label: 'Plus anciens',
					key: 'dateCreation',
					order: 'desc',
				},
				{
					value: 2,
					label: 'Prix croissants',
					key: 'PVB',
					order: 'asc',
				},
				{
					value: 3,
					label: 'Prix décroissants',
					key: 'PVB',
					order: 'desc',
				},
				{
					value: 4,
					label: 'Surfaces croissantes',
					key: 'SurfaceHabitable',
					order: 'asc',
				},
				{
					value: 5,
					label: 'Surfaces décroissantes',
					key: 'SurfaceHabitable',
					order: 'desc',
				},
				{
					value: 6,
					label: 'Villes de A à Z',
					key: 'commune',
					order: 'asc',
				},
				{
					value: 7,
					label: 'Villes de Z à A',
					key: 'commune',
					order: 'desc',
				},
			],
		}
	},
	methods: {
		stringToDate(value) {
			var creation = value.split(new RegExp('[^a-zA-Z0-9_]'))
			var date = new Date()
			date.setDate(creation[0])
			date.setMonth(creation[1] - 1)
			date.setFullYear(creation[2])
			date.setHours(creation[3])
			date.setMinutes(creation[4])
			date.setSeconds(creation[5])
			return date
		},
		filtered(annonces) {
			var annoncesTri = annonces.filter((annonce) => {
				const surface = annonce.SurfaceHabitable
					? parseInt(annonce.SurfaceHabitable)
					: parseInt(annonce.SurfaceTerrain)
				const NbrePiece = annonce.NbrePiece
					? parseInt(annonce.NbrePiece)
					: 0
				const PVB = annonce.PVB ? parseInt(annonce.PVB) : 0
				return (
					surface.between(this.surface) &&
					PVB.between(this.prix) &&
					NbrePiece.between(this.pieces) &&
					(this.typeBien.length === 0 ||
						this.typeBien.includes(annonce['@attributes'].typeBien))
				)
			})
			// annoncesTri = annonces.filter((annonce)=>annonce)
			return annoncesTri
		},
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
		refreshFilter() {
			this.$store.commit('setFilter', this.typeBien)
			this.annonces.filter(
				(annonce) =>
					this.typeBien.length === 0 ||
					this.typeBien.includes(annonce['@attributes'].typeBien)
			)
			this.annonces.forEach((element) => {
				if (this.prixMax < parseInt(element.PVB)) {
					this.prixMax = parseInt(element.PVB)
				}
				if (element.SurfaceHabitable) {
					if (this.surfaceMax < parseInt(element.SurfaceHabitable)) {
						this.surfaceMax = parseInt(element.SurfaceHabitable)
					}
				} else if (element.SurfaceTerrain) {
					if (this.surfaceMax < parseInt(element.SurfaceTerrain)) {
						this.surfaceMax = parseInt(element.SurfaceTerrain)
					}
				}
				if (this.piecesMax < parseInt(element.NbrePiece)) {
					this.piecesMax = parseInt(element.NbrePiece)
				}
			})
			if (!this.$store.state.prix.max) {
				this.prix = [this.$store.state.prix.min, this.prixMax]
				this.$store.commit('setPrix', this.prix)
			} else {
				this.prix = [
					this.$store.state.prix.min,
					this.$store.state.prix.max,
				]
			}
			if (!this.$store.state.surface.max) {
				this.surface = [this.$store.state.surface.min, this.surfaceMax]
				this.$store.commit('setSurface', this.surface)
			} else {
				this.surface = [
					this.$store.state.surface.min,
					this.$store.state.surface.max,
				]
			}
			if (!this.$store.state.pieces.max) {
				this.pieces = [this.$store.state.pieces.min, this.piecesMax]
				this.$store.commit('setPieces', this.pieces)
			} else {
				this.pieces = [
					this.$store.state.pieces.min,
					this.$store.state.pieces.max,
				]
			}
		},
		refreshSort() {
			this.$store.commit('setOrder', this.order)
			const sort = this.sortVals[this.$store.state.order]
			const asc = sort.order === 'asc' ? -1 : 1
			this.annonces = this.annonces.sort((a, b) => {
				if (sort.key == 'dateCreation') {
					if (
						this.stringToDate(a['@attributes'][sort.key]) <
						this.stringToDate(b['@attributes'][sort.key])
					) {
						return -1 * asc
					}
					if (
						this.stringToDate(a['@attributes'][sort.key]) >
						this.stringToDate(b['@attributes'][sort.key])
					) {
						return 1 * asc
					}
				} else if (sort.key == 'commune') {
					if (
						a['@attributes'][sort.key] < b['@attributes'][sort.key]
					) {
						return 1 * asc
					}
					if (
						a['@attributes'][sort.key] > b['@attributes'][sort.key]
					) {
						return -1 * asc
					}
				} else {
					if (parseInt(a[sort.key]) < parseInt(b[sort.key])) {
						return 1 * asc
					}
					if (parseInt(a[sort.key]) > parseInt(b[sort.key])) {
						return -1 * asc
					}
				}
				return 0
			})
		},
	},
	async fetch() {
		this.data = await fetch(
			'httpS://api.notacoeur-bourges.notaires.fr/'
		).then((res) => res.json())
		this.annonces = this.data.response.CrpCen.Clef

		this.refreshSort()
		this.refreshFilter()

		this.$store.commit('setAnnonces', this.annonces)

		this.annonces.forEach((annonce) => {
			if (
				this.vals.filter(
					(val) => val.value === annonce['@attributes'].typeBien
				).length === 0
			) {
				this.vals.push(
					this.filterVals.find(
						(val) => val.value === annonce['@attributes'].typeBien
					)
				)
			}
		})
		this.vals.sort((a, b) => {
			if (a.label < b.label) {
				return -1
			}
			if (a.label > b.label) {
				return 1
			}
			return 0
		})
	},
	fetchOnServer: false,
}
</script>

<style lang="scss">
#immo .content {
	h4 {
		text-align: center;
		font-family: 'Comfortaa';
	}
	.sort {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.filters {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		@media screen and (max-width: 1000px) {
			margin: 0 6px;
		}
	}
	.sliders {
		display: flex;
		margin: 0 50px;
		.slider {
			margin: 40px;
			width: 33%;
		}
	}
	@media screen and (max-width: 1000px) {
		margin: 0;
		.sliders {
			flex-direction: column;
			.slider {
				margin: 20px 0;
				width: 100%;
			}
		}
	}
	.find {
		margin-top: 40px;
		display: flex;
		justify-content: center;
		.not-found {
			margin-bottom: 100px;
		}
	}
}
</style>