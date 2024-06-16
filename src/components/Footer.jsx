import React from 'react';
import hearticon from '../../public/heart.png'

function Footer() {
    return (
        <>
            <footer id="footer">
                <hr />
                <p>
                    <span id="copyright">&copy; 2024</span>
                    Designed with <img src={hearticon} /> by Hom Dahal
                </p>
            </footer>
        </>
    );
}
export default Footer