<template>
	<div class="content">
		<h1>Politique de confidentialite</h1>

		<h2>Collecte des données par Google (via Google Map)</h2>
		<p>
			À chaque visite d'un utilisateur sur le site Internet NOTACOEUR,
			Google reçoit des informations sur cet utilisateur, y compris sur
			les sous-pages visitées. Ces informations sont enregistrées en
			permanence, même si l'utilisateur n'est pas connecté à un compte
			Google ou n'en possède pas. Lorsque l'utilisateur est connecté à un
			compte Google, les données récoltées sont associées à ce compte. Si
			l'utilisateur ne souhaite pas associer ces données avec ce compte
			Google, il doit se déconnecter du compte avant d'utiliser ce
			service. Google stocke les données associées aux profils
			d'utilisateurs à des fins de publicité, d'étude de marché ou de
			personnalisation de ses sites Internet. Cette analyse est effectuée
			à l'aide des données de tous les utilisateurs, y compris les
			utilisateurs qui ne sont pas connectés à un compte Google, afin de
			proposer à ceux-ci des contenus publicitaires ciblés et de fournir
			aux utilisateurs d'autres réseaux sociaux des informations sur
			l'activité des utilisateurs sur ce site. Les utilisateurs ont le
			droit de s'opposer à la collecte et au stockage de données de
			profils d'utilisateurs en contactant Google directement. NOTACOEUR
			n'a aucune responsabilité quant à la collecte de ces données.
		</p>
	</div>
</template>

<script>
export default {
	head: {
		title: 'Politique de confidentialité',
		meta: [
			{
				hid: 'politique de confidentialite',
				name: 'description',
				content:
					"Politique de confidentialité de l'étude notariale de Bourges",
			},
		],
	},
}
</script>

<style scoped>
*:not(h1) {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.content {
	margin: 20px;
}
h1 {
	margin: 0;
}
h2 {
	margin-top: 24px;
	margin-bottom: 8px;
}
h3 {
	margin-top: 10px;
	margin-bottom: 8px;
}
p {
	line-height: 20px;
}
</style>