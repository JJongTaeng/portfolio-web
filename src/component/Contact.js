import React from 'react';
import '../../css/Contact.css';

const Contact = () => {
  return (
    <section className="business-card-page">
      <div className="business-card-left">
        <div className="business-left-image"></div>
        <div className="business-left-description">
          <p>취업 준비생</p>
        </div>
      </div>
      <div className="business-card-right">
        <div className="business-right-header">즐기는 개발자</div>
        <div className="business-right-name">
          <div className="korean">조인태</div>
          <div className="eng">Jointae</div>
        </div>
        <div className="business-right-phone">010-8867-0257</div>
        <div className="business-right-mail">joint14@naver.com</div>
        <div className="business-right-description">
        많이 모자란 포트폴리오 봐주셔서 감사합니다.<br></br>
        지속적인 발전을 하며 뒤처지지 않는 개발자가 되겠습니다.
        </div>
      </div>
    </section>
  )
}

export default Contact;