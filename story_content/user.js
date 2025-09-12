function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ttHQA8rO2Y":
        Script1();
        break;
      case "6nB5glB6yI7":
        Script2();
        break;
      case "6qFik72Cw1i":
        Script3();
        break;
      case "5xTwqgXDR9q":
        Script4();
        break;
      case "6UeVvKaI4JY":
        Script5();
        break;
      case "6U0c7oxqeKD":
        Script6();
        break;
      case "5xdthFhBaRZ":
        Script7();
        break;
      case "5Yk5SrpMXEd":
        Script8();
        break;
      case "6kEHxRYaxhY":
        Script9();
        break;
      case "6a5oGHTgebZ":
        Script10();
        break;
      case "60khiln9kQl":
        Script11();
        break;
      case "6Oz3hyOBvFe":
        Script12();
        break;
      case "64FE41H9GRA":
        Script13();
        break;
      case "6jRwuvlpkHo":
        Script14();
        break;
      case "6QOdYcUG292":
        Script15();
        break;
      case "6MvqCrFZOih":
        Script16();
        break;
      case "5VuwZ1ckpzN":
        Script17();
        break;
      case "6fK0IwFZLkA":
        Script18();
        break;
      case "6HLY9Qe5er6":
        Script19();
        break;
      case "6MYbwlFJyrt":
        Script20();
        break;
      case "5jtMuIPf2ww":
        Script21();
        break;
      case "6NEEkEvKDHX":
        Script22();
        break;
      case "6SHUrUW8Ezx":
        Script23();
        break;
      case "5bFOiVC900B":
        Script24();
        break;
      case "5jpIng4fK8B":
        Script25();
        break;
      case "6rLbmEPs2Sp":
        Script26();
        break;
      case "5UsLJJqoFoH":
        Script27();
        break;
      case "5pBNvVjTBLL":
        Script28();
        break;
      case "6WAXHKStv4l":
        Script29();
        break;
      case "5cfY4AqkANP":
        Script30();
        break;
      case "6P7wERRNPuS":
        Script31();
        break;
      case "6hMc5H5KpFu":
        Script32();
        break;
      case "660jI1tkQrR":
        Script33();
        break;
      case "6elNATSe6Yk":
        Script34();
        break;
      case "5s8298i40JN":
        Script35();
        break;
      case "5ecjif83iUZ":
        Script36();
        break;
      case "6ffjVgnjv1v":
        Script37();
        break;
      case "6WCHJGttg1h":
        Script38();
        break;
      case "6U56MqzuTB9":
        Script39();
        break;
      case "5bZkFD9raRP":
        Script40();
        break;
      case "6b2Dwvb7Mrv":
        Script41();
        break;
      case "68wt5b5zuOe":
        Script42();
        break;
      case "6iaUoUWZMca":
        Script43();
        break;
      case "6CeGDtodpML":
        Script44();
        break;
      case "5xMS7KgXy9b":
        Script45();
        break;
      case "6RO4XJtrYKY":
        Script46();
        break;
      case "62zIbaU3cxT":
        Script47();
        break;
      case "5rDZ3f15khO":
        Script48();
        break;
      case "5fvU1tQIngc":
        Script49();
        break;
      case "5ihG5IrZDBh":
        Script50();
        break;
      case "6PdpNe4r5qZ":
        Script51();
        break;
      case "5grehtmqrDo":
        Script52();
        break;
      case "6BmxNpsYnDs":
        Script53();
        break;
      case "6gDkluBJwxh":
        Script54();
        break;
      case "6QulcFgullF":
        Script55();
        break;
      case "6nRV55li4Yn":
        Script56();
        break;
      case "69MNApSS1GA":
        Script57();
        break;
      case "5zQOZY0cJc7":
        Script58();
        break;
      case "5ZjDnovQhE4":
        Script59();
        break;
      case "6KljW8OFSHv":
        Script60();
        break;
      case "6qBtqJXYv3E":
        Script61();
        break;
      case "6VSPRYj0rLZ":
        Script62();
        break;
      case "6mnKsE22Rxh":
        Script63();
        break;
      case "5wvofswh0Ja":
        Script64();
        break;
      case "61nd80b3lbP":
        Script65();
        break;
      case "5xAGqU99MFQ":
        Script66();
        break;
      case "5f19KUY9qXx":
        Script67();
        break;
      case "6Urhx1wDZQv":
        Script68();
        break;
      case "6bpJVmQCIAj":
        Script69();
        break;
      case "6WjH7gbLX9S":
        Script70();
        break;
      case "6VWOo9SEFBj":
        Script71();
        break;
      case "5xyBTfH3Vwe":
        Script72();
        break;
      case "5ceFMgqeN4Z":
        Script73();
        break;
      case "5t9YIeLvkOf":
        Script74();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong'); audio.src="musik.mp3"; 
audio.load(); 
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.pause();
audio.currentTime = 0; // kembali ke awal lagu
function fadeOutAudio() {
  var fadeAudio = setInterval(function () {
    if (audio.volume > 0.05) {
      audio.volume -= 0.05; // kurangi volume perlahan
    } else {
      clearInterval(fadeAudio);
      audio.pause();        // hentikan musik
      audio.currentTime = 0; // reset ke awal
      audio.volume = 1.0;   // kembalikan normal utk play berikutnya
    }
  }, 200); // setiap 200ms volume turun
}

}

function Script3()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script4()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script5()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script6()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script7()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script8()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script9()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script10()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script11()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script12()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script13()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script14()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script15()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script16()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script17()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script18()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script19()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script20()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script21()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script22()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script23()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script24()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script25()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script26()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script27()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script28()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script29()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script30()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script31()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script32()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script33()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script34()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script35()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script36()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script37()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script38()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script39()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script40()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script41()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script42()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script43()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script44()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script45()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script46()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script47()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script48()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script49()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script50()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script51()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script52()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script53()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script54()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script55()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script56()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script57()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script58()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script59()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script60()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script61()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script62()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script63()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script64()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script65()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script66()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script67()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script68()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script69()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script70()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script71()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script72()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script73()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script74()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

