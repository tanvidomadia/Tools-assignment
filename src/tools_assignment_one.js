 window.onload = function()
 {
var game = new Phaser.Game(1000, 740);
 var background = [];
 var screen_text = [];
var video;
 //code for starting screen
 var start_screen = function(game){}
 start_screen.prototype =
 {
  init : function()
  {
     game.load = new CustomLoader(game);
  },
   preload : function()
  {
  //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
   //game.load.webfont('tahoma','Tahoma');
   game.load.video('hands','assets/hands.mp4');

 },
 start : function()
 {

     //  After 5 seconds we'll swap to a new video
     game.time.events.add(5000, changeSource, this);

     //  This would swap on a mouse click
     // game.input.onDown.addOnce(changeSource, this);

 },
  create : function()
  {
  //   sessionstart()
  ;
  //video = game.add.video('hands');
  //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
  //submit_button = game.add.button()
  //video.play(true);
  //var sprite = video.addToWorld(-80,60,0,0);
  //sprite.scale.setTo(0.75,0.75);

  var style = { font: "23px arial", fill: "#00C7FF", boundsAlignH: "center", boundsAlignV: "middle" };
  screen_text[0] = game.add.text(167,100,'Let us learn about how a pan works',style);
  //var style1 = { font: "16px tahoma", fill: "#00C7FF", boundsAlignH: "center", boundsAlignV: "middle" };
  // reg.modal = new gameModal(game);
    //  this.createModals();

  game.PhaserWebComponents.components.Media.VideoPlayer({
  game: this.game,
  // attach to an HTML component. Will replace what ever selector you have
  // target: secondWindow.getContainerNode().querySelector('[data-replace="videoplayer"]'),
  // attach to a phaser object.
  owner: box,
  // Any events you need to hook.
  // Events: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
  events: {},
  options: {
    // OPTIONAL. center it on the phaser object.
    center: true,
    styles: { // OPTIONAL.
      // this is going to be moved into the code for the owner prop
      position: 'absolute',
      // this puts it 300 pixels above the initial position
      top: 300,
      // this should be fairly obvious. lol
      left: 0
    },
    videoOptions: {
      /// Video Sources
      sources: [
        "http://download.blender.org/peach/trailer/trailer_1080p.mov",
        "http://mirror.cessen.com/blender.org/peach/trailer/trailer_1080p.ogg"
      ],
      // OPTIONAL. a title if you need one
      title: "Big Buck Bunny",
      // OPTIONAL. An external link
      link: "http://peach.blender.org/",
      // OPTIONAL. Width of the video player.
      width: '400px',
      // OPTIONAL. Starts the video at the seconds position specified.
      startPosition: 10,
      // OPTIONAL. Start playing the video once it is loaded.
      autoPlay: false,
      icons: {
        // This is a simple template to handle the icons. Currently setup for fontawesome
        template: `<i class="[$icon]"></i>`,
        // These are the classes of each of the buttons that are used.
        classes: {
          // used for the sizes
          small: 'fa fa-fw',
          big: 'fa fa-fw fa-4x',

          // used for the loader
          loading: 'fa-spinner fa-pulse',

          play: 'fa-play',
          pause: 'fa-pause',
          restart: 'fa-refresh',
          stop: 'fa-stop',
          fullscreen: 'fa-expand',
          mute: 'fa-volume-off',
          volume: 'fa-volume-on',
        }
      },
    },
  }
})
  },





  render : function()
         {
          game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
          },

 }

 /*var quiz_screen = function(game){}
 quiz_screen.prototype =
 {
  init : function()
  {
     game.load = new CustomLoader(game);
  },
   preload : function()
  {
  //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
   game.load.webfont('tahoma','Tahoma');
   game.load.video('demo','assets/SummerBreeze.mp4');

 },
  create : function()
  {
  //   sessionstart();

  background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
  //submit_button = game.add.button()
  var style = { font: "23px tahoma", fill: "#00C7FF", boundsAlignH: "center", boundsAlignV: "middle" };
  screen_text[0] = game.add.text(167,100,'Let us learn about how a pan works',style);
  var style1 = { font: "16px tahoma", fill: "#00C7FF", boundsAlignH: "center", boundsAlignV: "middle" };gagame.load.video('');me.load.video('');


  },



  render : function()
         {
          game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
          },

 }*/


game.state.add('start_screen',start_screen);
//game.state.add('quiz_screen',quiz_screen);
game.state.start('start_screen');

}
