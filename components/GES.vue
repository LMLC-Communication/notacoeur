<template>
	<svg
		width="300px"
		height="240px"
		viewBox="0 0 300 240"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<title>GES</title>
		<g
			id="GES"
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g id="Arrow/dpe">
				<path
					d="M0,30 L0,0 L50,0 L65,15 L50,30 L0,30 Z"
					id="Combined-Shape"
					fill="#F5EEFD"
				></path>
				<text
					id="&lt;-51"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#000000"
				>
					<tspan x="7" y="19">&lt; 6</tspan>
				</text>
				<text
					id="A"
					font-family="Avenir-Medium, Avenir"
					font-size="20"
					fill="#000000"
				>
					<tspan x="36.3826996" y="22">A</tspan>
				</text>
			</g>
			<g id="Arrow/dpe-Copy" transform="translate(0, 35)">
				<path
					d="M0,30 L0,0 L80,0 L95,15 L80,30 L0,30 Z"
					id="Combined-Shape"
					fill="#E1C2F8"
				></path>
				<text
					id="&lt;-51"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#000000"
				>
					<tspan x="7" y="19">6 à 10</tspan>
				</text>
				<text
					id="A"
					font-family="Avenir-Medium, Avenir"
					font-size="20"
					fill="#000000"
				>
					<tspan x="67.1226996" y="22">B</tspan>
				</text>
			</g>
			<g id="Arrow/dpe-Copy-2" transform="translate(0, 70)">
				<path
					d="M0,30 L0,0 L110,0 L125,15 L110,30 L0,30 Z"
					id="Combined-Shape"
					fill="#D4A9F5"
				></path>
				<text
					id="&lt;-51"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#000000"
				>
					<tspan x="7" y="19">11 à 20</tspan>
				</text>
				<text
					id="A"
					font-family="Avenir-Medium, Avenir"
					font-size="20"
					fill="#000000"
				>
					<tspan x="96.3826996" y="22">C</tspan>
				</text>
			</g>
			<g
				id="Arrow/dpe-Copy-3"
				transform="translate(0, 105)"
			>
				<path
					d="M0,30 L0,0 L140,0 L155,15 L140,30 L0,30 Z"
					id="Combined-Shape"
					fill="#CB95F3"
				></path>
				<text
					id="&lt;-51"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#000000"
				>
					<tspan x="7" y="19">21 à 35</tspan>
				</text>
				<text
					id="A"
					font-family="Avenir-Medium, Avenir"
					font-size="20"
					fill="#000000"
				>
					<tspan x="126.0127" y="22">D</tspan>
				</text>
			</g>
			<g
				id="Arrow/dpe-Copy-4"
				transform="translate(0, 140)"
			>
				<path
					d="M0,30 L0,0 L170,0 L185,15 L170,30 L0,30 Z"
					id="Combined-Shape"
					fill="#BA72EF"
				></path>
				<text
					id="&lt;-51"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#000000"
				>
					<tspan x="7" y="19">36 à 55</tspan>
				</text>
				<text
					id="A"
					font-family="Avenir-Medium, Avenir"
					font-size="20"
					fill="#000000"
				>
					<tspan x="157.3127" y="22">E</tspan>
				</text>
			</g>
			<g
				id="Arrow/dpe-Copy-5"
				transform="translate(0, 175)"
			>
				<path
					d="M0,30 L0,0 L200,0 L215,15 L200,30 L0,30 Z"
					id="Combined-Shape"
					fill="#A74EEB"
				></path>
				<text
					id="&lt;-51"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#000000"
				>
					<tspan x="7" y="19">56 à 80</tspan>
				</text>
				<text
					id="A"
					font-family="Avenir-Medium, Avenir"
					font-size="20"
					fill="#000000"
				>
					<tspan x="187.6827" y="22">F</tspan>
				</text>
			</g>
			<g
				id="Arrow/dpe-Copy-6"
				transform="translate(0, 210)"
			>
				<path
					d="M0,30 L0,0 L230,0 L245,15 L230,30 L0,30 Z"
					id="Combined-Shape"
					fill="#8A19DF"
				></path>
				<text
					id="&lt;-51"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#FFFFFF"
				>
					<tspan x="7" y="19">&gt; 80</tspan>
				</text>
				<text
					id="A"
					font-family="Avenir-Medium, Avenir"
					font-size="20"
					fill="#FFFFFF"
				>
					<tspan x="215.6427" y="22">G</tspan>
				</text>
			</g>
			<g id="Group" :transform="`translate(255, ${translate})`">
				<path
					d="M0,15 L15,0 L45,0 L45,30 L15,30 L0,15 Z"
					id="Combined-Shape"
					fill="#000000"
				></path>
				<text
					id="100"
					font-family="Avenir-Medium, Avenir"
					font-size="12"
					fill="#FFFFFF"
				>
					<tspan x="20.7528593" y="19">{{ value }}</tspan>
				</text>
			</g>
		</g>
	</svg>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: 0,
		},
	},
	computed: {
		translate() {
			if (this.value < 6) {
				return 0
			} else if (this.value < 11) {
				return 35
			} else if (this.value < 21) {
				return 70
			} else if (this.value < 36) {
				return 105
			} else if (this.value < 56) {
				return 140
			} else if (this.value < 81) {
				return 175
			} else {
				return 210
			}
		},
	},
}
</script>

<style lang="scss" scoped>
svg {
	max-width: 100%;
}
</style>