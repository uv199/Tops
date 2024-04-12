import React, { useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1 } from '@fortawesome/free-solid-svg-icons'

export default function TermsAndCondition() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className="terms" style={{paddingBottom: "80px"}}>
                <div className="container">
                    <div className="terms_page">
                        <h1 className='pt-5 ps-5 pb-4' style={{ fontSize: "50px", fontWeight: "400" }}>Terms & Conditions</h1>
                        <div className='border-bottom border-3 border-black' style={{ width: "6%", marginLeft: "220px" }}></div>
                        <div className='pb-4' style={{ paddingTop: "100px", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                            <div>
                                <h1 className='m-0' style={{fontSize: "50px"}}>Website Terms and Conditions of Use</h1>
                                <span style={{letterSpacing: "1px"}}>- Last Updated at 20 Jan 2022.</span>
                            </div>
                            <div className='pt-5'>
                                <h1><FontAwesomeIcon icon={fa1} className='opacity-75 text-black' />. Terms</h1>
                                <p>
                                    By accessing this Website, accessible from https://layers.shop, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
                                </p>
                            </div>
                            <div className='pt-3'>
                                <h1>2. Use License</h1>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials on Layers Electronics PVT. LTD.'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <p className='m-0'>modify or copy the materials;</p>
                                <p className='m-0'>use the materials for any commercial purpose or for any public display;</p>
                                <p className='m-0'>
                                    attempt to reverse engineer any software contained on Layers Electronics PVT. LTD.'s Website;
                                </p>
                                <p className='m-0'>remove any copyright or other proprietary notations from the materials; or</p>
                                <p className='m-0'>
                                    transferring the materials to another person or "mirror" the materials on any other server.
                                </p>
                                <p className='pt-3'>
                                    This will let Layers Electronics PVT. LTD. to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator.
                                </p>
                            </div>
                            <div className='pt-3'>
                                <h1>3. Disclaimer</h1>
                                <p>
                                    All the materials on Layers Electronics PVT. LTD.’s Website are provided "as is". Layers Electronics PVT. LTD. makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Layers Electronics PVT. LTD. does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
                                </p>
                            </div>
                            <div className='pt-3'>
                                <h1>4. Limitations</h1>
                                <p>
                                    Layers Electronics PVT. LTD. or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Layers Electronics PVT. LTD.’s Website, even if Layers Electronics PVT. LTD. or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these
                                </p>
                                <p>limitations may not apply to you.</p>
                            </div>
                            <div className='pt-3'>
                                <h1>5. Revisions and Errata</h1>
                                <p>
                                    The materials appearing on Layers Electronics PVT. LTD.’s Website may include technical, typographical, or photographic errors. Layers Electronics PVT. LTD. will not promise that any of the materials in this Website are accurate, complete, or current. Layers Electronics PVT. LTD. may change the materials contained on its Website at any time without notice. Layers Electronics PVT. LTD. does not make any commitment to update the materials.
                                </p>
                            </div>
                            <div className='pt-3'>
                                <h1>6. Links</h1>
                                <p>
                                    Layers Electronics PVT. LTD. has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Layers Electronics PVT. LTD. of the site. The use of any linked website is at the user’s own risk.
                                </p>
                            </div>
                            <div className='pt-3'>
                                <h1>7. Site Terms of Use Modifications</h1>
                                <p>
                                    Layers Electronics PVT. LTD. may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
                                </p>
                            </div>
                            <div className='pt-3'>
                                <h1>8. Your Privacy</h1>
                                <p>Please read our Privacy Policy.</p>
                            </div>
                            <div className='pt-3'>
                                <h1>9. Governing Law</h1>
                                <p>
                                    Any claim related to Layers Electronics PVT. LTD.'s Website shall be governed by the laws of in without regards to its conflict of law provisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
