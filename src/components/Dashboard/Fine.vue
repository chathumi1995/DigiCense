<template>
  <div>
    <v-content>
      <v-container class="my-3">
        <v-container class="px-3" v-for="fine in fines" :key="fine.receipt_number">
          <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
            <input type="hidden" name="merchant_id" value="1212712" />
            <!-- Replace your Merchant ID -->
            <input type="hidden" name="return_url" value="http://localhost:8080/fine" />
            <input type="hidden" name="cancel_url" value="http://localhost:8080/fine" />
            <input type="hidden" name="notify_url" value="https://sandbox.payhere.lk/pay/checkout" />
            <input type="hidden" name="order_id" />
            <input type="text" name="items" />
            <input type="hidden" name="currency" value="LKR" />
            <input type="hidden" name="amount" value="600" />
            <input type="hidden" name="first_name" value="Hiruni" />
            <input type="hidden" name="last_name" value="Perera" />
            <input type="hidden" name="email" value="hirunimanth@gmail.com" />
            <input type="hidden" name="phone" value="0713538459" />
            <input type="hidden" name="address" value="1212/10A" />
            <input type="hidden" name="city" value="Hokandara road" />
            <input type="hidden" name="country" value="Pannipitiya" />
            <v-card class="text-xs-center pa-3 mx-3">
              <v-layout row wrap>
                <v-flex xs6 sm6 md4 class="pa-2">
                  <div class="caption grey--text">Issued By</div>
                  <div>Matara Police</div>
                </v-flex>
                <v-flex xs6 sm4 md2 class="pa-2">
                  <div class="caption grey--text">Issued Date</div>
                  <div>{{fine.issued_date}}</div>
                </v-flex>
                <v-flex xs6 sm4 md2 class="pa-2">
                  <div class="caption grey--text">Due Date</div>
                  <div>{{fine.due_date}}</div>
                </v-flex>
                <v-flex xs6 sm4 md2 class="pa-2">
                  <div class="caption grey--text">Fine Amount</div>
                  <div>600</div>
                </v-flex>
                <v-flex xs12 sm4 md2 class="pa-2">
                  <div class="caption grey--text">
                    <v-btn small class="yellow accent-4" dark type="submit">
                      <v-icon left>payment</v-icon>
                      <span>PAY</span>
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </form>
        </v-container>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {}
    };
  },
  computed: {
    fines() {
      return this.$store.getters.fines;
    }
  },
  methods: {
    fetchFines() {
      this.$store.dispatch("fetchFines");
    },
    async payFine() {
      const header = {
        headers: { Authorization: "Bearer " + this.$store.getters.idToken }
      };
      const res = await axios.get("/users/fines/pay", header);
      console.log(res);
      this.htmlString = res.data;
      document.write(this.htmlString, res.headers);
    }
  },
  created() {
    this.fetchFines();
  }
};
</script>