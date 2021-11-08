<template>
	<div v-if="urls">
		<div v-if="zoom">
			<div class="filter" @click="click" />
			<img
				class="detail-image"
				:src="`https://api.notacoeur-bourges.notaires.fr/assets/${urls[featured]}`"
				alt="image principale"
				@click="click"
			/>
		</div>
		<div
			v-if="
				`https://api.notacoeur-bourges.notaires.fr/assets/${urls[featured]}`
			"
			class="wrapper"
		>
			<img
				src="../assets/svg/chevron-left.svg"
				alt="chevron gauche"
				v-if="featured !== 0"
				@click="featured -= 1"
			/>
			<img
				src="../assets/svg/chevron-left.svg"
				alt="chevron gauche"
				style="opacity: 0; cursor: default"
				v-else
			/>
			<img
				:src="`https://api.notacoeur-bourges.notaires.fr/assets/${urls[featured]}`"
				alt="image principale"
				@click="click"
				class="featured"
			/>
			<img
				src="../assets/svg/chevron-right.svg"
				alt="chevron droite"
				v-if="featured !== urls.length - 1"
				@click="featured += 1"
			/>
			<img
				src="../assets/svg/chevron-right.svg"
				style="opacity: 0; cursor: default"
				alt="chevron gauche"
				v-else
			/>
		</div>
		<div class="gallery" v-if="urls.length > 1">
			<img
				v-for="(src, i) in urls"
				:key="i"
				@click="featured = i"
				:src="`https://api.notacoeur-bourges.notaires.fr/assets/${src}`"
				alt="image annonce"
				:class="imageStyle(src)"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		urls: Array,
	},
	data() {
		return {
			featured: 0,
			zoom: false,
		}
	},
	methods: {
		imageStyle(src) {
			if (src === this.urls[this.featured]) return ''
			return 'darker'
		},
		click() {
			this.zoom = !this.zoom
		},
		arrowPressed() {
			console.log('Flèche')
		},
	},
	beforeMount() {
		window.addEventListener('keydown', this.arrowPressed())
	},
	beforeDestroy() {
		window.removeEventListener('keydown', this.arrowPressed())
	},
}
</script>

<style lang="scss" scoped>
.filter {
	z-index: 1;
	position: fixed;
	background-color: black;
	top: 0;
	opacity: 0.5;
	width: 100vw;
	height: 100vh;
}
img {
	width: 100%;
	object-fit: contain;
	&:not(.detail-image) {
		cursor: pointer;
	}
	&.detail-image {
		z-index: 10;
		position: fixed;
		width: 80%;
		height: 80%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
.wrapper {
	display: flex;
	justify-content: space-between;
	img {
		&.featured {
			width: 60%;
			height: 500px;
			margin-bottom: 20px;
			@media screen and (max-width: 900px) {
				height: calc(70vw - 100px);
				width: auto;
			}
		}
		&,
		div {
			&:first-child,
			&:last-child {
				margin: auto;
				height: 100px;
				width: 100px;
				@media screen and (max-width: 900px) {
					height: 60px;
					width: 60px;
				}
			}
		}
	}
	// @media screen and (max-width: 500px) {
	// 	display: none;
	// }
}
button {
	background: none;
	outline: none;
	border: none;
	cursor: pointer;
}
.gallery {
	display: flex;
	overflow-y: scroll;
	padding: 0 10px;
	padding-bottom: 10px;
	img:not(:last-child) {
		margin-right: 20px;
	}
	img {
		width: 160px;
		height: 120px;
		object-fit: cover;
		@media screen and (min-width: 500px) {
			&.darker:not(:hover) {
				filter: brightness(70%);
			}
		}
		&:not(.darker) {
			cursor: default;
		}
	}
}
</style>