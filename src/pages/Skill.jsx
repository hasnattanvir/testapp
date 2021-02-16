import React from 'react';

const Skill = () => {
    return (
       <>
        <div className="main_div bg-color margin-set " id="Skill_id">
            <div className="container-fluid ">
                <div className="row gutter">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="skill-inner-onebox ">
                            <p  className="title-s">I,M EXPART ON</p>
                            <h1 className="heding-s">Let,s Work Together</h1>
                            <p className="para-s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim iusto nostrum porro exercitationem, quis consequuntur provident. Nostrum excepturi provident deserunt, iusto quas doloremque accusamus fugit reprehenderit, incidunt vero molestiae.</p>
                            <div className="button-s">
                                <a className="btn btn-primary">Hire Me Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="skill-inner-onebox">
                          <div className="skill-bars">
                            <div className="bar">
                                <div className="info">
                                    <span>HTML</span>
                                </div>
                                <div className="progress-line html">
                                    <span></span>
                                </div>
                                </div>
                                <div className="bar">
                                <div className="info">
                                    <span>CSS</span>
                                </div>
                                <div className="progress-line css">
                                    <span></span>
                                </div>
                                </div>
                                <div className="bar">
                                <div className="info">
                                    <span>jQuery</span>
                                </div>
                                <div className="progress-line jquery">
                                    <span></span>
                                </div>
                                </div>
                                <div className="bar">
                                <div className="info">
                                    <span>Python</span>
                                </div>
                                <div className="progress-line python">
                                    <span></span>
                                </div>
                                </div>
                                <div className="bar">
                                <div className="info">
                                    <span>MySQL</span>
                                </div>
                                <div className="progress-line mysql">
                                    <span></span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default Skill;
