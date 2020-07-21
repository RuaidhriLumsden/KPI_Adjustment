import React from 'react';
import './App.css';
import Kpi from './components/Kpi'
import Header from './components/Header'
import kpiData from '/Users/ruari/OneDrive/Documents/Repos/kpi_adjustment/src/data/kpidata'

class App extends React.Component {
            
    render() {

        const foo = ['LQR01b','LQR17b','LQR18']
        
        const kpiComponents = foo.map(item => {
            return <Kpi measure={<h2>{item}</h2>} />
        })

        return(
            <div>
                <Header />
                {kpiComponents}
            </div>
        )
    }
}

export default App;
