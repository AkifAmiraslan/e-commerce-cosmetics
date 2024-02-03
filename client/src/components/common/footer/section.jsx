/* eslint-disable react/prop-types */
import './styles.scss';
function Section(props){
    return(
        <div className='cart'>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.info1}
            </p>
            <p>
                {props.info2}
            </p>
            <p>
                {props.info3}
            </p>
            <p>
                {props.info4}
            </p>
        </div>
        
        
    )
}
export default Section;