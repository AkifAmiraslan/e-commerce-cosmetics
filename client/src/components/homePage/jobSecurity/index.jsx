import './styles.scss'
import Section from './section'
// images
import vector from '../../../assets/images/Vector.svg'

function JobSecurity(){
    return(
        <div className='jobsecurity-container'>
            <Section
                imageSrc={vector}
                title="Job Security"
                content="the quick fox jumps over the 
                lazy dog"
            />
            <Section
                imageSrc={vector}
                title="Job Security"
                content="the quick fox jumps over the 
                lazy dog"
            />
            <Section
                imageSrc={vector}
                title="Job Security"
                content="the quick fox jumps over the 
                lazy dog"
            />
        </div>
    )
}

export default JobSecurity;


