import React from 'react'

const root = {
    maxWidth: 1000,
    margin: '0 auto',
}

const center = {
    textAlign: 'center',
    fontWeight: 600,
    margin: '10px auto',
}



const Precautions = () => {
    return (
        <div style={root}>
            <div style={center}>

                <h1>Precautions for Covid-19</h1>
                <h3>
                    Wear a Mask. Save Lives
                </h3>
                <table style={center}>
                    <tr>
                        <td><img src="images/Mask2.png" alt="Mask" width='200' /></td>
                        <td><img src="images/washhands.png" alt="Wash Hands" width='200' /></td>
                        <td><img src="images/6ft.png" alt="Keep Distance" width='300' /></td>
                    </tr>

                    <tr>
                        <td>Wear a Face Mask</td>
                        <td>Clean your Hands</td>
                        <td>Keep a Safe Distance(min. 6ft)</td>
                    </tr>
                </table>

            </div>
            <div>
                <h2 style={center}>To Prevent the spread of Covid-19</h2>
                <ul>
                    <li>Clean your Hands often. Use soap and water, or an alcohol-based hand rub.</li>
                    <li>Maintain a safe distance from anyone who is coughing, sneezing or having breath taking problem.</li>
                    <li>Wear a Face Mask when physical distancing is not possible.</li>
                    <li>Don't touch your eyes, nose or mouth</li>
                    <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                </ul>
            </div>
            <p style={center}>Note: Strictly follow all prevention in this pandemic situation to be saved from any health issue</p>

        </div>
    )
}

export default Precautions;