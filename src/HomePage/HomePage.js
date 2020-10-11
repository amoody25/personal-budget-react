import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';

const dataSource = {
  datasets: [
      {
          data: [1,2,3,4,5],
          backgroundColor: [
              '#0048BA',
              '#FFBF00',
              '#008000',
              '#660000',
              '#004225',
              '#58427C',
              '#FF8C00'
            ],
      }],
        labels: [
          'label1',
          'label2'
]};

function createChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: dataSource
  });
}

function HomePage() {

    axios.get('/budget.json')
    .then(res => {
        console.log(res.data);
         for (var i = 0; i < res.data.myBudget.length; i++) {
            dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            dataSource.labels[i] = res.data.myBudget[i].title;
        }
        createChart();
    });

  return (
        <main className="center" id="main">
            <div className="page-area">
                <article>    
                    <div className="text-box">
                        <h1>Stay on track</h1>
                        <p>
                            Do you know where you are spending your money? If you really stop to track it down,
                            you would get surprised! Proper budget management depends on real data... and this
                            app will help you with that!
                        </p>
                    </div>
                </article>     
                <article>
                    <div className="text-box">
                        <h1>Alerts</h1>
                        <p>
                            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                        </p>
                    </div>
                </article>     
                <article>
                    <div className="text-box">
                        <h1>Results</h1>
                        <p>
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear... 
                            because they know it is all good and accounted for.
                        </p>
                    </div>
                </article>   
                <article>
                    <div className="text-box">
                        <h1>Free</h1>
                        <p>
                            This app is free!!! And you are the only one holding your data!
                        </p>
                    </div>
                </article>      
                <article>    
                    <div className="text-box">
                        <h1>Stay on track</h1>
                        <p>
                            Do you know where you are spending your money? If you really stop to track it down,
                            you would get surprised! Proper budget management depends on real data... and this
                            app will help you with that!
                        </p>
                    </div>
                </article>  
                <article>
                    <div className="text-box">
                        <h1>Alerts</h1>
                        <p>
                            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                        </p>
                    </div>
                </article>     
                <article>
                    <div className="text-box">
                        <h1>Results</h1>
                        <p>
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear... 
                            because they know it is all good and accounted for.
                        </p>
                    </div>
                </article>
                <article>
                    <div className="text-box">
                        <h1>Chart</h1>
                        <p>
                            <canvas
                               id="myChart" 
                               width="400" height="400">
                            </canvas>
                        </p>
                    </div>
                </article>

            </div>

        </main>
  );
}

export default HomePage;
