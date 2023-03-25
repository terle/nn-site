<script setup lang="ts">

import Testimonial from './components/Testimonial.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Me from './components/Me.vue'
import parrallaxImageUrl from './assets/jason-hogan-YyFwUKzv5FM-unsplash-min.jpg'
import logoBigUrl from './assets/logo-big.svg'
import logosmallUrl from './assets/logo-smal.svg'

import Plausible from 'plausible-tracker'
import { ref } from 'vue'
const { trackEvent } = Plausible()

const scrollTo = (elmId: string) => {
  const element = document.getElementById(elmId);
  if (element == null)
    return
  trackEvent("ScrollClick", { props: { elmId } });
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
const drawer = ref(false);
const links = ref([
  { text: 'About', target: 'about' },
  { text: 'Testimonial', target: 'testimonials' },
  { text: 'Me', target: 'me' },
  { text: "Contact", target: "contact" }
])

</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" location="bottom" temporary class="">
      <v-list-item v-for="link in links" :key="link.text" @click="scrollTo(link.target)">
        <v-btn variant="text" class="mx-2" rounded="xl" :aria-label="`NavTo-${link.text}-button}`">
          {{ link.text }}
        </v-btn>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app elevation="10">
      <div class="ma-2" @click="scrollTo('top')">
        <v-img :src="logosmallUrl" width="4vh" />
      </div>
      <v-app-bar-title class="font-weight-thin d-none d-md-flex">
        <!-- app-bar-title hidden on xs and sm	 -->
        Northern Nerds
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <!-- HAMBURGER is only visible on xs -->
          <div class="d-flex justify-end">
            <v-btn @click="drawer = !drawer" :icon="drawer ? 'mdi-close' : 'mdi-menu'" class="d-sm-none"
              aria-label="Nav-hamburger-button" />
            <!-- nav buttons are hidden -->
            <v-btn v-for="link in links" :key="link.text" variant="text" class="mx-2 d-none d-sm-flex" rounded="xl"
              @click="scrollTo(link.target)" :aria-label="`nav-button-for-${link.text}`">
              {{ link.text }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-container fluid class="pa-0" id="top">
      <v-parallax class="mt-13" height="60vw" :src="parrallaxImageUrl">
        <div class="mt-8 d-flex flex-column  align-center">
          <v-img :src="logoBigUrl" width="40vw" max-width="50vw"></v-img>
          <div class="text-h6 font-weight-light text-white mt-2">
            Maximazing freedom since 2019
          </div>
        </div>
        <div class="text-disabled credit">
          Photo by <a
            href="https://unsplash.com/@jasonhogan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason
            Hogan</a> on <a
            href="https://unsplash.com/s/photos/freedom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </v-parallax>

    </v-container>

    <v-container fluid class="tagline text-center text-uppercase text-white bg-grey-darken-2 py-4 px-0">
      <v-row align="center">
        <v-col cols="12">
          <h1 class="headline mb-6"> Revolutionize Your Business</h1>
          <h2 class="subtitle-1 mb-12">with Cutting-Edge IT Solutions from Northern Nerds</h2>
          <p class="subtitle-2">The Expert IT Consultants You Can Trust!</p>
        </v-col>
      </v-row>
    </v-container>

    <section id="about">
      <About />
    </section>

    <section id="testimonials">
      <Testimonial />
    </section>

    <section id="me" class="">
      <Me />
    </section>

    <section id="contact">
      <Contact />
    </section>

    <v-footer class="text-center d-flex flex-column">
      <div>
        <v-btn class="mx-4" icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/tbrix/" target="_blank"
          aria-label="linkedin-button" />
        <v-btn class="mx-4" icon="mdi-github" variant="text" href="https://github.com/terle/" target="_blank"
          aria-label="github-button" />
      </div>
      <div class="pt-0">
        <!-- <v-btn variant="plain" href="https://datacvr.virk.dk/enhed/virksomhed/40216197" target="_blank" /> -->
        <v-btn variant="plain" href="mailto:terkel@northern-nerds.dk" aria-label="mail-to-button"><v-icon
            icon="mdi-email" />terkel@northern-nerds.dk</v-btn>
        <v-btn variant="plain" href="tel:30234321" aria-label="phone-me-button"><v-icon icon="mdi-phone" />30 234
          321</v-btn>
      </div>
      <div>
        {{ new Date().getFullYear() }} — <strong>Northern Nerds</strong> - CVR 40216197
      </div>
    </v-footer>
  </v-app>
</template>

<style>
.credit>a {
  color: #616161;
}

.credit {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
}

.tagline {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
