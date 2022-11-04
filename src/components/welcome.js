import welcome from './welcome.css'

function Welcome (){


    return(
        <div className="Welcome-page-container">
            <h1>Welcome</h1>
            <button className="welcombtn">Nice to Meet You!</button>
            <img className="cactus" src={require('./cactus-3.png')} alt='cactus'></img>

        </div>
    )

}

export default Welcome