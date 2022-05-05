<template>
    <div class="Project">

      <h2>Moisture Level : {{ moisture }} %</h2>

      <h2>Date of Last Watered : {{ date }} </h2>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { 
      moisture: 0, 
      date: 0
      };
  },

  methods: {
    fetchAPIData() {
      axios
        .get('http://a040d3e67b2774f3eaa1ef2411e28d21-1710402639.ap-east-1.elb.amazonaws.com/api/lastwatered')
        .then((response) => {
          this.moisture = response.data.reverse()[0].moisture/1024*100;
          console.log(this.moisture);
          this.date = response.data.reverse()[0].date;
          console.log(this.date);
        });
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.fetchAPIData();
    }, 2000);
  },
};
</script>

<style>
a:link, a:visited {
  background-color: none;
  color: rgb(0, 0, 0);
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
a:hover, a:active {
  background-color: green;
}
h2{
  margin: 0;
    display: flex;
    justify-content: center;
    height: 15vh;
    align-items:center;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 30px;
}
</style>