<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="namein"
            :counter="20"
            label="Name"
            required
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="lastnamein"
            :counter="20"
            label="Lastname"
            required
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="datein"
            :counter="10"
            label="Date (dd/mm/yyyy)"
            required
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="phonenumberin"
            :counter="20"
            label="PhoneNumber"
            required
          />
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      color="light-blue lighten-1"
      class="mr-4"
      @click="validate"
    >
      submit
    </v-btn>
    <v-btn
      color="red lighten-3"
      class="mr-4"
      @click="reset"
    >
      Reset
    </v-btn>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      namein: '',
      lastnamein: '',
      datein: '',
      phonenumberin: ''
    }
  },
  methods: {
    resetValue () {
      this.namein = ''
      this.lastnamein = ''
      this.datein = ''
      this.phonenumberin = ''
    },
    validate () {
      const dataText = {
        namein: this.namein,
        lastnamein: this.lastnamein,
        datein: this.datein,
        phonenumberin: this.phonenumberin,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
      db.collection('MyText').doc().set(dataText)
      this.resetValue()
    },
    reset () {
      this.resetValue()
    }
  }
}
</script>
