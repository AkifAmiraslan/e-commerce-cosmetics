import './styles.scss'
/* eslint-disable react/prop-types */
function Section(props){
    return (
        <div className='jobSecurity-section'>
            <img src={props.imageSrc} alt="" />
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}
export default Section;