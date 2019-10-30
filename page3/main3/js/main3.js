

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [25, 25, 50, 0],
            backgroundColor: [
                '#8BA4F9',
                '#66D2EA',
                '#FFBA9C',
                '#3D4975'
            ],
        }]
    },
  
    
});