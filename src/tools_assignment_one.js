 window.onload = function()
 {
var game = new Phaser.Game(1050, 750);
 var background = [];
 var screen_text = [];
var video=[];
 var video_play= [];
var answer_option = [];
var pause_button;
var play_button;
var feedback = [];
var feedback_next = [];
var left_button = [];
var right_button = [];
var image1;
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


   game.load.video('intro','assets/introduction.mp4');
   game.load.image('before','assets/left.png');
   game.load.image('after','assets/right.png');
   game.load.image('play','assets/playbutton.png');

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
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    this.game.stage.backgroundColor = "#ffffff";

  //  this.game.backgroundColor = 0x4488aa;
  //   sessionstart()
  //video_play[0] = 0;

  image1 = game.add.sprite(300,300,'play');
  image1.inputEnabled = true;
  image1.events.onInputDown.add(this.start1,this);

  video[0] = game.add.video('intro');
  //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
  //submit_button = game.add.button()

     right_button[14] = game.add.sprite(950,0,'before');
     right_button[14].scale.setTo(0.12,0.12);




  var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
//  screen_text[0] = game.add.text(352,17,'Let us learn about how a pan with water works',style);
  //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  // reg.modal = new gameModal(game);
    //  this.createModals();
  },


  /*render : function()
         {
          game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
        },*/
          start1 : function()
          {
            //image1.hide();
            video[0].play(true);

            video[0].loop = false;
            video[0].onComplete.add(this.video_stop,this);

            var sprite = video[0].addToWorld(0,60,0,0);
          //  sprite.scale.setTo(0.75,0.75);
               game.input.onDown.add(this.pause, this);
          },
          pause : function()
          {

          video[0].paused = (video[0].paused) ? false : true;

          },
          video_stop : function()
          {

            right_button[14].inputEnabled = true;
            right_button[14].events.onInputDown.add(this.handsscreen,this);

          },
          handsscreen : function()
          {
          game.state.start('hands_screen');
          },
 }
 var hands_screen = function(game){}
 hands_screen.prototype =
 {
  init : function()
  {
     game.load = new CustomLoader(game);

  },
   preload : function()
  {

   game.load.video('hands','assets/hands.mp4');
   game.load.image('before','assets/left.png');
   game.load.image('after','assets/right.png');
   game.load.image('before','assets/left.png');
   game.load.image('after','assets/right.png');


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
    video_play[1] = 0;
  video[1] = game.add.video('hands');
  this.game.stage.backgroundColor = "#ffffff";
  //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
  //submit_button = game.add.button()
  this.game.scale.pageAlignHorizontally = true;
  this.game.scale.pageAlignVertically = true;
  this.game.scale.refresh();
  this.game.backgroundColor = 0x4488aa;

  video[1].play(true);
  var sprite = video[1].addToWorld(0,60,0,0);
  sprite.scale.setTo(0.75,0.75);




video[1].loop = false;
video[1].onComplete.add(this.video1_stop,this);
left_button[15] = game.add.sprite(38,0,'after');
left_button[15].scale.setTo(0.12,0.12);
left_button[15].inputEnabled = true;
left_button[15].events.onInputDown.add(this.backtofirst1screen,this);
right_button[15] = game.add.sprite(950,0,'before');
right_button[15].scale.setTo(0.12,0.12);

  var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  //screen_text[0] = game.add.text(352,17,'Cold hands, Warm hands',style);
  //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  // reg.modal = new gameModal(game);
  //pause_button = game.add.sprite(340,600,'pause');
  //pause_button.inputEnabled = true;
  //pause_button.events.onInputDown.add(this.pause_function,this);

//  play_button = game.add.sprite(240,600,'play');
// play_button.inputEnabled = true;
// play_button.events.onInputDown.add(this.help_function,this);
    //  this.createModals();
    game.input.onDown.add(this.pause_function, this);
    video[1].onComplete.add(this.video1_stop,this);


  },


  /*render : function()
         {
          game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
        },*/
          pause_function : function()
          {

          video[1].paused = (video[1].paused) ? false : true;

          },
          video1_stop : function()
          {
            console.log('hi');

            right_button[15].inputEnabled = true;
            right_button[15].events.onInputDown.add(this.next1screen,this);

          },
          backtofirst1screen : function ()
          {
            game.state.start('start_screen');
          },
          next1screen : function()
          {
             game.state.start('quiz_screen');
          },
 }

 var quiz_screen = function(game){}
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
   game.load.image('before','assets/left.png');
   game.load.image('after','assets/right.png');
  // game.load.video('demo','assets/SummerBreeze.mp4');

 },
  create : function()
  {
  //   sessionstart();

  //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
  //submit_button = game.add.button()
  this.game.stage.backgroundColor = "#ffffff";
  left_button[0] = game.add.sprite(38,12,'after');
  left_button[0].scale.setTo(0.12,0.12);
  left_button[0].inputEnabled = true;
  left_button[0].events.onInputDown.add(this.backtosecondscreen,this);
  right_button[0] = game.add.sprite(950,12,'before');
  right_button[0].scale.setTo(0.12,0.12);

  this.game.scale.pageAlignHorizontally = true;
  this.game.scale.pageAlignVertically = true;
  this.game.scale.refresh();
  var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  screen_text[1] = game.add.text(92,146,'What do you think happened between their hands?',style);
  var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

  screen_text[2] = game.add.text(95,190,'Click on the correct text answer below.',style1);
  var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

  answer_option[0] = game.add.text(100,230,'A. Heat flows from warmer to cooler hand until they both are at same temperature.',style2);
  answer_option[1] = game.add.text(100,260,'B. There is friction between their two hands',style2);



  //
  for(i=0;i<2;i++)
  {
  answer_option[i].inputEnabled = true;
  answer_option[i].events.onInputDown.add(this.feedback_function,this);
  //answer_option[i].events.onInputOver.add(over, this);
  //answer_option[i].text.events.onInputOut.add(out, this);
  console.log('hey');
  }

  },



  /*render : function()
         {
          game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
        },*/
   feedback_function : function(item)
   {
     console.log('hi');
     var fb = item.text;
     console.log(item.text);
     var style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
     var style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer



     if (fb == "A. Heat flows from warmer to cooler hand until they both are at same temperature.")
     {
       //hiding all previous feedback

       feedback[0] = game.add.text(95,502,'That is right. Heat always flows from warmer region to colder region.',style3);
       feedback_next[0]=game.add.text(95,530,'Let us understand this more. Click on the next button.',style3);
       right_button[0].inputEnabled = true;
       right_button[0].events.onInputDown.add(this.gototoconductionscreen_wrong,this);
       for (i=0; i<2; i++)
       {
         if(feedback[i])
         {
         if (feedback[i] !==0 && i!== 0)
         {
           feedback[i].destroy();
         }
       }
       if(feedback_next[i])
       {
         if (feedback_next[i] !==0 && i!== 0)
         {
           feedback_next[i].destroy();
         }
       }
       }

     }
     else if (fb == "B. There is friction between their two hands")
     {
         //game.state.start('conduction_screen');

       feedback[1] = game.add.text(95,502,'You may think that Sasha’s hands got warm because of friction.',style4);
       feedback_next[1] = game.add.text(95,532,'But only by holding hands together, Tanvi’s hands can transfer heat to Sasha’s.',style4);
       right_button[0].inputEnabled = true;
       right_button[0].events.onInputDown.add(this.gototoconductionscreen,this);
       for (i=0; i<2; i++)
       {
         if(feedback[i])
         {
         if (feedback[i] !==0 && i!== 1)
         {
           feedback[i].destroy();
         }
       }
       if(feedback_next[i])
       {
         if (feedback_next[i] !==0 && i!== 1)
         {

           feedback_next[i].destroy();
         }
       }
       }
     }


   },
   gototoconductionscreen : function()
   {
     game.state.start('conduction_screen');
   },
   gototoconductionscreen_wrong : function()
   {
     game.state.start('conduction_screen_wrong');
   },
   backtosecondscreen : function()
   {
     game.state.start('hands_screen');
   }

 }


   var conduction_screen = function(game){}
   conduction_screen.prototype =
   {
    init : function()
    {
       game.load = new CustomLoader(game);
    },
     preload : function()
    {

     game.load.video('conduction','assets/conduction.mp4');
     game.load.image('before','assets/left.png');
     game.load.image('after','assets/right.png');

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
    video_play[2] = 0;
    video[2] = game.add.video('conduction');
    this.game.stage.backgroundColor = "#ffffff";
    //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
    //submit_button = game.add.button()
    video[2].play(true);
    var sprite = video[2].addToWorld(0,60,0,0);
    video[2].loop = false;
    video[2].onComplete.add(this.video2_stop,this);
    sprite.scale.setTo(0.75,0.75);
  this.game.scale.pageAlignHorizontally = true;
  this.game.scale.pageAlignVertically = true;
  this.game.scale.refresh();
  this.game.backgroundColor = 0x4488aa;


    var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
    //screen_text[0] = game.add.text(352,17,'Conduction',style);
    //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
    // reg.modal = new gameModal(game);
      //  this.createModals();
      left_button[2] = game.add.sprite(38,10,'after');
      left_button[2].scale.setTo(0.10,0.10);
      left_button[2].inputEnabled = true;
      left_button[2].events.onInputDown.add(this.backtoquizscreen,this);
      right_button[2] = game.add.sprite(950,10,'before');
      right_button[2].scale.setTo(0.10,0.10);
      right_button[2].inputEnabled = true;
      right_button[2].events.onInputDown.add(this.buttermelt1screen,this);

    },



            pause_function : function()
            {

            video[2].paused = (video[2].paused) ? false : true;

            },
            video2_stop : function()
            {

             game.state.start('buttermelt_screen');

            },
            backtoquizscreen : function()
            {
              this.pause_function();
              game.state.start('quiz_screen');

            },
            buttermelt1screen : function()
            {
              game.state.start('buttermelt_screen');
            }



   }


   var buttermelt_screen = function(game){}
   buttermelt_screen.prototype =
   {
    init : function()
    {
       game.load = new CustomLoader(game);

    },
     preload : function()
    {

     game.load.video('buttermelt','assets/buttermelt1.mp4');
     game.load.image('before','assets/left.png');
     game.load.image('after','assets/right.png');

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
      video_play[3] = 0;
    video[3] = game.add.video('buttermelt');
    this.game.stage.backgroundColor = "#ffffff";
    //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
    //submit_button = game.add.button()

    video[3].play(true);
    var sprite = video[3].addToWorld(0,60,0,0);
    sprite.scale.setTo(0.6,0.6);
    video[3].loop = false;
    video[3].onComplete.add(this.video3_stop,this);

  this.game.scale.pageAlignHorizontally = true;
  this.game.scale.pageAlignVertically = true;
  this.game.scale.refresh();
  this.game.backgroundColor = 0x4488aa;

    var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
  //  screen_text[3] = game.add.text(352,17,'Melting butter near electric kettle',style);
    //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
    // reg.modal = new gameModal(game);
    //pause_button = game.add.sprite(340,600,'pause');
    //pause_button.inputEnabled = true;
    //pause_button.events.onInputDown.add(this.pause_function,this);

  //  play_button = game.add.sprite(240,600,'play');
  // play_button.inputEnabled = true;
  // play_button.events.onInputDown.add(this.help_function,this);
      //  this.createModals();
      game.input.onDown.add(this.pause_function2, this);
      video[3].onComplete.add(this.video3_stop,this);

      left_button[3] = game.add.sprite(38,10,'after');
      left_button[3].scale.setTo(0.08,0.08);
      left_button[3].inputEnabled = true;
      left_button[3].events.onInputDown.add(this.backtoconductionscreen,this);
      right_button[3] = game.add.sprite(900,10,'before');
      right_button[3].scale.setTo(0.08,0.08);
      right_button[3].inputEnabled = true;
      right_button[3].events.onInputDown.add(this.quiz2screen,this);


    },


    /*render : function()
           {
            game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
          },*/
            pause_function2 : function()
            {

            video[3].paused = (video[3].paused) ? false : true;

            },
            video3_stop : function()
            {


              game.state.start('quiz2_screen');

            },
            quiz2screen : function()
            {
             game.state.start('quiz2_screen');
           },
           backtoconductionscreen : function()
           {
             this.pause_function2();
             game.state.start('conduction_screen');

           }
   }
   var quiz2_screen = function(game){}
   quiz2_screen.prototype =
   {

    init : function()
    {
       game.load = new CustomLoader(game);
    },
     preload : function()
    {
    //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
     game.load.webfont('tahoma','Tahoma');
     game.load.image('before','assets/left.png');
     game.load.image('after','assets/right.png');
    // game.load.video('demo','assets/SummerBreeze.mp4');

   },
    create : function()
    {
    //   sessionstart();

    //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
    //submit_button = game.add.button()
    this.game.stage.backgroundColor = "#ffffff";
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();
    left_button[5] = game.add.sprite(38,12,'after');
    left_button[5].scale.setTo(0.12,0.12);
    left_button[5].inputEnabled = true;
    left_button[5].events.onInputDown.add(this.backtomeltingscreen,this);
    right_button[5] = game.add.sprite(950,12,'before');
    right_button[5].scale.setTo(0.12,0.12);


    var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
    screen_text[4] = game.add.text(92,146,'How did heat transfer happen in this case?',style);
    var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

    screen_text[5] = game.add.text(95,190,'Click on the correct text answer below.',style1);
    var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

    answer_option[2] = game.add.text(100,230,'A. Through warm air',style2);
    answer_option[3] = game.add.text(100,260,'B. Through vapor', style2);

    //
    for(i=2;i<4;i++)
    {
    answer_option[i].inputEnabled = true;
    answer_option[i].events.onInputDown.add(this.feedback2_function,this);
    console.log('hey');
    }

    },



    /*render : function()
           {
            game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
          },*/
     feedback2_function : function(item)
     {
       console.log('hi');
       var fb = item.text;
       console.log(item.text);
       var style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
       var style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer



       if (fb == "A. Through warm air")
       {
         //hiding all previous feedback

         feedback[2] = game.add.text(95,502,'That is not right. Think about the electric kettle and the hot water within it.',style4);
         feedback_next[2]=game.add.text(95,530,'Let us understand this more. Click on the next button.',style4);
         right_button[5].inputEnabled = true;
         right_button[5].events.onInputDown.add(this.gototoconvectionscreen,this);
         for (i=2; i<4; i++)
         {
           if(feedback[i])
           {
           if (feedback[i] !==0 && i!== 2)
           {
             feedback[i].destroy();
           }
         }
         if(feedback_next[i])
         {
           if (feedback_next[i] !==0 && i!== 2)
           {
             feedback_next[i].destroy();
           }
         }
         }

       }

       else if (fb == "B. Through vapor")
       {


         feedback[3] = game.add.text(95,502,'That is right. Vapor is nothing but hot water in gaseous state. ',style3);
         feedback_next[3] = game.add.text(95,532,'Let us understand this better in the next section.',style3);

         right_button[5].inputEnabled = true;
         right_button[5].events.onInputDown.add(this.gototoconvectionscreen,this);
         for (i=2; i<4; i++)
         {
           if(feedback[i])
           {
           if (feedback[i] !==0 && i!== 3)
           {
             feedback[i].destroy();
           }
         }
         if(feedback_next[i])
         {
           if (feedback_next[i] !==0 && i!== 3)
           {
             feedback_next[i].destroy();
           }
         }
       }
       }

     },
     gototoconvectionscreen : function()
     {
       game.state.start('convection_screen');
     },
     backtomeltingscreen : function()
     {
       game.state.start('buttermelt_screen');
     }
   }

      var hotairballoon_screen = function(game){}
      hotairballoon_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {

        game.load.video('hotair','assets/hotairballoon.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
       video_play[5] = 0;
       video[5] = game.add.video('hotair');
       this.game.stage.backgroundColor = "#ffffff";
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[5].play(true);
       var sprite = video[5].addToWorld(0,0,0,0);
       video[5].loop = false;
       video[5].onComplete.add(this.video5_stop,this);

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()



       //var sprite = video[6].addToWorld(0,60,0,0);
        sprite.scale.setTo(0.7,0.7);
          game.input.onDown.add(this.pause7, this);
       //sprite.scale.setTo(0.75,0.75);
     this.game.scale.pageAlignHorizontally = true;
     this.game.scale.pageAlignVertically = true;
     this.game.scale.refresh();
     this.game.backgroundColor = 0x4488aa;
     left_button[12] = game.add.sprite(38,12,'after');
     left_button[12].scale.setTo(0.12,0.12);
     left_button[12].inputEnabled = true;
     left_button[12].events.onInputDown.add(this.backtoquiz4screen,this);
     right_button[12] = game.add.sprite(950,12,'before');
     right_button[12].scale.setTo(0.12,0.12);



       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
      // screen_text[5] = game.add.text(352,17,'Let us learn about how a pan works',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       // render : function()
       //        {
       //         game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
       //         },
               pause7 : function()
               {

               video[5].paused = (video[5].paused) ? false : true;

               },
               video5_stop : function()
               {


                right_button[12].inputEnabled = true;
                right_button[12].events.onInputDown.add(this.quiz5screen,this);
                game.state.start('quiz5_screen');

              },
              backtoquiz4screen : function()
              {
                game.state.start(quiz4_screen);
              },
              quiz5screen : function()
              {
                game.state.start(quiz5_screen);
              }

      }
      var radiation_screen = function(game){}
      radiation_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {


        game.load.video('radiation','assets/radiation.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.stage.backgroundColor = "#ffffff";

       //   sessionstart()
       video_play[6] = 0;
       video[6] = game.add.video('radiation');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[6].play(true);
       video[6].loop = false;
       video[6].onComplete.add(this.video_stop,this);

       var sprite = video[6].addToWorld(0,60,0,0);
     sprite.scale.setTo(0.7,0.7);
          game.input.onDown.add(this.pause, this);
          left_button[9] = game.add.sprite(38,-2,'after');
          left_button[9].scale.setTo(0.12,0.12);
          left_button[9].inputEnabled = true;
          left_button[9].events.onInputDown.add(this.backtoquiz3screen,this);
          right_button[9] = game.add.sprite(950,-2,'before');
          right_button[9].scale.setTo(0.12,0.12);
          right_button[9].inputEnabled = true;
          right_button[9].events.onInputDown.add(this.quiz4screen,this);


       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
      // screen_text[0] = game.add.text(352,17,'Radiation',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
               pause : function()
               {

               video[6].paused = (video[6].paused) ? false : true;

               },
               video_stop : function()
               {

                game.state.start('radiation');

               },
               backtoquiz3screen : function()
               {
                 game.state.start('quiz3_screen');
               },
               quiz4screen : function()
               {
                 game.state.start('buttermelt2_screen');
               }


      }
      var convection_screen = function(game){}
      convection_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {


        game.load.video('convection','assets/convection.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.stage.backgroundColor = "#ffffff";

       //  this.game.backgroundColor = 0x4488aa;
       //   sessionstart()

       video_play[7] = 0;
       video[7] = game.add.video('convection');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()

       video[7].play(true);
       video[7].loop = false;
       video[7].onComplete.add(this.video_stop,this);

       var sprite = video[7].addToWorld(0,60,0,0);
     sprite.scale.setTo(0.56,0.62);
          game.input.onDown.add(this.pause, this);
          left_button[6] = game.add.sprite(38,-2,'after');
          left_button[6].scale.setTo(0.12,0.12);
          left_button[6].inputEnabled = true;
          left_button[6].events.onInputDown.add(this.backtoquiz2screen,this);
          right_button[6] = game.add.sprite(950,-2,'before');
          right_button[6].scale.setTo(0.12,0.12);
          right_button[6].inputEnabled = true;
          right_button[6].events.onInputDown.add(this.sunrise_screen,this);


       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
    //   screen_text[0] = game.add.text(352,17,'Convection',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
               pause : function()
               {

               video[7].paused = (video[7].paused) ? false : true;

               },
               video_stop : function()
               {

                game.state.start('sunrise_screen');

               },
               backtoquiz2screen : function()

{
  game.state.start('quiz2_screen');
},
sunrise_screen : function()
{
  game.state.start('sunrise_screen');
}
      }
      var sunrise_screen = function(game){}
      sunrise_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);

       },
        preload : function()
       {

        game.load.video('sunrise','assets/Sunrise.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
         video_play[12] = 0;
       video[12] = game.add.video('sunrise');
       this.game.stage.backgroundColor = "#ffffff";

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       var sprite = video[12].addToWorld(0,60,0,0);

       video[12].play(true);
       sprite.scale.setTo(0.6,0.6);
       video[12].loop = false;
       video[12].onComplete.add(this.video3_stop,this);

     this.game.scale.pageAlignHorizontally = true;
     this.game.scale.pageAlignVertically = true;
     this.game.scale.refresh();
     this.game.backgroundColor = 0x4488aa;

       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       //screen_text[3] = game.add.text(352,17,'Melting butter near electric kettle',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
       //pause_button = game.add.sprite(340,600,'pause');
       //pause_button.inputEnabled = true;
       //pause_button.events.onInputDown.add(this.pause_function,this);

     //  play_button = game.add.sprite(240,600,'play');
     // play_button.inputEnabled = true;
     // play_button.events.onInputDown.add(this.help_function,this);
         //  this.createModals();
         game.input.onDown.add(this.pause_function2, this);
         video[12].onComplete.add(this.video3_stop,this);

         left_button[7] = game.add.sprite(38,10,'after');
         left_button[7].scale.setTo(0.08,0.08);
         left_button[7].inputEnabled = true;
         left_button[7].events.onInputDown.add(this.backtoconvectionscreen,this);
         right_button[7] = game.add.sprite(900,10,'before');
         right_button[7].scale.setTo(0.08,0.08);
         right_button[7].inputEnabled = true;
         right_button[7].events.onInputDown.add(this.quiz3screen,this);


       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
               pause_function2 : function()
               {

               video[12].paused = (video[12].paused) ? false : true;

               },
               video3_stop : function()
               {


                 game.state.start('quiz2_screen');

               },
               quiz3screen : function()
               {
                game.state.start('quiz3_screen');
              },
              backtoconvectionscreen : function()
              {
                this.pause_function2();
                game.state.start('conduction_screen');

              }
      }
      var pan_screen = function(game){}
      pan_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {


        game.load.video('pan','assets/pan.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.stage.backgroundColor = "#ffffff";

       //  this.game.backgroundColor = 0x4488aa;
       //   sessionstart()
       video_play[8] = 0;
       video[8] = game.add.video('pan');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[8].play(true);
       video[8].loop = false;
       video[8].onComplete.add(this.video_stop,this);

       var sprite = video[8].addToWorld(0,60,0,0);
     sprite.scale.setTo(0.55,0.55);
          game.input.onDown.add(this.pause, this);
          left_button[16] = game.add.sprite(38,0,'after');
          left_button[16].scale.setTo(0.1,0.1);
          left_button[16].inputEnabled = true;
          left_button[16].events.onInputDown.add(this.quiz5screen,this);
          right_button[16] = game.add.sprite(950,0,'before');
          right_button[16].scale.setTo(0.1,0.1);
          right_button[16].inputEnabled = true;
          right_button[16].events.onInputDown.add(this.quiz6screen,this);


       var style = { font: "17px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
      var newtext=  game.add.text(352,900,'To play and pause, tap on the screen',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
               pause : function()
               {

               video[8].paused = (video[8].paused) ? false : true;

               },
               video_stop : function()
               {

                game.state.start('hands_screen');

               },

               quiz5screen: function()
               {

                game.state.start('quiz5_screen');

               },
               quiz6screen : function()
               {

                game.state.start('quiz6_screen');

               },
      }
      var buttermelt2_screen = function(game){}
      buttermelt2_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {


        game.load.video('buttermelt2','assets/buttermelt2.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.stage.backgroundColor = "#ffffff";

       //  this.game.backgroundColor = 0x4488aa;
       //   sessionstart()
       video_play[9] = 0;
       video[9] = game.add.video('buttermelt2');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[9].play(true);
       video[9].loop = false;
       video[9].onComplete.add(this.video_stop,this);

       var sprite = video[9].addToWorld(0,60,0,0);
     sprite.scale.setTo(0.7,0.7);
          game.input.onDown.add(this.pause, this);
          left_button[10] = game.add.sprite(38,0,'after');
          left_button[10].scale.setTo(0.1,0.1);
          left_button[10].inputEnabled = true;
          left_button[10].events.onInputDown.add(this.buttermelt2,this);
          right_button[10] = game.add.sprite(950,0,'before');
          right_button[10].scale.setTo(0.1,0.1);
          right_button[10].inputEnabled = true;
          right_button[10].events.onInputDown.add(this.quiz4screen,this);


       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
      // screen_text[9] = game.add.text(352,17,'Let us learn about how a pan works',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
               pause : function()
               {

               video[9].paused = (video[9].paused) ? false : true;

               },
               video_stop : function()
               {

                game.state.start('quiz4_screen');

               },
               buttermelt2 : function()
               {
                 game.state.start('buttermelt2_screen');
               },
               quiz4screen : function()
               {
                 game.state.start('quiz4_screen');
               },


      }
      var bulb_screen = function(game){}
      bulb_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {


        game.load.video('bulb','assets/bulb.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.stage.backgroundColor = "#ffffff";

       //  this.game.backgroundColor = 0x4488aa;
       //   sessionstart()
       video_play[10] = 0;
       video[10] = game.add.video('intro');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[10].play(true);
       video[10].loop = false;
       video[10].onComplete.add(this.video_stop,this);

       var sprite = video[10].addToWorld(0,60,0,0);
     //  sprite.scale.setTo(0.75,0.75);
          game.input.onDown.add(this.pause, this);


       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
      // screen_text[0] = game.add.text(352,17,'Let us learn about how a pan works',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
               pause : function()
               {

               video[10].paused = (video[10].paused) ? false : true;

               },
               video_stop : function()
               {

              //  game.state.start('hands_screen');

               },

      }

      var lecture_screen = function(game){}
      lecture_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
        game.load.video('lecture','assets/lecture.mp4');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');

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
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.stage.backgroundColor = "#ffffff";

       //  this.game.backgroundColor = 0x4488aa;
       //   sessionstart()
       video_play[11] = 0;
       video[11] = game.add.video('intro');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[11].play(true);
       video[11].loop = false;
       video[11].onComplete.add(this.video_stop,this);

       var sprite = video[11].addToWorld(0,60,0,0);
      //  sprite.scale.setTo(0.75,0.75);
          game.input.onDown.add(this.pause, this);


       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
      // screen_text[11] = game.add.text(352,17,'Let us learn about how a pan works',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
               pause : function()
               {

               video[11].paused = (video[11].paused) ? false : true;

               },
               video_stop : function()
               {

              //  game.state.start('hands_screen');

               },

      }
      var quiz3_screen = function(game){}
      quiz3_screen.prototype =
      {

       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
       //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
        game.load.webfont('tahoma','Tahoma');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');
       // game.load.video('demo','assets/SummerBreeze.mp4');

      },
       create : function()
       {
       //   sessionstart();

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       this.game.stage.backgroundColor = "#ffffff";
       this.game.scale.pageAlignHorizontally = true;
       this.game.scale.pageAlignVertically = true;
       this.game.scale.refresh();
       left_button[8] = game.add.sprite(38,12,'after');
       left_button[8].scale.setTo(0.12,0.12);
       left_button[8].inputEnabled = true;
       left_button[8].events.onInputDown.add(this.sunrisescreen,this);
       right_button[8] = game.add.sprite(950,12,'before');
       right_button[8].scale.setTo(0.12,0.12);


       var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       screen_text[6] = game.add.text(92,146,'How did heat transfer happen from Sun to Earth?',style);
       var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

       screen_text[7] = game.add.text(95,190,'Click on the correct text answer below.',style1);
       var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

       answer_option[4] = game.add.text(100,230,'A. The sun can only transfer heat to Earth by air.',style2);
       answer_option[5] = game.add.text(100,260,'B. There is vaccum between Sun and Earth and the sun can still transfer heat.', style2);
       var hint_text = game.add.text(100, 400, 'Hint : Vaccum is the space between the Sun and the Earth',style)
       //
       for(i=4;i<6;i++)
       {
       answer_option[i].inputEnabled = true;
       answer_option[i].events.onInputDown.add(this.feedback3_function,this);
       console.log('hey');
       }

       },



       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
        feedback3_function : function(item)
        {
          console.log('hi');
          var fb = item.text;
          console.log(item.text);
          var style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
          var style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer



          if (fb == "A. The sun can only transfer heat to Earth by air.")
          {
            //hiding all previous feedback

            feedback[4] = game.add.text(95,502,'That is not right. There is some vaccum in between Sun and Earth.',style4);
            feedback_next[4]=game.add.text(95,530,'Let us understand this more. Click on the next button.',style4);
            right_button[8].inputEnabled = true;
            right_button[8].events.onInputDown.add(this.radiationscreen,this);
            for (i=4; i<6; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 4)
              {
                feedback[i].destroy();
              }
            }
            if(feedback_next[i])
            {
              if (feedback_next[i] !==0 && i!== 4)
              {
                feedback_next[i].destroy();
              }
            }
            }

          }

          else if (fb == "B. There is vaccum between Sun and Earth and the sun can still transfer heat.")
          {
            feedback[5] = game.add.text(95,502,'That is right. Heat is travels to Earth in the form of electromagnetic waves (radiation). ',style3);
            feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style3);

            right_button[8].inputEnabled = true;
            right_button[8].events.onInputDown.add(this.radiationscreen,this);
            for (i=4; i<6; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 5)
              {
                feedback[i].destroy();
              }
            }
            if(feedback_next[i])
            {
              if (feedback_next[i] !==0 && i!== 5)
              {
                feedback_next[i].destroy();
              }
            }
          }
          }

        },
        sunrisescreen : function()
        {
          game.state.start('sunrise_screen');
        },
        radiationscreen : function()
        {
          game.state.start('radiation_screen');
        }
      }


      var quiz5_screen = function(game){}
      quiz5_screen.prototype =
      {

       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
       //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
        game.load.webfont('tahoma','Tahoma');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');
       // game.load.video('demo','assets/SummerBreeze.mp4');

      },
       create : function()
       {
       //   sessionstart();

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       this.game.stage.backgroundColor = "#ffffff";
       this.game.scale.pageAlignHorizontally = true;
       this.game.scale.pageAlignVertically = true;
       this.game.scale.refresh();
       left_button[13] = game.add.sprite(38,12,'after');
       left_button[13].scale.setTo(0.12,0.12);
       left_button[13].inputEnabled = true;
       left_button[13].events.onInputDown.add(this.hotairballoon,this);
       right_button[13] = game.add.sprite(950,12,'before');
       right_button[13].scale.setTo(0.12,0.12);


       var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       screen_text[10] = game.add.text(92,146,'What kind of heat transfer is seen here?',style);
       var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

       screen_text[11] = game.add.text(95,190,'Click on the correct text answer below.',style1);
       var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

       answer_option[10] = game.add.text(100,230,'A. Conduction',style2);
       answer_option[11] = game.add.text(100,260,'B. Convection', style2);
       answer_option[12] = game.add.text(100,290,'C. Radiation', style2);
       answer_option[13] = game.add.text(100,320,'D. All of the above',style2);

       //
       for(i=10;i<14;i++)
       {
       answer_option[i].inputEnabled = true;
       answer_option[i].events.onInputDown.add(this.feedback5_function,this);

       console.log('hey');
       }

       },



       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
        feedback5_function : function(item)
        {
          console.log('hi');
          var fb = item.text;
          console.log(item.text);
          var style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
          var style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer



          if (fb == "A. Conduction")
          {
            //hiding all previous feedback

            feedback[10] = game.add.text(95,502,'Are you sure? The balloon rises up because of the hot air from fire.',style4);
            //feedback_next[6]=game.add.text(95,530,'Let us understand this more. Click on the next button.',style4);
            right_button[13].inputEnabled = true;
            right_button[13].events.onInputDown.add(this.pan,this);
            for (i=10; i<14; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 10)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 4)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
            }

          }

          else if (fb == "B. Convection")
          {
            feedback[11] = game.add.text(95,502,'Yes, that is right. Due to the upward movement of air, the balloon rises up which is convection.',style3);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[13].inputEnabled = true;
            right_button[13].events.onInputDown.add(this.pan,this);
            for (i=10; i<14; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 11)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }
          else if (fb == "C. Radiation")
          {
            feedback[12] = game.add.text(95,502,'Are you sure? Is the heat flowing without contact or any medium? ',style4);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[13].inputEnabled = true;
            right_button[13].events.onInputDown.add(this.pan,this);
            for (i=10; i<14; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!==12 )
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }
          else if (fb == "D. All of the above")
          {
            feedback[13] = game.add.text(95,502,'That is not right. For heat transfer in this case, the two objects are in contact.',style4);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[13].inputEnabled = true;
            right_button[13].events.onInputDown.add(this.pan,this);
            for (i=10; i<14; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 13)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }

        },
        pan : function()
        {
          game.state.start('pan_screen');
        },
        hotairballoon : function()
        {
          game.state.start('hotairballoon_screen');
        }
      }
      var end_screen = function(game){}
      end_screen.prototype =
      {

       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
       //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
        game.load.webfont('tahoma','Tahoma');
        game.load.image('after','assets/right.png');


       game.load.video('lecture','assets/lecture.mp4');

      },
       create : function()
       {
       //   sessionstart();
       video_play[13] = 0;
       video[13] = game.add.video('lecture');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[13].play(true);
       video[13].loop = false;
       video[13].onComplete.add(this.video13_stop,this);

       var sprite = video[13].addToWorld(0,60,0,0);
      sprite.scale.setTo(0.6,0.6);
          game.input.onDown.add(this.pause13, this);

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       this.game.stage.backgroundColor = "#ffffff";
       this.game.scale.pageAlignHorizontally = true;
       this.game.scale.pageAlignVertically = true;
       this.game.scale.refresh();
       left_button[14] = game.add.sprite(38,12,'after');
       left_button[14].scale.setTo(0.12,0.12);
       left_button[14].inputEnabled = true;
       left_button[14].events.onInputDown.add(this.pan1,this);
       var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       //screen_text[10] = game.add.text(92,146,'What kind of heat transfer is seen here?',style);

       },
        pan1 : function()
        {
          game.state.start('quiz6_screen');
        },
        pause13 : function()
        {

        video[13].paused = (video[13].paused) ? false : true;

        },
        video13_stop : function()
        {

            video[13].onComplete.add(this.video_stop,this);
         //game.state.start('');

        },
      }
      var conduction_screen_wrong =  function(game){}
      conduction_screen_wrong.prototype =
          {
           init : function()
           {
              game.load = new CustomLoader(game);
           },
            preload : function()
           {

            game.load.video('conduction11','assets/handwronganswer.mp4');
            game.load.image('before','assets/left.png');
            game.load.image('after','assets/right.png');

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
           video_play[14] = 0;
           video[14] = game.add.video('conduction11');
           this.game.stage.backgroundColor = "#ffffff";
           //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
           //submit_button = game.add.button()
           video[14].play(true);
           var sprite = video[14].addToWorld(0,60,0,0);
           video[14].loop = false;
           video[14].onComplete.add(this.video3_stop,this);
           sprite.scale.setTo(0.75,0.75);
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.backgroundColor = 0x4488aa;


           var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
           //screen_text[0] = game.add.text(352,17,'Conduction',style);
           //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
           // reg.modal = new gameModal(game);
             //  this.createModals();
             left_button[2] = game.add.sprite(38,10,'after');
             left_button[2].scale.setTo(0.10,0.10);
             left_button[2].inputEnabled = true;
             left_button[2].events.onInputDown.add(this.backtoquizscreen,this);
             right_button[2] = game.add.sprite(950,10,'before');
             right_button[2].scale.setTo(0.10,0.10);
             right_button[2].inputEnabled = true;
             right_button[2].events.onInputDown.add(this.buttermelt1screen,this);

           },



                   pause_function : function()
                   {

                   video[2].paused = (video[2].paused) ? false : true;

                   },
                   video2_stop : function()
                   {

                    game.state.start('buttermelt_screen');

                   },
                   backtoquizscreen : function()
                   {
                     this.pause_function();
                     game.state.start('quiz_screen');

                   },
                   buttermelt1screen : function()
                   {
                     game.state.start('buttermelt_screen');
                   }



          }


      var quiz4_screen = function(game){}
      quiz4_screen.prototype =
      {

       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
       //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
        game.load.webfont('tahoma','Tahoma');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');
       // game.load.video('demo','assets/SummerBreeze.mp4');

      },
       create : function()
       {
       //   sessionstart();

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       this.game.stage.backgroundColor = "#ffffff";
       this.game.scale.pageAlignHorizontally = true;
       this.game.scale.pageAlignVertically = true;
       this.game.scale.refresh();
       left_button[11] = game.add.sprite(38,12,'after');
       left_button[11].scale.setTo(0.12,0.12);
       left_button[11].inputEnabled = true;
       left_button[11].events.onInputDown.add(this.buttermelt2,this);
       right_button[11] = game.add.sprite(950,12,'before');
       right_button[11].scale.setTo(0.12,0.12);


       var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       screen_text[8] = game.add.text(92,146,'What kind of heat transfer is seen here?',style);
       var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

       screen_text[9] = game.add.text(95,190,'Click on the correct text answer below.',style1);
       var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

       answer_option[6] = game.add.text(100,230,'A. Conduction and Convection',style2);
       answer_option[7] = game.add.text(100,260,'B. Convection', style2);
       answer_option[8] = game.add.text(100,290,'C. Radiation', style2);
       answer_option[9] = game.add.text(100,320,'D. All of the above',style2);

       //
       for(i=6;i<10;i++)
       {
       answer_option[i].inputEnabled = true;
       answer_option[i].events.onInputDown.add(this.feedback4_function,this);

       console.log('hey');
       }

       },



       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
        feedback4_function : function(item)
        {
          console.log('hi');
          var fb = item.text;
          console.log(item.text);
          var style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
          var style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer



          if (fb == "A. Conduction and Convection")
          {
            //hiding all previous feedback

            feedback[6] = game.add.text(95,502,'It is Conduction and Convection, since the lid hot water in the cup, it transfers heat to the lid.',style3);
            //feedback_next[6]=game.add.text(95,530,'Let us understand this more. Click on the next button.',style4);
            right_button[11].inputEnabled = true;
            right_button[11].events.onInputDown.add(this.hotairballoon,this);
            for (i=6; i<10; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 6)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 4)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
            }

          }

          else if (fb == "B. Convection")
          {
            feedback[7] = game.add.text(95,502,'Are you sure? Is vapor in touch with the butter? Or is there heat transfer through another medium?',style4);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[11].inputEnabled = true;
            right_button[11].events.onInputDown.add(this.hotairballoon,this);
            for (i=6; i<10; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 7)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }
          else if (fb == "C. Radiation")
          {
            feedback[8] = game.add.text(95,502,'Are you sure? Is the heat flowing without contact or any medium? ',style4);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[11].inputEnabled = true;
            right_button[11].events.onInputDown.add(this.hotairballoon,this);
            for (i=6; i<10; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 8)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }
          else if (fb == "D. All of the above")
          {
            feedback[9] = game.add.text(95,502,'That is not right. For heat transfer in this case, the two objects are in contact.',style4);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[11].inputEnabled = true;
            right_button[11].events.onInputDown.add(this.hotairballoon,this);
            for (i=6; i<10; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 9)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }

        },
        buttermelt2 : function()
        {
          game.state.start('buttermelt2_screen');
        },
        hotairballoon : function()
        {
          game.state.start('hotairballoon_screen');
        }
      }
      var quiz6_screen = function(game){}
      quiz6_screen.prototype =
      {

       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {
       //game.plugins.add(new Phaser.Plugin.PhaserWebComponents(game));
        game.load.webfont('tahoma','Tahoma');
        game.load.image('before','assets/left.png');
        game.load.image('after','assets/right.png');
       // game.load.video('demo','assets/SummerBreeze.mp4');

      },
       create : function()
       {
       //   sessionstart();

       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       this.game.stage.backgroundColor = "#ffffff";
       this.game.scale.pageAlignHorizontally = true;
       this.game.scale.pageAlignVertically = true;
       this.game.scale.refresh();
       left_button[16] = game.add.sprite(38,12,'after');
       left_button[16].scale.setTo(0.12,0.12);
       left_button[16].inputEnabled = true;
       left_button[16].events.onInputDown.add(this.pan,this);
       right_button[16] = game.add.sprite(950,12,'before');
       right_button[16].scale.setTo(0.12,0.12);


       var style = { font: "23px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       screen_text[8] = game.add.text(92,146,'What kind of heat transfer is seen here in a pan of boiling water?',style);
       var style1 = { font: "20px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };

       screen_text[9] = game.add.text(95,190,'Click on the correct text answer below.',style1);
       var style2 = { font: "23px tahoma", fill: "#737373", boundsAlignH: "center", boundsAlignV: "middle" };

       answer_option[14] = game.add.text(100,230,'A. Conduction',style2);
       answer_option[15] = game.add.text(100,260,'B. Convection', style2);
       answer_option[16] = game.add.text(100,290,'C. Radiation', style2);
       answer_option[17] = game.add.text(100,320,'D. All of the above',style2);

       //
       for(i=14;i<18;i++)
       {
       answer_option[i].inputEnabled = true;
       answer_option[i].events.onInputDown.add(this.feedback6_function,this);

       console.log('hey');
       }

       },



       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
        feedback6_function : function(item)
        {
          console.log('hi');
          var fb = item.text;
          console.log(item.text);
          var style3 = { font: "23px tahoma", fill: "#39ff14", boundsAlignH: "center", boundsAlignV: "middle" }; //correctanswer
          var style4 = { font: "23px tahoma", fill: "#FF0000", boundsAlignH: "center", boundsAlignV: "middle" };//wrong answer



          if (fb == "A. Conduction")
          {
            //hiding all previous feedback

            feedback[14] = game.add.text(95,502,'Are you sure? You might be overlooking some things here.',style4);
            //feedback_next[6]=game.add.text(95,530,'Let us understand this more. Click on the next button.',style4);
            right_button[16].inputEnabled = true;
            right_button[16].events.onInputDown.add(this.pan1,this);
            for (i=14; i<18; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 14)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 4)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
            }

          }

          else if (fb == "B. Convection")
          {
            feedback[15] = game.add.text(95,502,'Are you sure? The base of the pan is touching the flame.',style4);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[16].inputEnabled = true;
            right_button[16].events.onInputDown.add(this.pan1,this);
            for (i=14; i<18; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 15)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }
          else if (fb == "C. Radiation")
          {
            feedback[16] = game.add.text(95,502,'Are you sure? You might have overlooked some things.',style4);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

            right_button[16].inputEnabled = true;
            right_button[16].events.onInputDown.add(this.pan1,this);
            for (i=14; i<18; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 16)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }
          else if (fb == "D. All of the above")
          {
            feedback[17] = game.add.text(95,502,'That is right. Click next to see the lecture. ',style3);
            //feedback_next[5] = game.add.text(95,532,'Let us understand this better in the next section.',style4);

           right_button[16].inputEnabled = true;
            right_button[16].events.onInputDown.add(this.pan1,this);
            for (i=14; i<18; i++)
            {
              if(feedback[i])
              {
              if (feedback[i] !==0 && i!== 17)
              {
                feedback[i].destroy();
              }
            }
            // if(feedback_next[i])
            // {
            //   if (feedback_next[i] !==0 && i!== 5)
            //   {
            //     feedback_next[i].destroy();
            //   }
            // }
          }
          }

        },
        pan : function()
        {
           game.state.start('pan_screen');
         },
        pan1 : function()
        {
          game.state.start('end_screen');
        }
      }
    /*  var start_screen = function(game){}
      start_screen.prototype =
      {
       init : function()
       {
          game.load = new CustomLoader(game);
       },
        preload : function()
       {


        game.load.video('intro','assets/introduction.mp4');

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
         this.game.scale.pageAlignHorizontally = true;
         this.game.scale.pageAlignVertically = true;
         this.game.scale.refresh();
         this.game.stage.backgroundColor = "#ffffff";

       //  this.game.backgroundColor = 0x4488aa;
       //   sessionstart()
       video_play[0] = 0;
       video[0] = game.add.video('intro');
       //background[0] = game.add.sprite(0,0,'demo','INTROSCREEN_BG');
       //submit_button = game.add.button()
       video[0].play(true);
       video[0].loop = false;
       video[0].onComplete.add(this.video_stop,this);

       var sprite = video[0].addToWorld(0,60,0,0);
     //  sprite.scale.setTo(0.75,0.75);
          game.input.onDown.add(this.pause, this);


       var style = { font: "23px arial", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
      // screen_text[0] = game.add.text(352,17,'Let us learn about how a pan with water works',style);
       //var style1 = { font: "16px tahoma", fill: "#000000", boundsAlignH: "center", boundsAlignV: "middle" };
       // reg.modal = new gameModal(game);
         //  this.createModals();
       },


       /*render : function()
              {
               game.debug.text('x: ' + game.input.x + ' y: ' + game.input.y, 32, 32);
             },*/
            /*   pause : function()
               {

               video[0].paused = (video[0].paused) ? false : true;

               },
               video_stop : function()
               {

                game.state.start('hands_screen');

               },

      }*/

game.state.add('start_screen',start_screen);
game.state.add('hands_screen',hands_screen);
game.state.add('quiz_screen',quiz_screen);
game.state.add('quiz2_screen',quiz2_screen);
game.state.add('quiz3_screen',quiz3_screen);
game.state.add('quiz4_screen',quiz4_screen);
game.state.add('end_screen',end_screen);
game.state.add('conduction_screen_wrong','conduction_screen_wrong');
game.state.add('quiz5_screen',quiz5_screen);
game.state.add('quiz6_screen',quiz6_screen);
//game.state.add('quiz7_screen',quiz7_screen);
game.state.add('sunrise_screen',sunrise_screen);
game.state.add('hotairballoon_screen',hotairballoon_screen);
game.state.add('conduction_screen',conduction_screen);
game.state.add('convection_screen',convection_screen);
game.state.add('radiation_screen',radiation_screen);
game.state.add('lecture_screen',lecture_screen);
game.state.add('buttermelt2_screen',buttermelt2_screen);
game.state.add('buttermelt_screen',buttermelt_screen);
game.state.add('pan_screen',pan_screen);

game.state.start('start_screen');

}
