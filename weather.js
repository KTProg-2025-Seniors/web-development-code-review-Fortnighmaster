/*google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [50,7],[60,8],[70,8],[80,9],[90,9],
      [100,9],[110,10],[120,11],
      [130,14],[140,14],[150,15]
    ]);
    
    // Set Options
    const options = {
      title: 'House Prices vs. Size',
      hAxis: {title: 'Square Meters'},
      vAxis: {title: 'Price in Millions'},
      legend: 'none'
    };
    
    // Draw
    const chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    
    }*/
    function TimeyZ() {
      var offset = new Date().getTimezoneOffset();
      console.log(offset);
      document.getElementById('myChart').innerHTML == offset;
   }
   window.onload = function (chartContainer) {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: "Simple Line Chart"
      },
      data: [{        
        type: "line",
            indexLabelFontSize: 16,
        dataPoints: [
          { y: 450 },
          { y: 414},
          { y: 520, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          { y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }]
    });
    chart.render();
    
    }