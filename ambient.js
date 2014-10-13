var tessel = require('tessel');
var ambientlib = require('ambient-attx4');
var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {
  // Set a sound level trigger
  ambient.setSoundTrigger(0.1);

  ambient.on('sound-trigger', function(data) {
    console.log("Something happened with sound: ", data);
    // Clear it
    ambient.clearSoundTrigger();
    // After 1.5 seconds reset sound trigger
    setTimeout(function () {
      ambient.setSoundTrigger(0.1);
    }, 1500);
  });
});

ambient.on('error', function (err) {
  console.log(err)
});
