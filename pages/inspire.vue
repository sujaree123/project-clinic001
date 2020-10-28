<template>
  <v-data-table
    :headers="headers"
    :items="textList"
    :items-per-page="5"
    class="elevation-1"
  />
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      textList: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'namein'
        },
        { text: 'Lastname', value: 'lastnamein' },
        { text: 'Date', value: 'datein' },
        { text: 'PhoneNumber', value: 'phonenumberin' }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      db.collection('MyText').orderBy('timestamp').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        this.textList = data
      })
    }

  }
}
</script>
