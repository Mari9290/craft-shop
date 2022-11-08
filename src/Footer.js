import Logo from './logo.jpg';

function Footer() {
    return(
        <div>
            <div className='container'>
                <img src={Logo} alt='логотип' width='100px'/>
            </div>
             
            <hr className="line"/>
            
            <div className='container'>
                <p className="text">8(800)0000000</p>
                <p className="text">108709, Московская область, город Раменское, пл. Славы, 61</p>
            </div>
        
        </div>
    )
}

export default Footer;