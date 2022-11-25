import React,{useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import "./Blog.css";
import "./blog.scss";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../Assets/blog1.jpg";
import img2 from "../../Assets/blog2.jpg";
import img3 from "../../Assets/blog3.jpg";
import img4 from "../../Assets/blog4.jpg";

const post = [
  {
    id: 1,
    postImage: img1,
    title: "Beautiful Morocco,let us travel!",
    desc: "The kingdom of morocoo is a muslim country in western north africa,with costlines on the atlantic ocean and mediterran Sea.",
  },
  {
    id: 2,
    postImage: img2,
    title: "ed ut perspiciatis unde omnis iste natus error sit",
    desc: " voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis ",
  },
  {
    id: 3,
    postImage: img3,
    title: "ma veniam, quis nostrum exercitationem ",
    desc: "ma veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure re.",
  },
  {
    id: 4,
    postImage: img4,
    title: "possimus, omnis voluptas assumenda est,",
    desc: "occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to",
  },
];
const Blog = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000
    },[])
  })
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">Our Best Blog</h2>
          <p data-aos="fade-up" data-aos-duration="2500">An insight to the incredible experince in the world.</p>
        </div>
        <div className="mainContainer grid">
          {
          post.map(({id,postImage,title,desc}) => {
            return (
              <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                   { 
                    desc
                   }
                  </p>
                </div>
                <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                  
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
