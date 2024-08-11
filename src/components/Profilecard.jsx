import "./Profilecard.css"
import avatar from '../assets/images/image-victor.jpg'

function Profilecard() {
  return (
    <div className="card">
      <div className="header"></div>
      <div className="container">
        <div className="content">
          <img id="card-img" src={avatar} alt="" />
          <label className="black-text">Victor Crest <span>26</span></label>
          <label className="grey-text">London</label>
        </div>
        <hr/>
        <div className="footer">
          <div className="actions">
            <label className="black-text">80K </label>
            <label className="grey-text"> Followers</label>
          </div>
          <div className="actions">
            <label className="black-text">803K </label>
            <label className="grey-text"> Likes</label>
          </div>
          <div className="actions">
            <label className="black-text">1.4K </label>
            <label className="grey-text"> Photos</label>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Profilecard;