import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'

        }} className="p-10 mt-12">
            <div className='footer'>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Our factories</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Production</span>
                    <a className="link link-hover">Technology</a>
                    <a className="link link-hover">Products</a>
                    <a className="link link-hover">Quality</a>
                    <a className="link link-hover">Our customers</a>
                </div>
                <div>
                    <span className="footer-title">Contact us</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Addresses of factories</a>
                    <a className="link link-hover">Trading houses</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>

        </footer>
    );
};

export default Footer;