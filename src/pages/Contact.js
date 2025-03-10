import React from 'react';
import './home.css'; 

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-details">
                <p><strong>Cellphone Number:</strong></p>
                <p>📱 +63 921 495 7685</p>
                <p>📱 +63 905 255 9852</p>
                <p>📱 +63 947 368 3819</p>

                <p><strong>Telephone Number:</strong></p>
                <p>☎️ 02 8856 9323</p>
                <p>☎️ 02 8856 9324</p>

                <p><strong>Email Address:</strong></p>
                <p>📧 <a href="mailto:admission@lyceumalabang.edu.ph">admission@lyceumalabang.edu.ph</a></p>

                <p><strong>FB Page:</strong></p>
                <p>🔵 <a href="https://www.facebook.com/LyceumOfAlabang" target="_blank" rel="noopener noreferrer">Lyceum of Alabang</a></p>
            </div>
        </div>
    );
}

export default Contact;
