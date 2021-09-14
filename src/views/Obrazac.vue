<template>
  <v-container>
    <v-row>
      <v-card>
        <v-card-title>
          <h3>
            <p class="naslov-obrazca">
              Javni natječaj za dodjelu poslovnih prostora Grada Pule na uporabu
              udrugama
            </p>
          </h3>
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Naziv udruge"
            v-model="application.name"
            required
          ></v-text-field>
          <v-text-field
            label="Adresa sjedišta"
            v-model="application.address"
            required
          ></v-text-field>
          <v-text-field
            label="Ime i prezime osobe ovlaštene za zastupanje i dužnost koju obavlja"
            v-model="application.nameAndSurname"
            required
          ></v-text-field>
          <v-text-field
            label="Telefon, mobitel, fax"
            v-model="application.phone"
            required
          ></v-text-field>
          <v-text-field
            label="Adresa e-pošte"
            v-model="application.email"
            required
          ></v-text-field>

          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th>
                    Kriterij
                  </th>
                  <th>
                    Unesite vrijednost
                  </th>
                  <th>
                    Koeficijent
                  </th>
                  <th>
                    Ukupno
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="category in form" :key="category.name">
                  <td>
                    {{ category.name }}
                  </td>
                  <td @change="calculateCoefficient(category)">
                    <b-input v-model="category.score" />
                  </td>
                  <td v-if="category.changeApplied === false">
                    {{ category.coeff }}
                  </td>
                  <td v-if="category.changeApplied === true">
                    {{ category.newCoeff }}
                  </td>
                  <td>{{ category.total }}</td>
                </tr>
                <tr>
                  <td class="total">Total:</td>
                  <td></td>
                  <td></td>
                  <td class="total">{{ totalPoints }} bodova</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <v-row align="center" justify="space-around">
            <v-btn class="success" depressed @click="submit()">
              Predaj obrazac
            </v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import MetamaskConnect from "../contracts/MetamaskConnect";
//import contractService from "../contracts/ContractService";

export default {
  name: "Natjecaj",
  data() {
    return {
      application: {
        name: "",
        address: "",
        nameAndSurname: "",
        phone: "",
        email: "",
        foundationYear: 0,
        totalPoints: 0,
        accountBalance: 0,
        web3: null,
      },
      form: [
        {
          name: "Godine aktivnog djelovanja",
          coeff: 0.5,
          score: 0,
          total: 0,
          coefFixed: true,
          changeApplied: false,
        },
        {
          name: "Broj zaposlenika na određeno ili neodređeno vrijeme",
          coeff: 1,
          score: 0,
          total: 0,
          coefFixed: false,
          threshold: 3,
          newCoeff: 2,
          changeApplied: false,
        },
        {
          name:
            "Zaposlenih osoba iz socijalno osjetljivih skupina kojoj prijeti trajna nezaposlenost i socijalna isključenost",
          coeff: 1,
          score: 0,
          total: 0,
          coefFixed: true,
          changeApplied: false,
        },
        {
          name: "Broj članova udruge",
          coeff: 1,
          score: 0,
          total: 0,
          coefFixed: false,
          threshold: 200,
          newCoeff: 2.5,
          changeApplied: false,
        },
        {
          name: "Broj aktivnih volontera",
          coeff: 5,
          score: 0,
          total: 0,
          coefFixed: false,
          threshold: 5,
          newCoeff: 10,
          changeApplied: false,
        },
        {
          name:
            "Broj partnerskih udruga s kojima se planira zajednički koristiti dodijeljeni poslovni prostor",
          coeff: 2,
          score: 0,
          total: 0,
          coefFixed: true,
          changeApplied: false,
        },
      ],
    };
  },

  methods: {
    calculateCoefficient(form) {
      if (!form.coefFixed) {
        if (form.score > form.threshold) {
          form.total = form.newCoeff * form.score;
          form.changeApplied = true;
          return;
        }
      }
      form.changeApplied = false;
      form.total = form.coeff * form.score;
      return;
    },
    submit() {
      let total = this.form.reduce((sum, point) => sum + point.total, 0);
      this.application.totalPoints = total;

      alert(JSON.stringify(this.application));
    },
  },
  computed: {
    totalPoints() {
      return this.form.reduce((sum, point) => sum + point.total, 0);
    },
  },
  async mounted() {
    const { web3 } = await MetamaskConnect();
    this.web3 = web3;
    await this.updateBalance();
  },

  // beforeMount() {
  //   contractService.methods
  //     .returnAllBids()
  //     .call()
  //     .then((auctions) => {
  //       console.log(auctions);
  //     });
  // },
};
</script>

<style>
.naslov-obrazca {
  text-align: center;
}
.total {
  font-weight: bold;
}
</style>
