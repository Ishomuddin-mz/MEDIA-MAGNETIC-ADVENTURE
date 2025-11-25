function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NkuI62q3q9":
        Script1();
        break;
      case "5wxWleoeBcM":
        Script2();
        break;
      case "6SwGszbdLYX":
        Script3();
        break;
      case "6S74PGnqt4X":
        Script4();
        break;
      case "5sbS3MIFsnD":
        Script5();
        break;
      case "6EAOrtXJKJy":
        Script6();
        break;
      case "5gxCPExX1DX":
        Script7();
        break;
      case "6LUpAn5ipNk":
        Script8();
        break;
      case "6hmY1mu1nME":
        Script9();
        break;
      case "5ilksRb7g2K":
        Script10();
        break;
      case "6FOIvdIY1Pr":
        Script11();
        break;
      case "627KetZj1YK":
        Script12();
        break;
      case "6ClaFGTkXpf":
        Script13();
        break;
      case "6B0bvTdTeuP":
        Script14();
        break;
      case "5nthJXTeeZJ":
        Script15();
        break;
      case "6Lh0sj5l3LD":
        Script16();
        break;
      case "6V859uJaPQ4":
        Script17();
        break;
      case "5tT4dSxX8Ls":
        Script18();
        break;
      case "5aW4ir6qeId":
        Script19();
        break;
      case "5g8f6NRjiKn":
        Script20();
        break;
      case "5nmuzKsW1W6":
        Script21();
        break;
      case "6k2SPm0yUzJ":
        Script22();
        break;
      case "675jNnWIXBr":
        Script23();
        break;
      case "5y5m3WHZdOy":
        Script24();
        break;
      case "6jdvD4LOAeZ":
        Script25();
        break;
      case "6WAIWSlh5jk":
        Script26();
        break;
      case "5mkXWdTIjLg":
        Script27();
        break;
      case "5m0puVbJrr2":
        Script28();
        break;
      case "6qSSf9jG2oE":
        Script29();
        break;
      case "6WFI0nmsbC6":
        Script30();
        break;
      case "5aJeG7xBYgm":
        Script31();
        break;
      case "6kYcsYvGrEx":
        Script32();
        break;
      case "6Rs4afuECTm":
        Script33();
        break;
      case "6TazKtMfs8S":
        Script34();
        break;
      case "5qBrtwcb9ay":
        Script35();
        break;
      case "5ieJR0DBO9m":
        Script36();
        break;
      case "5reHGgoCO2L":
        Script37();
        break;
      case "5usrQFmCa84":
        Script38();
        break;
      case "6dXF8pKJBGt":
        Script39();
        break;
      case "603H4Qx0zZf":
        Script40();
        break;
      case "6P9U89VWWJW":
        Script41();
        break;
      case "6fcwVaRCMDl":
        Script42();
        break;
      case "5v8lNxy4h2R":
        Script43();
        break;
      case "69mWzIsYF7V":
        Script44();
        break;
      case "6AeDHH0jVCp":
        Script45();
        break;
      case "5oqiFT7fhwv":
        Script46();
        break;
      case "5aY0Q3M0De8":
        Script47();
        break;
      case "5ylumIwd98E":
        Script48();
        break;
      case "61RRnxbhXjx":
        Script49();
        break;
      case "6Yzwy9biOwl":
        Script50();
        break;
      case "5hWAXdWZITD":
        Script51();
        break;
      case "5dMkp61EAhI":
        Script52();
        break;
      case "6NEhEZM2UdE":
        Script53();
        break;
      case "6gsZR4rxbq4":
        Script54();
        break;
      case "5hlB0ZDMgqO":
        Script55();
        break;
      case "6KYlH4XSIfM":
        Script56();
        break;
      case "6mGlQl9GT7O":
        Script57();
        break;
      case "5ZrnBzBtszz":
        Script58();
        break;
      case "65mz7lo5GBO":
        Script59();
        break;
      case "6gj68NWHVcX":
        Script60();
        break;
      case "5zxfN925mDK":
        Script61();
        break;
      case "6exhsHp0yzn":
        Script62();
        break;
      case "6h8zK1NMA4o":
        Script63();
        break;
      case "5vRpjdYFUhA":
        Script64();
        break;
      case "6d6pyQZHphs":
        Script65();
        break;
      case "65gOM54hP99":
        Script66();
        break;
      case "5qE45n8TnVC":
        Script67();
        break;
      case "6CKUWqPH7DI":
        Script68();
        break;
      case "5b91nsEiXbQ":
        Script69();
        break;
      case "6EusEAL3kDj":
        Script70();
        break;
      case "5WuLbS7z34Y":
        Script71();
        break;
      case "5cctBxGhRZD":
        Script72();
        break;
      case "6k85JGMBBBf":
        Script73();
        break;
      case "5aZc9Mrw8tA":
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

