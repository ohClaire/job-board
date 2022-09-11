


// Event listeners
window.addEventListener('load', renderCharts);

function renderCharts() {
  charts
}



const charts = () => {
  chart1

}


const chart1 = new Chart('myChart1', {
  type: 'doughnut',
  data: {
    labels: [    
      'Applicants',
      'Views',
    ],
    datasets: [{
      label: 'Applicants v. Views',
      data: [3154, 5482],
      backgroundColor: [
        '#FFBE88',
        '#CDB3D4',
        // '#845892',
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',

  }
});

const chart2 = new Chart('myChart2', {
  type: 'doughnut',
  data: {
    labels: [    
      'Interviews',
      'Views',
    ],
    datasets: [{
      label: 'Interviews v. Views',
      data: [1546, 5482],
      backgroundColor: [
        '#FFBE88',
        '#47CACC',
        // '#437273',
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
  }
});

const chart3 = new Chart('myChart3', {
  type: 'doughnut',
  data: {
    labels: [    
      'Forwards',
      'Views',
    ],
    datasets: [{
      label: 'Forwards v. Views',
      data: [782, 5482],
      backgroundColor: [
        '#FFBE88',
        '#E7B7C8',
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
  }
});


const chart4 = new Chart('myChart4', {
  type: 'bar',
  data: {
    labels: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S','S', 'M', 'T', 'W', 'T', 'F', 'S'],    
    datasets: [{
      label: 'Number of Applicants',
      data: [100, 600, 450, 710, 530, 300, 500, 100, 810, 425, 511, 120, 230, 95],
      backgroundColor: 'rgb(73, 120, 151)',
      hoverBackgroundColor: '#00DDDD',
      hoverOffset: 4
    }]
  },
  
});