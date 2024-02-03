/* eslint-disable react/prop-types */

function Section(props){
    return(
        <div className='section' style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className='text-container'>
                <p className='about'>
                    {props.about}
                </p>
                <h1 className='title'>
                    {props.title}
                </h1>
                <a className='link'>
                    {props.link}
                </a>
            </div>
        </div>
    )
}
export default Section;