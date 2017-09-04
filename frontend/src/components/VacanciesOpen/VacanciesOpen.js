import React, {Component} from 'react';
import './vacanciesOpen.css';
import Helmet from "react-helmet";

import PageTitle from './../../containers/PageTitle';
import Filters from './../../components/Filters';

class VacanciesOpen extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="bcgr">
                <Helmet>
                    <title>Vacancy</title>
                </Helmet>
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <PageTitle
                            pageTitle='Open vacancies'
                            showBackBtn={false}
                            showButton={true}
                            titleForButton='Create vacancy'
                            linkForButton='/create-vacancy'
                        />
                        <Filters
                            project={true}
                            position={true}
                            level={true}
                            date={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default VacanciesOpen;