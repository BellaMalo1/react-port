import welcome from './welcome.css'
import { Link } from 'react-router-dom'

function Welcome (){

   function handleSubmit(event){
    event.preventDefault()
    document.body.classList.add('hide')
   
   
    


   }


    return(
        
        <div className="Welcome-page-container">
            <h1>Welcome</h1>
            <button onClick={handleSubmit}ClassName="welcombtn">Nice to Meet You!</button>
            <img className="cactus" src={require('./cactus-3.png')} alt='cactus'></img>
        </div>
        
               

        
    )

}

export default Welcome