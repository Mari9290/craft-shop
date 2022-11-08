import insta from './insta.png';
import tg from './tg.png';
import vk from './vk.png';
import whatsapp from './whatsapp.png';

function Contacts () {
    return(
        <div>
            <h2 className="header">Как нас найти</h2>
        <div className="container-contacts">
        <div className='container-social'>
                <img className='social' src={insta} alt='insta' width='40px'/>
                <img className='social' src={tg} alt='tg' width='40px'/>
                <img className='social' src={vk} alt='vk'  width='40px'/>
                <img className='social' src={whatsapp} alt='whatsapp' width='40px'/>
            </div>
            <iframe title='maps' className="maps-decor" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.4004170821053!2d38.223402643406075!3d55.577836758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ac00b2ca5e3db%3A0xc8e455d456999df1!2z0JPQvtGA0L7QtNGB0LrQvtC5INC_0LDRgNC6LCDQoNCw0LzQtdC90YHQutC-0LUsINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MDEwMw!5e0!3m2!1sru!2sru!4v1667905780844!5m2!1sru!2sru" width="500" height="400">maps</iframe>

        </div>
        </div>
    )
}

export default Contacts;