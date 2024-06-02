
<script setup>
import {useUserStore} from '~/stores/user'
const user = useUserStore()
console.log(user.user);



</script>


<template>
	<Header />
  <v-container>
    <v-card class="box pb-2 d-flex align-center px-3  pt-3">
      <div class="d-flex align-center">
        <img src="../assets/images/log.png" alt="" width="150" height="50" />

        <div class="ml-10">
          <span class="edit">EDITING</span>
          <p style="font-size: 20px; font-weight: 400" class="mb-0">
            Carousel Capital
          </p>
        </div>
      </div>
<v-spacer></v-spacer>
      <v-btn class="bg-blue" prepend-icon="mdi-check">
        <template v-slot:prepend>
          <v-icon color="white"></v-icon>
        </template>
        Done
      </v-btn>
    </v-card>
    <v-card class="box2 mt-2 pa-10">
      <v-row>
        <v-col cols="12" md="4">
          <p class="mb-3 text-blue">Sponsor Level</p>
          <p class="mb-3 text-blue">Profile Visiblility</p>
          <p class="mb-3 text-blue">Sponsor Overview</p>
          <p class="mb-3 text-blue">Sponsor Professionals</p>
          <p class="mb-3 text-blue">Current Fund</p>
          <p class="mb-3 text-blue">Investment Criteria</p>
          <p class="text-blue">Industry Sectors of Interest</p>
        </v-col>

        <v-col cols="12" md="8">
          <v-select
            label="Sponsor Level"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            density="compact"
          ></v-select>

          <v-radio-group>
            <v-radio value="one" color="primary">
              <template #label>
                <p class="mb-0 label">
                  Sponsor Trial Level(free member,Executive profile details
                  initially hidden)
                </p>
              </template>
            </v-radio>
          </v-radio-group>

          <p class="ml-6 mb-3" style="font-weight: 500">Total views allowed</p>
          <div class="d-flex justify-start ml-6">
            <v-text-field
              label="20"
              density="compact"
              variant="outlined"
              class="input"
            ></v-text-field>
            <p style="font-weight: 500" class="ml-5">Views Used: 0/20</p>
          </div>

          <v-radio-group>
            <v-radio value="one" color="primary">
              <template #label>
                <p class="mb-0 label">
                  Unlimited(paying member,all Executive profiledetails shown)
                </p>
              </template>
            </v-radio>
          </v-radio-group>

          <p class="ml-3 mb-1" style="font-weight: 500">
            Sponsor Professionals
          </p>
          <p class="ml-6 mb-3" style="font-weight: 500">Total user allowed</p>
          <div class="d-flex justify-start ml-6">
            <v-text-field
              label="20"
              density="compact"
              variant="outlined"
              class="input"
            ></v-text-field>
            <p style="font-weight: 500" class="ml-5">Views Used: 0/20</p>
          </div>

          <v-select
            label="Profile Visibility"
            class="fz-11"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            density="compact"
          ></v-select>

          <div class="card pa-5">
            <p class="">Firm Visibility Setting</p>
            <p class="fw-semibold mb-1">OTHER EXECUTIVES</p>
            <v-radio-group>
              <v-radio label="All" value="one" color="primary"></v-radio>
            </v-radio-group>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
body {
  background-color: #eff0f1;
}

.label {
  color: black !important;
  font-weight: 500;
}

.box {
  /* max-width: 1800px; */
  width: 100%;
  border-top: 3px solid #3364ed;
}
.box2 {
  max-width: 1800px;
  width: 100%;
}
.input {
  max-width: 250px;
  width: 100%;
}

.card {
  max-width: 800px;
  width: 100%;
  background-color: #ebeffc;
}

.edit {
  padding: 3px 15px;
  border-radius: 40px;
  background-color: #DDE8FF;
  color: blue;
  font-size: 12px;
  margin-top: 10px;
}
</style>
