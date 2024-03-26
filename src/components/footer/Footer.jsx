import './Footer.css'
export  function Footer(){
    return <div className="footer">
        <div className='ineerfooter'>
            <div className='footer-sub'>
            <p>Join our newsletter to get latest updates </p>
            <p>You can unsbsribe  at any time</p>
            <div className='footer-form'>
                <form action="">
                <input type="text"  placeholder='Enter your email here '/>
                <span>
                    <button > Subscribe</button>
                </span>
                </form>

                
            </div>
            </div>
            <p>&copy2024 Your website.All rights reserved</p>   
        </div>
        

    </div>
}