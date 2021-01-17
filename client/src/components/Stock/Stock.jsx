import React from 'react';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValue: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const mousePosition = this;
        console.log(mousePosition);
        const API_KEY = process.env.ALPHA_STOCKS_API_KEY;
        let StocksSymbol = 'AAPL';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StocksSymbol}&outputsize=full&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for(var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }
                    //Logging the values to see the data in console
                    console.log(stockChartXValuesFunction);
                    console.log(stockChartYValuesFunction);
                }
            )
    }

    render() {
        return(
            <div>
                <h1>Stock Market</h1>
            </div>
        )
    }
}

export default Stock;