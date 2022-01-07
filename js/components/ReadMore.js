export let readMore = Vue.component("read-more", {
  /* html */
  template: `<div>
            <h2>{{title}}</h2>
            <div>
                <p class="mb-3 d-block cut-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa neque odio consectetur impedit tempore modi accusantium! Voluptatem molestiae nemo inventore soluta corrupti. Culpa perferendis sapiente deserunt aperiam maxime consectetur recusandae quasi commodi dicta temporibus pariatur ab repellendus dignissimos natus aliquam odit ullam, quaerat autem non hic, quidem dolore laboriosam.</p> 
                <button 
                    class="btn btn-primary"
                    @click="readMore"
                >{{read}}</button>
            </div>
            <hr class="mb-4">
        </div>`,
  data() {
    return {
      read: "Read More",
    };
  },
  methods: {
    readMore() {
      if (this.read == "Read More") {
        this.read = "Read Less";
      } else {
        this.read = "Read More";
      }
    },
  },
  computed: {},
});
