<template>
  <v-container>
    <v-row>
      <v-card class="natjecaj-card">
        <v-card-title>
          <h3>
            <p class="naslov-natjecaja">
              NATJEČAJ ZA DODJELU POSLOVNIH PROSTORA GRADA PULE NA UPORABU
              UDRUGAMA
            </p>
          </h3>
        </v-card-title>
        <v-row align="center" justify="space-around">
          <v-card-text>
            Na temelju članka 5. Odluke o kriterijima, mjerilima i postupku
            dodjele na uporabu poslovnih prostora Grada Pule (Službene novine
            Grada Pule br. 7/16, 1/17 i 17/19) i Odluke Gradonačelnika Grada
            Pule o raspisivanju natječaja za dodjelu poslovnih prostora Grada
            Pule na uporabu udrugama, Klasa: 372-03/21-01/3, Urbroj:
            2168/01-03-06-00-0411-21-2, od dana 19. siječnja 2021. godine,
            Povjerenstvo za dodjelu poslovnih prostora Grada Pule na uporabu
            udrugama objavljuje
          </v-card-text>
          <v-card-text>
            Javni natječaj za dodjelu poslovnih prostora na uporabu udrugama
            raspisuje se za slijedeće poslovne prostore:
            <br />
            <v-list disabled>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="poslovniProstor"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-row>
        <v-divider class="mx-4"></v-divider>
        <v-row>
          <v-card-title>
            Pravo prijave za poslovne prostor imaju firme/obrti koje
            udovoljavaju slijedećim općim kriterijima:
          </v-card-title>
          <v-list>
            <v-list-item v-for="(zahtjev, z) in zahtjevi" :key="z">
              <v-list-item-content>
                <v-list-item-title v-text="zahtjev"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
        <v-divider class="mx-4"></v-divider>
        <v-row>
          <v-card>
            <v-card-title>
              BODOVANJE
            </v-card-title>
            <v-simple-table>
              <template>
                <thead>
                  <tr>
                    <th>
                      Kriterij
                    </th>
                    <th>
                      Broj bodova
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="kriterij in kriteriji" :key="kriterij.naslov">
                    <td>{{ kriterij.naslov }}</td>
                    <td>{{ kriterij.bodovi }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-checkbox
              v-model="agreedTerms"
              @click="agreedTerms = true"
              label="Upoznat/a sam s odredbama Zakona o elektroničkoj ispravi (N.N.
              br. 150/05), te izričito izjavljujem da sam suglasan/na da mi Grad
              Pula sva pismena povodom ovog zahtjeva dostavlja elektroničkim
              putem."
            >
            </v-checkbox>
          </v-card>
          <v-spacer />
          <v-row align="center" justify="space-around">
            <v-btn class="obrazac" :disabled="!this.agreedTerms">
              <router-link to="/obrazac">
                Prijava obrazca
              </router-link>
            </v-btn>
          </v-row>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Natjecaj",
  data() {
    return {
      poslovniProstor: "Trg I. istarske brigade br. 17",
      zahtjevi: [
        "upisane su u registar",
        "nemaju dugovanja prema Gradu Puli te financijsko poslovanje vode uredno i transparentno",
        "pravodobno i u cijelosti ispunjavaju ugovorne obveze preuzete na temelju ugovora o dodjeli bespovratnih sredstava",
        "provode projekte i programe, odnosno aktivnosti od interesa za Grad Pulu.",
      ],
      agreedTerms: false,
      kriteriji: [
        {
          naslov: "za svaku godinu aktivnog djelovanja",
          bodovi: 0.5,
          score: 0,
        },
        {
          naslov: "Broj zaposlenika na određeno ili neodređeno vrijeme",
          bodovi: 1,
          score: 0,
        },
        {
          naslov:
            "Broj zaposlenika na određeno ili neodređeno vrijeme više od 3",
          bodovi: 2,
          score: 0,
        },
        {
          naslov:
            "Za svaku zaposlenu osobu iz socijalno osjetljivih skupina kojoj prijeti trajna nezaposlenost i socijalna isključenost",
          bodovi: 1,
          score: 0,
        },
        {
          naslov: "Broj članova udruge do 100",
          bodovi: 1,
          score: 0,
        },
        {
          naslov: "Broj članova udruge do 200",
          bodovi: 2,
          score: 0,
        },
        {
          naslov: "Broj članova udruge više od 200",
          bodovi: 5,
          score: 0,
        },
        {
          naslov: "Broj aktivnih volontera do 5",
          bodovi: 5,
          score: 0,
        },
        {
          naslov: "Broj aktivnih volontera više od 5",
          bodovi: 10,
          score: 0,
        },
        {
          naslov:
            "Broj partnerskih udruga s kojima se planira zajednički koristiti dodijeljeni poslovni prostor",
          bodovi: 2,
          score: 0,
        },
      ],
    };
  },
};
</script>
<style>
.naslov-natjecaja {
  text-align: center;
}

.obrazac {
  padding: 10px;
  align-content: center;
}

.natjecaj-card {
  padding: 40px;
}
</style>
