import React from 'react'

class Ccg extends React.Component {    
    render() {

        const ccgStyle = {
            outline: "yellow solid 2px",
            margin: "1em 1em 1em 1em",
            padding: "0.5em 0.5em 0.5em 0.5em"
        }

        const inputStyle = {
            width:"75px"
        }

        return(

            // --------------------Ccg Component-----------------------------
            <div className={this.props.style} col-4/*(collapse)*/  style={ccgStyle}>
                {/*------------------------ form-------------------------- */}
                <form>
                    <h2>{this.props.ccg}</h2>
                    {/*--------------- N & D inputs --------------- */}
                    <div className="row">
                        <div>
                            <h3>N</h3>
                            <input type='number' style={inputStyle}></input>
                        </div>
                        <div>
                            <h3>D</h3>
                            <input type='number' style={inputStyle}></input>
                        </div>
                    </div>
                    {/* ------------------------------------------- */}
                </form>
                {/*------------------------ form-------------------------- */}
            </div>
            // --------------------Ccg Component-----------------------------
        )
    }
}

export default Ccg
