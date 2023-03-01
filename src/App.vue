<script setup lang="ts">
import Testimonial from './components/Testimonial.vue'
import parrallaxImageUrl from './assets/jason-hogan-YyFwUKzv5FM-unsplash.jpg'
import logoBigUrl from './assets/logo-big.svg'
import logosmallUrl from './assets/logo-smal.svg'
import profilImageUrl from './assets/profile.png'
import image1Url from './assets/olena-sergienko-dIMJWLx1YbE-unsplash.jpg'
import { ref } from 'vue'

const scrollTo = (elmId: string) => {
  const element = document.getElementById(elmId);
  if (element == null)
    return
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
const drawer = ref(false);
const links = ref([
  { text: 'About', target: 'about' },
  { text: 'Testimonial', target: 'testimonials' },
  { text: 'Me', target: 'me' },
])

const workExperience = ref([
  {
    pow: "Northern Nerds",
    period: "2019 - now",
    title: "Freelance Consultant"
  },
  {
    pow: "Apply Agency",
    period: "Dec 2021 - Jan 2023",
    title: "Senior Software Udvikler"
  },
  {
    pow: "Nodeco A/S",
    period: "Aug 2020 - Dec 2021",
    title: "IT Architect"
  },
  {
    pow: "Codehouse (later Valtech)",
    period: "Apr 2017 - Apr 2019",
    title: "Consultant/Sitecore Developer"
  }, {
    pow: "Rehfeld (later IQVIA)",
    period: "Apr 2016 - Apr 2017",
    title: "Consultant"
  }, {
    pow: "Netcompany",
    period: "Jan 2014 - Apr 2016",
    title: "Senior Developer"
  }, {
    pow: "Noitso",
    period: "Jun 2012 - Jun 2013",
    title: "Intern & Student Worker"
  }
])

</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" location="bottom" temporary class="">
      <v-list-item v-for="link in links" :key="link.text" @click="scrollTo(link.target)">
        <v-btn variant="text" class="mx-2" rounded="xl">
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
            <v-btn @click="drawer = !drawer" :icon="drawer ? 'mdi-close' : 'mdi-menu'" class="d-sm-none" />
            <!-- nav buttons are hidden -->
            <v-btn v-for="link in links" :key="link.text" variant="text" class="mx-2 d-none d-sm-flex" rounded="xl"
              @click="scrollTo(link.target)">
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
      </v-parallax>
      <div class="text-disabled credit">
        Photo by <a
          href="https://unsplash.com/@jasonhogan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason
          Hogan</a> on <a
          href="https://unsplash.com/s/photos/freedom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
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
      <v-row>
        <v-col cols="6" class="d-none d-md-flex flex-column">
          <v-img :src="image1Url" max-height="90vh" />
          <div class="text-disabled credit">
            Photo by <a
              href="https://unsplash.com/@olenkasergienko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olena
              Sergienko</a> on <a
              href="https://unsplash.com/photos/dIMJWLx1YbE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
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
              Terkel is committed to providing exceptional customer service and support
              throughout every stage of the project.
            </p>

            <p class="ma-4">
              Thank you for considering Northern Nerds for your IT consulting needs.
            </p>
          </div>
        </v-col>
      </v-row>
    </section>

    <section id="testimonials">
      <Testimonial />
    </section>

    <section id="me" class="">
      <v-container fluid>
        <v-row justify="center">
          <div class="d-flex align-center flex-column">
            <div class="text-h2">
              Terkel Brix
            </div>
            <div class="text-h6 text-medium-emphasis">
              Bachelor of Engineering, IT - DTU - 2013
            </div>
          </div>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
            <v-card class="ma-4" height="100%">
              <v-card-title>
                Career
              </v-card-title>
              <v-card-text>
                <v-timeline side="end">
                  <v-timeline-item v-for="(item, key) in workExperience" :key="item.title" dot-color="blue-grey-lighten-3"
                    size="small" rounded>
                    <div class="d-flex flex-column">
                      <div class="text-h6 font-weight-black">
                          {{ item.title }}
                        </div>
                      <div class="text-subtitle-1">
                        {{ item.pow }}
                      </div>
                      <div class="text-caption">
                        {{ item.period }}
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" class="d-none d-md-flex">
            <v-img class="ma-4" :src="profilImageUrl" height="50vw" max-height="60vw" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-footer class="text-center d-flex flex-column">
      <div>
        <v-btn class="mx-4" icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/tbrix/"
          target="_blank" />
        <v-btn class="mx-4" icon="mdi-github" variant="text" href="https://github.com/terle/" target="_blank" />
      </div>
      <div class="pt-0">
        <!-- <v-btn variant="plain" href="https://datacvr.virk.dk/enhed/virksomhed/40216197" target="_blank" /> -->
        <v-btn variant="plain"
          href="mailto:info@northern-nerds.dk"><v-icon>mdi-email</v-icon>info@northern-nerds.dk</v-btn>
        <v-btn variant="plain" href="tel:30234321"><v-icon>mdi-phone</v-icon> 30 234 321</v-btn>
      </div>
      <div>
        {{ new Date().getFullYear() }} — <strong>Northern Nerds</strong> - CVR 40216197
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
.credit {
  background-color: #F5F5F5;
}

.credit>a {

  color: #BDBDBD;
}

.tagline {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
