// This applicaiton show we are using the Fetch API to retrieve weather data from the OpenWeatherMap API. 
// The user inputs a city name and the temperature for that city is displayed if it is available. 
// The loading state is displayed while the data is being fetched, and an error message is displayed if there was a problem fetching the data.

<template>
  <div>
    <form @submit.prevent="getWeather">
      <input type="text" v-model="city" placeholder="Enter city name">
      <button type="submit">Get Weather</button>
    </form>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <p v-else>
      The temperature in {{ city }} is {{ temperature }}°F
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      temperature: null,
      loading: false,
      error: null
    };
  },
  methods: {
    async getWeather() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            this.city
          }&appid=YOUR_API_KEY&units=imperial`
        );
        const data = await response.json();
        this.temperature = data.main.temp;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
