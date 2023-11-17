<template>
  <v-card style="width: 100%;position: relative">
    <v-card-title>
      Create new order
    </v-card-title>
    <v-divider/>
    <v-card-text>
      <label>Order status</label>
      <v-select
        v-model="orderModel.status"
        :items="statuses"
        item-text="text"
        item-value="value"
        dense
        outlined
      >
      </v-select>

      <label>Comment</label>
      <v-textarea
        v-model="orderModel.comment"
        outlined
        dense
      >
      </v-textarea>
    </v-card-text>
    <v-divider/>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="clearForm" small depressed>clear</v-btn>
      <v-btn @click="saveOrderHandler" small depressed style="background-color: green;color: white">save</v-btn>
    </v-card-actions>
    <LodingComponent v-if="isLoading"/>
  </v-card>
</template>
<script>
import {mapActions} from "vuex"

export default {
  data() {
    return {
      statuses: [
        {text: "Новый", value: "1"},
        {text: "Выполнен", value: "2"},
      ],
      orderModel: {
        status: null,
        comment: null
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions({
      makeOrder: "makeOrder"
    }),
    clearForm() {
      this.orderModel.status = null
      this.orderModel.comment = null
    },
    async saveOrderHandler() {
      if (!this.orderModel.comment || !this.orderModel.status) {
        alert("Please feel all fields")
        return
      }
      this.isLoading = true
      try {
        await this.makeOrder(this.orderModel)
        this.clearForm()
        alert("Order make")
      } catch (err) {
        alert(err)
      } finally {
        this.isLoading = false
      }

    }
  }
}
</script>
