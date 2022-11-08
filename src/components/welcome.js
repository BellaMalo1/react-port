import welcome from './welcome.css'

function Welcome (){

   function handleSubmit(event){
    event.preventDefault()
    console.log('clicked')
   }


    return(
        <div className="Welcome-page-container">
            <h1>Welcome</h1>
            <button onClick={handleSubmit}assName="welcombtn">Nice to Meet You!</button>
            <img className="cactus" src={require('./cactus-3.png')} alt='cactus'></img>

        </div>
    )

}

export default Welcome