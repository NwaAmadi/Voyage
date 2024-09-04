import React from 'react'
import '../CSS/Footer.css'

const Footer = ()=> 
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-about">
            <h2>About Us</h2>
            <p>We are a leading company in providing quality logistics 
                services and ensuring safe and seamless flight experience
                 to our customers worldwide. Our mission is 
                to deliver excellence in flight and comfort.</p>
        </div>
        
        <div class="footer-links">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        
        <div class="footer-contact">
            <h2>Contact Us</h2>
            <ul>
                <li><i class="fas fa-phone"></i> +234-7041-606568</li>
                <li><i class="fas fa-envelope"></i> ukegbuchibuisi@gmail.com</li>
                <li><i class="fas fa-map-marker-alt"></i>No.1 School Rd., Aba, Nigeria</li>
            </ul>
        </div>
        
        <div class="footer-social">
            <h2>Follow Us</h2>
            <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    </div>
    
    <div class="footer-bottom">
        <p>&copy; 2024 Voyage Vista. All Rights Reserved.</p>
    </div>
</footer>

export default Footer