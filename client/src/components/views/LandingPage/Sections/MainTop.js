import Main1 from '../../../../images/main-1.png'
import { Button } from 'antd';

function MainTop( props ) {
    return (
        <div style={{ 
                backgroundColor: '#F6F6F6',
                    height: '480px',
                    width: '100%',
                    position: 'relative'
        }}>
            <div>
                <table className='main_top' style={{ position: 'relative', display: 'flex', top: '140px', marginLeft: '8rem'}}>
                    <tbody>
                        <tr>
                            <td>
                                <label className='main_top_title'> 
                                    누구나 가능한 <br /> 
                                    쉽고 빠른 뉴스레터
                                </label>
                            </td>
                            <td rowSpan='3' style={{ alignItems: 'right' }}>
                                <img src={Main1} width="400px" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className='main_top_title'> </label>
                            </td>
                        </tr>
                        <tr>
                            <p className='additional_text'>다양한 무료 뉴스레터 템플릿을 사용해<br /> 꿈에 그리던 나만의 뉴스레터를 만들어보세요.</p>
                            <Button type="primary" size="large" href="/register">시작하기</Button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MainTop;