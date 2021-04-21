import React from 'react'
import Aside from '../../components/Aside'
import Main from '../../components/Main'

function Home() {


    function showAboutMe(event) {
        event.preventDefault()
        console.log('showabout me hits');
        document.getElementById("aboutCard").style.display = 'block'
        document.getElementById("contactCard").style.display = 'none'

    }
    function showContactCard(event) {
        event.preventDefault()
        console.log('contact card hits');
        document.getElementById("aboutCard").style.display = 'none';
        document.getElementById("contactCard").style.display = 'block'
    }


    return (
        <div className='row'>
            <Aside
                showAboutMe={showAboutMe}
                showContactCard={showContactCard} />
            <Main
                showAboutMe={showAboutMe}
                showContactCard={showContactCard} />
        </div>
    )
}

export default Home;