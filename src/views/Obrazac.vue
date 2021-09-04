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
          <v-text-field label="Naziv udruge" required></v-text-field>
          <v-text-field label="Adresa sjedišta" required></v-text-field>
          <v-text-field
            label="Ime i prezime osobe ovlaštene za zastupanje i dužnost koju obavlja"
            required
          ></v-text-field>
          <v-text-field label="Telefon, mobitel, fax" required></v-text-field>
          <v-text-field label="Adresa e-pošte" required></v-text-field>
          <v-text-field label="Godina osnivanja" required></v-text-field>

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
                  <td>
                    {{ category.coeff }}
                  </td>
                  <td>
                    <input
                      v-model="category.total"
                      @change="calculateCoefficient(category)"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="total">Total:</td>
                  <td></td>
                  <td></td>
                  <td>
                    {{ totalPoints }}
                  </td>
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
export default {
  name: "Natjecaj",
  data() {
    return {
      form: [
        {
          name: "Godine aktivnog djelovanja",
          coeff: 0.5,
          score: 0,
          total: 0,
        },
        {
          name: "Broj zaposlenika na određeno ili neodređeno vrijeme do 3",
          coeff: 1,
          score: 0,
          total: 0,
        },
        {
          name: "Broj zaposlenika na određeno ili neodređeno vrijeme više od 3",
          coeff: 2,
          score: 0,
          total: 0,
        },
        {
          name:
            "Zaposlenih osoba iz socijalno osjetljivih skupina kojoj prijeti trajna nezaposlenost i socijalna isključenost",
          coeff: 1,
          score: 0,
          total: 0,
        },
        {
          name: "Broj članova udruge do 100",
          coeff: 1,
          score: 0,
          total: 0,
        },
        {
          name: "Broj članova udruge do 200",
          coeff: 2,
          score: 0,
          total: 0,
        },
        {
          name: "Broj članova udruge više od 200",
          coeff: 5,
          score: 0,
          total: 0,
        },
        {
          name: "Broj aktivnih volontera do 5",
          coeff: 5,
          score: 0,
          total: 0,
        },
        {
          name: "Broj aktivnih volontera više od 5",
          coeff: 10,
          score: 0,
          total: 0,
        },
        {
          name:
            "Broj partnerskih udruga s kojima se planira zajednički koristiti dodijeljeni poslovni prostor",
          coeff: 2,
          score: 0,
          total: 0,
        },
      ],
    };
  },

  methods: {
    calculateCoefficient(form) {
      let total = form.score * form.coeff;
      if (!isNaN(total)) {
        form.total = total;
      }
    },
    submit() {
      alert(JSON.stringify(this.form));
    },
  },
  computed: {
    totalPoints() {
      return this.form.reduce((sum, point) => sum + point.total, 0);
    },
  },
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
