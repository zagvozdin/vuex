<template>
  <div>
    <v-container fluid>
      <v-row> <Photo v-for="el in photos" :key="el.id" :photo="el" /></v-row
    ></v-container>
  </div>
</template>
<script>
import Photo from "@/components/Photo/Photo.vue";
export default {
  components: { Photo },
  data: () => ({
    photos: [],
  }),
  mounted() {
    this.getPhotos();
  },
  methods: {
    getPhotos() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=8")
        .then((resp) => (this.photos = resp.data));
    },
  },
};
</script>
<style scoped>
</style>