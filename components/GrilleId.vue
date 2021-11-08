<template>
	<div class="grid-id">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.grid-id {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 20px;
	@media screen and (max-width: 1800px) {
	margin: 0 60px;
	}
	a.element {
		text-decoration: none;
		color: black;
		margin: 0 10px;
		width: calc(100% / 5 - 10px * 5);
		h2 {
			position: relative;
			margin: 10px 0 10px 24px;
			font-size: 22px;
			background-color: #fff;
			top: -20px;
			padding: 10px;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
			box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.1);
		}
		// @media screen and (max-width: 1800px) {
		// 	width: calc(100% / 3 - 10px * 3);
		// }
		@media screen and (max-width: 1800px) {
			width: calc(100% / 2 - 10px * 2);
			h2 {
				font-size: 20px;
			}
		}
		@media screen and (max-width: 700px) {
			width: calc(100% - 10px);
			h2 {
				font-size: 18px;
			}
		}
		img {
			position: relative;
			top: 20px;
			max-width: 100%;
			overflow: hidden;
			object-fit: cover;
			transition: box-shadow 200ms, filter 200ms;
			box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.5);
			&:not(:hover) {
				@media screen and (min-width: 1000px) {
					filter: brightness(0.8);
				}
				box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2);
			}
		}
	}
}
</style>