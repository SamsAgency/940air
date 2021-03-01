import React from 'react'
import Footer from '../main/footer/Footer'
import BlogSection from './BlogSection/BlogSection'
import Mainnav from './../mainnav/Mainnav';

const Blogs = () => {
    return (
        <div className="blogs">
            <Mainnav/>
            <BlogSection/>
            <Footer/>
        </div>
    )
}

export default Blogs
