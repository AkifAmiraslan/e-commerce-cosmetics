/* eslint-disable react/no-unescaped-entities */
import './styles.scss'
import arrow from '../../../assets/images/Arrow 2.svg'
function LetsTalk(){
    return(
        <div className='lets-talk-container'>
            <img src={arrow} alt="" />
            <h3>WE Can't WAIT TO MEET YOU</h3>
            <h1>Let’s Talk</h1>
            <form>
                <button>Try it free now</button>
            </form>
        </div>
    )
}
export default LetsTalk;