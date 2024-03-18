import "./Footer.scss"
import {FacebookOutlined, GithubOutlined, InstagramOutlined} from '@ant-design/icons'
const Footer = () => {
  return (
    <div className="footer">
      <h1>Get in Touch</h1>
      <p>Googling Stuff you dont know is also a part of learning.
      <br></br>Not Everyone know as much as you think they do.</p>
      <div className="icon">
      <div className="icons">
         <FacebookOutlined style={{color:'blue'}}/>
         <InstagramOutlined style={{color:'red'}}/>
         <GithubOutlined style={{color:'white'}}/>
      </div>
      <div className="image">
        <img src="/picture.jpeg" alt="pp" height={100} width={100}/>
      </div>
      </div>
    </div>
  )
}

export default Footer
