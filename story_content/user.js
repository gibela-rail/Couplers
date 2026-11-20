function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mmuNEyuZDm":
        Script1();
        break;
      case "5s9UV03BcpM":
        Script2();
        break;
      case "6BWXPYgjwRY":
        Script3();
        break;
      case "5V7odtTYS2Q":
        Script4();
        break;
      case "6HXa164xVyJ":
        Script5();
        break;
      case "6G0pX76Fb2A":
        Script6();
        break;
      case "5q4bhwGigJW":
        Script7();
        break;
      case "6NNt6RyPZL8":
        Script8();
        break;
      case "5xUibvYTjnj":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script2()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script3()
{
  window.print();
}

function Script4()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script5()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script6()
{
  window.print();
}

function Script7()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script8()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script9()
{
  window.print();
}

