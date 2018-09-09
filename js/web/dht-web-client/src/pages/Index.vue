<template>
  <div class="index-main-container">
    <div class="measure-container">
      <i class="fa fa-thermometer-empty measure-icon" aria-hidden="true"></i>
      <span class="measure-title">Temperature</span>
      <span class="measure-value">{{this.dataObj.temp.split('.')[0]}}°</span>
    </div>

    <div class="measure-container">
      <i class="fa fa-tint measure-icon" aria-hidden="true"></i>
      <span class="measure-title">Humidity</span>
      <span class="measure-value">{{this.dataObj.hum.split('.')[0]}}%</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      dataObj: {temp: 0, hum: 0}
    }
  },

  methods: {
    getData () {
      axios.get('http://192.168.220.208:3000/').then((result) => {
        this.dataObj = result.data
      }).catch((err) => {
        console.log(err)
      })
    },

    startDataLoop () {
      setInterval(this.getData, 2500)
    }
  },

  created () {
    this.getData()
    this.startDataLoop()
  }
}
</script>

<style>
.index-main-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.measure-container {
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;
}

.measure-title {
  color: #9AB4CB;
  font-size: 30px;
}

.measure-icon {
  font-size: 90px;
  color: #396A92;
}

.measure-value {
  font-size: 55px;
  color: #FDFDFD;
}
</style>
