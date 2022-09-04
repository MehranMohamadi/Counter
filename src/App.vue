<script setup>
import {useCounterStore} from '@/stores/counter'

const storeCounter = useCounterStore();
</script>

<template>

  <div>
    <div class="counter">{{ storeCounter.count }}
      <h3>this counter is : {{ storeCounter.odd0rEven }} </h3></div>
    <button class="increaseCounter" v-on:click="storeCounter.increaseCount"> +</button>
    <button class="decreaseCounter" v-on:click="storeCounter.decreaseCount"> -</button>
    <div><h3>
      edit counter:
    </h3>
      <input type="number" v-model="storeCounter.count"></div>
  </div>


</template>

<style scoped>

.counter {
  font-size: 40px;
  color: rgba(405, 261, 71, 0.55);
  text-align: center;
}

.decreaseCounter {
  font-size: 100px;
  background-color: rgba(553, 33, 33, 0.55);
  text-align: center;
  border: none;
  border-radius: 10px;
  align-items: center;
  margin: 10px 10px 10px 10px;
}

.increaseCounter {
  font-size: 100px;
  background-color: rgba(177, 549, 79, 0.55);
  text-align: center;
  align-items: center;
  border: none;
  border-radius: 10px;
}


</style>
