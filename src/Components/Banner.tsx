
import '../style/BannerStyle.css'

const Banner = () => {
  return (
    <div>
      <div className="hero-banner">
        <div className="hero-image">
          <img src='../../Images/delivery2.svg' alt="Delivery van" />
        </div>
        <div className="hero-content">
          <h2>طلباتكم داخل مدينة الرياض</h2>
          <p>توصل خلال 24 ساعة</p>
        </div>
         
        <div className="circle-decoration" style={{ width: '80px', height: '80px', top: '20px', right: '20px', borderColor: '#f5e259' }}></div>
        <div className="circle-decoration" style={{ width: '120px', height: '120px', bottom: '-60px', left: '20px', borderColor: '#aad4e2' }}></div>
        <div className="dots-decoration" style={{ bottom: '20px', right: '100px' }}></div>
      </div>

      <div className="category-boxes">
        <div className="category-box">المكياج</div>
        <div className="category-box">العناية</div>
        <div className="category-box">الأطفال</div>
      </div>
    </div>
  )
}

export default Banner