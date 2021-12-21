import { FaCode } from "react-icons/fa";


function LandingPage( props ) {

    return (
        <>
            <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        width: '100%', height: '85vh'
            }}>
                <FaCode style={{ fontSize: '4rem' }} /><br />
            </div>
        </>
    );
}

export default LandingPage;
