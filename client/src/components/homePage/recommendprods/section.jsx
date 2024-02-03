/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import './styles.scss';
function Section(props){
    return (
        <div className='prods-cart' style={{ background: `url(${props.backgroundImage})` }}>
            
            <p>{props.about}</p>
            <h1>{props.title}</h1>
            <a>{props.link}</a>
            
        </div>
    )
}
export default Section;