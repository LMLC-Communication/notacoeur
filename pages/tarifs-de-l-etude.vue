<template>
  <div class="content">
    <h1>INFORMATION TARIFS OFFICE NOTARIAL</h1>
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Tarif</th>
          <th>Honoraires*</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h3>Pacte Civil de Solidarité (PACS)</h3></td>
          <td>270€</td>
          <td >Tarifé</td>
        </tr>
        <tr>
          <td><h3>Contrat de mariage</h3></td>
          <td>260€</td>
          <td >Tarifé</td>
        </tr>
        <tr>
          <td><h3>Donation entre époux</h3></td>
          <td>370€</td>
          <td >Tarifé</td>
        </tr>
        <tr>
          <td><h3>Convention quasi usufruit (&lt;300 000€)</h3></td>
          <td>960€ + coût d'inscription FCDDV + coût enregistrement (125€)</td>
          <td >Tarifé</td>        </tr>
        <tr>
          <td><h3>Convention quasi usufruit (>300 000€)</h3></td>
          <td>selon lettre de mission</td>
          <td >Tarifé</td>        </tr>
        <tr>
          <td colspan="3" class="title"><h2>Testament</h2></td>
        </tr>
        <tr>
          <td><h3>Testament authentique</h3></td>
          <td>230€</td>
          <td >Tarifé</td>        </tr>
        <tr>
          <td>
            <h3>Testament olographe</h3>
            (Conseils, conservation, et enregistrement au Fichier des
            Dispositions de Dernières Volontés)
          </td>
          <td>100€ + coût inscription FCDDV</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td><h3>Formalités d'envoi en possession</h3></td>
          <td>720€</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td colspan="3" class="title">
            <h2>Société</h2>
          </td>
        </tr>
        <tr>
          <td ><h3>Constitution de société</h3></td>
          <td>selon lettre de mission</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td >
            <h3>Modification statuts de société</h3>
          </td>
          <td>selon lettre de mission</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td ><h3>Liquidation de société</h3></td>
          <td>selon lettre de mission</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td ><h3>Cession de fonds de commerce</h3></td>
          <td>selon lettre de mission</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td ><h3>Bail commercial</h3></td>
          <td>selon lettre de mission</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td colspan="3" class="title"><h2>Procuration</h2></td>
        </tr>
        <tr>
          <td><h3>Procuration authentique</h3></td>
          <td>entre 65€ et 90€ selon le nombre de pages et annexes</td>
          <td >Tarifé</td>        </tr>
        <tr>
          <td><h3>Procuration sous-seing privé</h3></td>
          <td>20€</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td colspan="3" class="title"><h2>Avant-contrat</h2></td>
        </tr>
        <tr>
          <td><h3>Promesse authentique unilatérale</h3></td>
          <td>200€ (+ coût enregistrement 125€)</td>
          <td >Honoraires</td>        </tr>
        <tr>
          <td>
            <h3>Promesse sous-seing privé synallagmatique (compromis)</h3>
            Une provision d’avance sur frais d’acquisition de 80€ sera demandée
            en complément
          </td>
          <td>120€</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td colspan="3" class="title">
            <h2>Prêt</h2>
          </td>
        </tr>
        <tr>
          <td ><h3>Commodat-Prêt à usage</h3></td>
          <td>500€</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td colspan="3" class="title">
            <h2>Expertertise immobilière</h2>
          </td>
        </tr>
        <tr>
          <td ><h3>Avis de valeur(Bourges)</h3></td>
          <td>250€</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td >
            <h3>Avis de valeur(Hors Bourges)</h3>
          </td>
          <td>280€</td>
          <td >Honoraires</td>
        </tr>
        <tr>
          <td colspan="3" class="title">
            <h2>Négociation immobilière</h2>
          </td>
        </tr>
        <tr>
          <td ><h3>Entre 0 et 50.000€</h3></td>
          <td>forfait de 4.000€ TTC</td>
        </tr>
        <tr>
          <td >
            <h3>Entre 50.000 et 100.000€</h3>
          </td>
          <td>6% avec minimum de 4.000€</td>
        </tr>
        <tr>
          <td >
            <h3>Entre 100.000 et 200.000€</h3>
          </td>
          <td>5% avec minimum de 6.000€</td>
        </tr>
        <tr>
          <td >
            <h3>Au-delà de 200.000€</h3>
          </td>
          <td>4% avec minimum de 10.000€</td>
        </tr>
      </tbody>
    </table>
    <p>
      *Les honoraires libres sont réglementés par
      <a
        href="https://www.legifrance.gouv.fr/codes/id/LEGIARTI000032134544/2016-02-29"
        target="_blank"
        >l’annexe 4-9 du décret n°2016-230 du 26 février 2016</a
      >
    </p>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Tarifs',
    meta: [
      {
        hid: 'tarifs',
        name: 'description',
        content: "Tarifs de l'étude notariale de Bourges",
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
*:not(h1) {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.content {
  margin: 20px;
  @media screen and (max-width: 1000px) {
    margin: 20px 0;
  }
}
h1 {
  margin: 20px;
  @media screen and (min-width: 1000px) {
    margin: 0;
  }
}
h2,
th {
  font-size: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
}
h3 {
  margin-top: 12px;
  margin-bottom: 8px;
  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
}
p {
  line-height: 20px;
  margin-top: 10px;
  padding: 0 10px;
  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
}

table {
  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
  margin-top: 20px;
  background-color: rgb(223, 223, 223);
  tr:nth-child(2n) {
    background-color: rgb(233, 233, 233);
  }
  width: 100%;
  border-spacing: 0;
  thead tr {
    background-color: var(--main);
    color: white;
    th {
      padding: 10px;
    }
  }
  tr td {
    padding: 10px;
  }
  tr td:not(:first-child) {
    text-align: center;
  }
  tr td.sub {
    font-size: 12px;
  }
  tr td.title {
    background-color: lightgray;
    background-color: var(--main);
    color: white;
  }
}
</style>
