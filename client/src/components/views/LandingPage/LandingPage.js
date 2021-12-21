import MainTop from "./Sections/MainTop";
import { CaretDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './Sections/landingpage.css';
import Main2 from '../../../images/main-2.png'
import Main3 from '../../../images/main-3.png'

function LandingPage( props ) {

    return (
        <div className="app" style={{ width: '100%', margin: '0' }}>
            <MainTop />
            
            <br />
            <br />

            <div>
                <h2 style={{ fontWeight: 'bold' }}>ABLE 미리보기</h2>
                <CaretDownOutlined style={{ fontSize: '30px', color: 'rgba(0,0,0,0.75)' }} />
            </div>

            <div style={{ display: 'block', margin: '4rem' }}>
                <img src={Main2} style={{ width: '280px'}}  />
                <p style={{ margin: '2.4rem' }}>설문조사 하듯이 <br /> 몇 가지 입력과 클릭으로 <br /> 쉽게 콘텐츠를 만들 수 있어요.</p>
            </div>

            <div style={{ display: 'block', margin: '8rem' }}>
                <img src={Main3} style={{ width: '280px'}}  />
                <p style={{ margin: '2.4rem'}}>생성된 코드를 <br /> 복사 + 붙여넣기하여 <br /> 뉴스레터를 보내보세요.</p>
            </div>

            <div style={{ display: 'block', margin: '8rem auto 2rem auto' }}>
                <h2 style={{ fontWeight: '600'}}>
                    다양한 템플릿을 이용해 <br /> 
                    뉴스레터를 만들어보세요.
                </h2>
                {/* <img src={Main4} style={{ margin: '2rem', width: '60%'}}/> */}
                <div className="template_ex">
                    <div style={{ display: 'inline-flex', margin: '2rem 0.4rem', backgroundColor: '#a39bbf', border: '1px solid transparent', width: '13%', height: '32rem'}}>
                        1
                    </div>
                    <div style={{ display: 'inline-flex', margin: '2rem 0.4rem', backgroundColor: '#ffd454', border: '1px solid transparent', width: '13%', height: '32rem'}}>
                        2
                    </div>
                    <div style={{ display: 'inline-flex', margin: '2rem 0.4rem', backgroundColor: '#a39bbf', border: '1px solid transparent', width: '13%', height: '32rem'}}>
                        3
                    </div>
                    <div style={{ display: 'inline-flex', margin: '2rem 0.4rem', backgroundColor: '#ffd454', border: '1px solid transparent', width: '13%', height: '32rem'}}>
                        4
                    </div>
                </div>
            </div>

            <Button type="primary" size="large" href="/register">시작하기</Button>
            
        </div>
    );
}

export default LandingPage;
