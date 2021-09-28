<template>
  <div class="component" v-bind:class="[componentDesign]" v-bind:style="styles">
    <header>
      <h4 v-show="module.settings.header" class>
        {{ module.settings.header }}
      </h4>
    </header>

    <section v-if="!isLoading">
      <article
        class="animated"
        v-bind:class="{ fadeOut: change, fadeIn: next }"
      >
        <section class="quote">
          <i class="fad fa-quote-right"></i>
          <p class="text-bright">
            <strong>{{ quote.value }}</strong>
          </p>
        </section>
      </article>
    </section>

    <section v-if="isLoading">
      <loader></loader>
    </section>
  </div>
</template>
<script>
export default {
  name: "chuck-norris",

  /*
   * Prop: `module` access the widget settings data
   */
  props: ["module"],

  data() {
    return {
      isLoading: true,
      quote: null,
      change: false,
      next: true
    };
  },

  created() {
    this.subscribe("BROADCAST_CHUCK_NORRIS_DATA", this.handler);
  },

  methods: {
    handler(data) {
      if (data) {
        this.quote = data;

        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }

      // TODO: add some error handling?
    },
  },

  watch: {
    module: {
      immediate: true,
      handler(newVal) {
        this.isLoading = true;
        this.emit("REQUST_CHUCK_NORRIS_DATA");

        // after receiving new configuration, update this module.
        this.module = newVal;
      },
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

.last {
  .quote {
    text-align: right;
  }
}

.quote {
  i {
    font-size: 40px;
    margin: 0 20px 10px 0;
  }
}

</style>
