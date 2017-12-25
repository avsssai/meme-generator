new Vue({
  el: '#vue-app',
  data: {
    current: {
        img: 'https://imgflip.com/s/meme/Philosoraptor.jpg',
        msg1: 'How am I going to work?',
        msg2: "Vue is now connected to the template! That's how."
    },
    user_input: {
      img: "",
      msg1: "",
      msg2: ""
    },
    updateData: function(obj) {


      this.current.img = obj.img;
      this.current.msg1 = obj.msg1;
      this.current.msg2 = obj.msg2;
    }

  }
});
