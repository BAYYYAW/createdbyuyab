var time = 60;

window.setInterval(test, 100);

function test()
{
    //update time
    time -=1;
    //update the div to show the time

    //hide the div if the time is 0
    if(time == 0)
    {
      $("#test1").animate({

      top: '-900px',

    });
    }
}
