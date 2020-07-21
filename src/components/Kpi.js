import React from 'react'
import Ccg from './Ccg'
import kpiData from '/Users/ruari/OneDrive/Documents/Repos/kpi_adjustment/src/data/kpidata'

class Kpi extends React.Component {

    constructor() {
        super()
        this.state = {
            style: 'collapse'
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
        if(!this.state.style) {
            this.setState({style:'collapse'})
        } else {
            this.setState({style:''})
        }
    }
      
    

    render() {

        const bar = ['09D','09H','09X']
        const ccgComponents = bar.map(ccg => <Ccg ccg={ccg} style={this.state.style}/> )

        // const ccgComponents = kpiData.measure.map(fler => <Ccg ccg={fler}/>)

        const kpiStyle = {
            outline: "blue solid 2px"
        }

        const measureNameStyle = {
            outline: "green solid 2px",
            fontSize:"2px"
        }

        const btnContainerStyle = {

        }

        const btnStyle = {
            margin:"1em 0 1em 0",
            outline: "red solid 2px"
        }

                
        return(
            // --------------<KPI container>------------
            <div className="container row" style={kpiStyle}>
               

                {/*-- KPI name and button container --*/}
                <div className="row" style={btnContainerStyle} >
                    <div className="col-2" style={measureNameStyle}>{this.props.measure}</div>
                        <button onClick={this.handleClick} 
                                className="btn btn-light btn-xs" 
                                style={btnStyle}>Open/close
                        </button>
                </div>
                {/* --------------------------------- */}

                {/* ---- ccgComponents container ----*/}
                <div className="row justify-content-start">
                    {ccgComponents}
                </div>
                {/* -------------------------------- */}
            </div>
            // --------------</KPI container>-----------
        )
    }
}

export default Kpi
