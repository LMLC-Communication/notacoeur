<template>
	<div class="grid">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 20px;
	background-color: #eeeeee;
	a.element {
		text-decoration: none;
		color: black;
		margin: 0 10px;
		width: calc(100% / 5 - 10px * 5);
		h2 {
			color: var(--main);
			position: relative;
			margin: 10px 0 10px 24px;
			font-size: 20px;
			background-color: #fff;
			top: -20px;
			padding: 10px;
			font-family: serif;
			box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.1);
		}
		@media screen and (max-width: 1800px) {
			width: calc(100% / 3 - 10px * 3);
		}
		@media screen and (max-width: 1000px) {
			width: calc(100% / 2 - 10px * 2);
			h2 {
				font-size: 18px;
			}
		}
		@media screen and (max-width: 700px) {
			width: calc(100% - 10px);
			h2 {
				font-size: 16px;
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