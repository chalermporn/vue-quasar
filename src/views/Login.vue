<template>
  <q-layout view="lHh lpR lff">
    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      content-class="bg-primary text-white"
      :width="500">
      <!-- drawer content -->
      <q-img src="@/assets/home.jpg" style="height: 100%">
        <div
          class="q-pt-none"
          v-if="$q.screen.gt.xs"
          style="
            background-color: inherit;
            background-image: none;
            text-align: center;
            width: 100%;
          ">
          <!-- border-style: solid; -->
          <div style="padding-left: 3px; padding-top: 110px">
            <p class="text-center">
              <span class="text-h5"> ระบบบริหารทรัพย์สินพร้อมขาย </span>
              <br />
              <span class="text-h6">NPA Management System </span>
            </p>
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <div class="col-12" style="text-align: left; padding-bottom: 5%">
        <span
          class="q-pr-sm text-subtitle2 float-left"
          style="padding-top: 50px; padding-left: 20px; width: 100%">
          {{ realDateTime }}
          <q-linear-progress
            size="xs"
            color="primary"
            label="Change Model"
            style="width: 90%"/>
        </span>
      </div>

      <br />
      <br />
      <div
        class="row justify-center items-center"
        style="
          padding-top: 10px;
          padding-bottom: 50px;
          border: 1px solid;
          border-color: white;
        ">
        <div style="background-color: rgb(0, 166, 230)">
          <!-- <img src="statics/avatars/logo_white_v.jpg" /> -->
          <img src="@/assets/Krungthai_Logo.jpg" style="height: 110px" />
          <div
            style="margin-top: -95px; margin-bottom: 15px; padding-left: 110px"
            class="text-white">
            <span class="text-h5">
              ระบบบริหารทรัพย์สินพร้อมขาย &nbsp;&nbsp;
            </span>
            <div style="margin-top: 13px"></div>
            <span class="text-h5">NPA Management System &nbsp;&nbsp;</span>
          </div>
        </div>
      </div>
      <!-- banner -->

      <div class="row justify-center items-center">
        <span class="text-h5"> ลงชื่อเข้าใช้งานระบบ </span>
      </div>
      <!-- username -->
      <div class="row justify-center items-center">
        <q-input
          outlined
          bg-color="white"
          v-model="username"
          label="USER ID"
          style="width: 280px"
          @keypress.enter.prevent="authen">
          <template v-slot:append>
            <q-icon name="person" color="primary" /> </template></q-input>
      </div>
      <!-- username -->
      <!-- password -->
      <div class="row justify-center items-center" style="padding-top: 15px">
        <q-input
          outlined
          bg-color="white"
          v-model="password"
          label="password"
          type="PASSWORD"
          style="width: 280px"
          @keypress.enter.prevent="authen">
          <template v-slot:append>
            <q-icon name="vpn_key" color="primary" /> </template></q-input>
      </div>
      <!-- password -->

      <div class="row justify-center items-center" style="padding-top: 30px">
        <q-btn
          color="blue-10"
          @click.prevent="authen"
          glossy
          style="width: 280px"
          label=" Login "/>
      </div>

      <br />

      <div
        class="row justify-center items-center"
        style="text-align: center; padding-top: 3%">
        <p>
          <span>
            <!-- งานหลักประกัน ทีมควบคุมงานประเมินราคา -->
          </span>
          <br />
          <!-- <span> Tel: 02-217-1147-59 </span> -->
          <br />
          <span>
            <!-- Email: Admin.collateral@ktb.co.th -->
          </span>
          <br />
          <!-- <span>
            versions 1.20200825
          </span> -->
        </p>
      </div>
    </q-page-container>

    <q-footer class="bg-blue-10 text-white">
      <q-toolbar style="min-height: 44px">
        <q-toolbar-title>
          <div style="text-align: center" class="text-body2">
            <!-- <span style="padding-right: 2%;padding-left: 2%;">Intranet.ktb</span>| -->
            <span style="padding-right: 2%; padding-left: 2%">HELPDESK NPA MANAGEMENT SYSTEM</span>
            |
            <span style="padding-right: 2%; padding-left: 2%">คู่มือปฏิบัติงาน</span>
            |
            <span style="padding-right: 2%; padding-left: 2%">คู่มือขายทรัพย์</span>
            |
            <span style="padding-right: 2%; padding-left: 2%">v1.0</span>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      left: false,
      realDateTime: this.getRealDateTime(),
      username: null,
      password: null
    }
  },
  beforeCreate() {
    setInterval(() => {
      this.realDateTime = this.getRealDateTime()
    }, 1000)
  },

  methods: {
    getRealDateTime() {
      const mt = moment()
      mt.locale('th')
      const day = mt.format('LLLL')
      const year = mt.format('YYYY')
      return day.replace(year, ' พ.ศ. ' + (parseInt(year) + 543)) + ' น. '
    },
    authen() {
      this.$router.push({ name: 'Home' })
    },
    async logout() {

    }
  }
}
</script>
