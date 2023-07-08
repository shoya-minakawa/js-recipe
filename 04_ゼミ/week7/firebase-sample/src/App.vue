<template>
  <div class="app">
    <button v-on:click="postTweet">ツイート</button>
    <div>
      <p v-for="tweet in tweets" v-bind:key="tweet.id">
        {{ tweet.text }}
      </p>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "./firebase.js"

export default {
  data() {
    return {
      //このような形でtweetsにはデータベースの内容がpushされていきます
      tweets: [],
    }
  },
  methods: {
    postTweet() {
      addDoc(collection(db, "tweets"), {
        text: "こんにちは！",
      })
    },
  },
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>
