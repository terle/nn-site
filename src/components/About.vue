<script setup lang="ts">
import { ref } from 'vue'
import image1Url from './../assets/olena-sergienko-dIMJWLx1YbE-unsplash.jpg'
</script>

<template>

 <v-container fluid>
        <v-row>
          <v-col cols="6" class="d-none d-md-flex flex-column">
            <v-img :src="image1Url" max-height="90vh">

              <div class="text-disabled credit">
                Photo by <a
                  href="https://unsplash.com/@olenkasergienko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olena
                  Sergienko</a> on <a
                  href="https://unsplash.com/photos/dIMJWLx1YbE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
            </v-img>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
            <div>
              <div class="text-h2">About</div>
              <p class="ma-4">
                Northern Nerds is a Danish IT consulting business run by Terkel Brix, a freelance IT consultant with 12+
                years of experience. Terkel specializes in Web Application Development, C# and ASP.NET Development,
                Sitecore/C#-based Solutions, and Vue.js Development. He offers personalized solutions to businesses of all
                sizes and industries, building strong relationships with clients and delivering exceptional results that
                exceed their expectations.
              </p>
              <p class="ma-4">
                Terkel is committed to providing exceptional customer service and support throughout every stage of the
                project.
              </p>
              <p class="ma-4">
                Thank you for considering Northern Nerds for your IT consulting needs.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>

</template>

<style scoped></style>