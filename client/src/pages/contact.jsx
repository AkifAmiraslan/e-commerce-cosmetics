import GetInTouch from '../components/contactPage/getInTouch'
import VisitOffice from '../components/contactPage/visitOffice'
import LetsTalk from '../components/contactPage/letsTalk'
import { useEffect } from 'react';
function Contact(){
    useEffect(() => {
        // Səhifə yeniləndikdə və ya navigasiya zamanı yuxarıya scroll et
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <GetInTouch/>
            <VisitOffice/>
            <LetsTalk/>
        </>
    )
}
export default Contact;