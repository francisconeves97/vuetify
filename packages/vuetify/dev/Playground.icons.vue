<template>
  <div>
    <v-icon @click="foo" :size="currentSize" :disabled="disabled" :icon="icon" aria-foo="asd" />
    <div class="box">
      <button @click="icon = '$close'">$close</button>
      <button @click="icon = 'md:close'">material icons</button>
      <button @click="icon = 'mdi:mdi-close'">mdi</button>
      <button @click="icon = 'mdi-svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'">mdi-svg</button>
      <button @click="icon = 'fa5:fas fa-home'">fa5</button>
      <button @click="icon = AbTesting">component</button>
    </div>
    <input type="checkbox" :checked="disabled === true" @change="disabled = !disabled" /><label>disabled</label>
    <input :value="icon" @change="e => icon = e.target.value">
    <button @click="toggle">toggle</button>
    <div class="box">
      <div v-for="size in sizes" :key="size">
        <input type="radio" :checked="currentSize === size" @change="currentSize = size" /><label>{{ size }}</label>
      </div>
    </div>
    <v-icon icon="mdi:mdi-arrow-up"/>
    <v-icon icon="fa5:fas fa-home"/>
    <v-icon :icon="AbTesting"/>
    <v-icon icon="$custom"/>
  </div>
</template>

<script>
  import { ref, markRaw } from 'vue'
  import { AbTesting } from 'mdue'

  export default {
    name: 'Playground',
    setup () {
      const currentSize = ref('default')
      const disabled = ref(false)
      const dense = ref(false)
      const icon = ref('$close')
      const bar = () => console.log('click')
      const foo = ref(bar)
      const type = ref('mdi')

      return {
        icon,
        dense,
        foo,
        currentSize,
        sizes: ['x-small', 'small', 'default', 'large', 'x-large', '120px', '10rem', '28pt'],
        disabled,
        toggle: () => {
          foo.value = foo.value ? null : bar
        },
        type,
        AbTesting: markRaw(AbTesting),
      }
    },
  }
</script>

<style>
  .box {
    width: 150px;
    height: 150px;
    display: inline-block;
  }

  .alpha {
    color: rgba(var(--v-theme-primary), 0.5)
  }
</style>

<style>
.box {
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
</style>
