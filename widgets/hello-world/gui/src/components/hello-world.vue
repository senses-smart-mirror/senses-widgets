<template>
  <div
    class="component"
    v-bind:class="[componentDesign]"
    v-bind:style="styles"
    v-if="module.settings.show"
  >
    <header>
      <h4 v-show="module.settings.header" class>
        {{ module.settings.header }}
      </h4>
    </header>

    <section>
      <p class="text-bright">{{ description }}</p>

      <p>You can use this widget as an example for others!</p>

      <footer>
        <small><em>Thank you for using this example.</em></small>
      </footer>
    </section>
  </div>
</template>
<script>
export default {
  name: "hello-world",

  /*
   * Prop: `module` access the widget settings data
   */
  props: ["module"],

  data() {
    return {
      title: "Hello World",
      description: "",};
  },

  watch: {
    module: {
      immediate: true,
      handler(newVal) {

        // Request socket event.
        this.emit("REQUEST_HELLO_WORLD_DATA");

        // after receiving new configuration, update this module.
        this.module = newVal;
      },
    },
  },

  created() {
    // Subscribe to any socket event.
    this.subscribe("BROADCAST_HELLO_WORLD_DATA", this.handler);
  },

  methods: {
    handler(data) {
      this.description = data.data.description;
    },
  },

  computed: {
    styles() {
      return {
        width: this.module.settings.widget_width + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
/*
* Put your widget styling here. 
*/
</style>
