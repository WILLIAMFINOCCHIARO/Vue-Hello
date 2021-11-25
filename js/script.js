var root = new Vue ({
  el:"#root",
  data:{
    message:"Hello Vue",
    mieClassi : "text-red",
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
           ],
    imageSrc : "img/colosseo-roma-storia.jpg"
    
    
  },

  methods : {
    TextColor: function(){
      if(this.mieClassi == 'text-blue') {
				this.mieClassi = 'text-red';
			} else {
				this.mieClassi = 'text-blue';
			}
    }

  },

  

 
  

  
  

});

