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
            :rules="nameRules"
            label="Naziv udruge"
            required
          ></v-text-field>
          <v-text-field
            :rules="nameRules"
            label="Adresa sjedišta"
            required
          ></v-text-field>
          <v-text-field
            :rules="nameRules"
            label="Ime i prezime osobe ovlaštene za zastupanje i dužnost koju obavlja"
            required
          ></v-text-field>
          <v-text-field
            :rules="nameRules"
            label="Telefon, mobitel, fax"
            required
          ></v-text-field>
          <v-text-field
            :rules="nameRules"
            label="Adresa e-pošte"
            required
          ></v-text-field>
          <v-text-field
            :rules="nameRules"
            label="Godina osnivanja"
            required
          ></v-text-field>

          <v-row align="center" justify="space-around">
            <v-btn class="success" depressed>
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
    return {};
  },
};
</script>

<style>
.naslov-obrazca {
  text-align: center;
}
</style>
