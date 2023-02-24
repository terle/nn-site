<script setup lang="ts">

import parrallaxImageUrl from './assets/jason-hogan-YyFwUKzv5FM-unsplash.jpg'
import logoBigUrl from './assets/logo-big.svg'
import logosmallUrl from './assets/logo-smal.svg'
</script>

<template>
  <v-app>
    <v-app-bar app elevation="12">
      <v-app-bar-nav-icon>
        <v-img :src="logosmallUrl" width="4vh"></v-img>
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        Northern Nerds
      </v-app-bar-title>
    </v-app-bar>
    <v-parallax class="pt-16" max-height="60vh" :src="parrallaxImageUrl" >

      <div class="mt-3 d-flex flex-column justify-center align-center">
        <v-img :src="logoBigUrl" width="60vh"></v-img>
        <div class="text-h6 font-weight-light text-white">
          Maximazing freedom since 2019
        </div>
      </div>
    </v-parallax>
    <div class="text-body-2">
      Photo by <a
        href="https://unsplash.com/@jasonhogan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason
        Hogan</a> on <a
        href="https://unsplash.com/s/photos/freedom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </div>

    <v-timeline>
      <v-timeline-item dot-color="purple-lighten-2" fill-dot>
        <v-card>
          <v-card-title class="bg-purple-lighten-2">
            <v-icon size="large" class="me-4" icon="mdi-magnify"></v-icon>
            <h2 class="font-weight-light">
              Title 1
            </h2>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
        <v-card>
          <v-card-title class="bg-amber-lighten-1 justify-end">
            <h2 class="me-4 font-weight-light">
              Title 2
            </h2>
            <v-icon size="large" icon="mdi-home-outline"></v-icon>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="cyan-lighten-1" fill-dot>
        <v-card>
          <v-card-title class="bg-cyan-lighten-1">
            <v-icon class="me-4" size="large" icon="mdi-email-outline"></v-icon>
            <h2 class="font-weight-light">
              Title 3
            </h2>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="red-lighten-1" fill-dot size="x-small">
        <v-card>
          <v-card-title class="bg-red-lighten-1 justify-end">
            <h2 class="me-4 font-weight-light">
              Title 4
            </h2>
            <v-icon size="large" icon="mdi-account-multiple-outline"></v-icon>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="green-lighten-1" fill-dot>
        <v-card>
          <v-card-title class="bg-green-lighten-1">
            <v-icon class="me-4" size="large" icon="mdi-phone-in-talk"></v-icon>
            <h2 class="font-weight-light">
              Title 5
            </h2>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-footer class="text-center d-flex flex-column">
      <div>
        <v-btn class="mx-4" icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/tbrix/"
          target="_blank"></v-btn>
        <v-btn class="mx-4" icon="mdi-github" variant="text" href="https://github.com/terle/" target="_blank"></v-btn>

      </div>

      <div class="pt-0">
        <v-btn variant="plain" href="https://datacvr.virk.dk/enhed/virksomhed/40216197" target="_blank"></v-btn>
        <v-btn variant="plain"
          href="mailto:info@northern-nerds.dk"><v-icon>mdi-email</v-icon>info@northern-nerds.dk</v-btn>
        <v-btn variant="plain" href="tel:30234321"><v-icon>mdi-phone</v-icon> 30 234 321</v-btn>
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Northern Nerds</strong> - CVR 40216197
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
