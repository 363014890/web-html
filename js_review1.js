var col2 = document.getElementById('col2');
// document.createElement('')
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['grade', 'students'],
          ['A',     95],
          ['B',      4],
          ['C',  1],
          ['D', 0],
          ['F',    0]
        ]);

        var options = {
          title: 'grade distribution'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }