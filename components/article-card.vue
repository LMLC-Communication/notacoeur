<template>
	<div class="content">
		<img v-if="article.image" :src="article.image" alt="picto article" />
		<div>
			<h2>{{ article.titre }}</h2>
			<p class="sub" v-if="article.date_parution">
				Le {{ article.date_parution.substr(0, 11) }}
			</p>
			<p
				v-if="article.contenu.length > textSize"
				v-html="article.contenu.substr(0, textSize) + '…'"
			></p>
			<p v-else v-html="article.contenu"></p>
			<span v-if="article.contenu.length > 200">
				<button
					v-if="retracted"
					@click="
						textSize = 99999
						retracted = false
					"
				>
					En savoir plus
				</button>
				<button
					v-else
					@click="
						textSize = 200
						retracted = true
					"
				>
					Réduire le contenu
				</button>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['article'],
	data() {
		return {
			retracted: true,
			textSize: 200,
		}
	},
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	img {
		width: 120px;
		height: 120px;
		object-fit: cover;
		margin-right: 10px;
	}
	@media screen and (max-width: 800px) {
		flex-direction: column;
		img {
			width: 100%;
			margin-right: 0;
			margin-bottom: 10px;
		}
	}
	h2 {
		color: var(--main);
		font-family: serif;
	}
	p {
		color: var(--gray);
		&.sub {
			color: var(--light-gray);
		}
	}
	button {
		cursor: pointer;
		border: none;
		background: none;
		outline: none;
		padding: 0;
	}
}
</style>