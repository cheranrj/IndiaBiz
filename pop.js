Vue.component('my-modal',{
    template:`

    <div>
      <div class="modal-background"></div>
      <div class="modal-content">
          <!-- Any other Bulma elements you want -->

          <div class = "box">

            <slot></slot>
            <button class="red button3" @click="$emit('close')">
            Close
            </button>
          </div>

      </div>

      </div>

    `

})

Vue.use(VeeValidate);

new Vue({
        el: '#app',
        data:{

        Name: "",
        email: "",
        password: "",
        number: "",
        textarea: "",

          showLoginModal:false
        },

    //     methods: {
    // 	signUp: function(e) {
    //     	//Sign User Up
    //     }
    // }

    methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('From Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }


    });
