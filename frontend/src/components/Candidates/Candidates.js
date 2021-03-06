import React, {Component} from 'react';
import './candidates.css';

import PageTitle from '../../containers/PageTitle';
import Filters from '../../components/Filters';
import {PanelGroup, Modal, Button} from 'react-bootstrap';
import Panels from '../../components/Panels';
import Helmet from 'react-helmet';

import {connect} from 'react-redux';
import {getCandidates, deleteCandidate} from '../../redux/actions/candidatesActions';
import {getPositions} from '../../redux/actions/positionActions';
import {getLevels} from '../../redux/actions/levelsActions';
import {levelsListName, positionsListName, getValueFromArr} from '../../utils/index';
import {GET_EMPTY_DATA, FILTER_EMPTY_DATA, DELETE_CANDIDATE} from '../../config';



class Candidates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModalConfirm: false,
            deleteCandidateText: DELETE_CANDIDATE,
            currentCandidateId: '',
            positionsFilterID: '',
            levelsFilterID: '',
            levelsFilterVal: '',
            projectFilterVal: '',
            candidatesListExist: true
        }

    }

    componentWillMount() {

        this.props.onCheckUserRole();
        const {dispatch} = this.props;

        if (!this.props.candidates.length) {
            dispatch(getCandidates()).then(
                (data) => {
                    if (!data.length) {
                        this.setState({
                            candidatesListExist: false
                        });
                    } else {
                        this.setState({
                            candidatesListExist: true
                        });
                    }
                }
            );
        }

        if (!this.props.positions.length) {
            dispatch(getPositions());
        }

        if (!this.props.levels.length) {
            dispatch(getLevels());
        }

    }


    openModalConfirm(currentID) {
        this.setState({
            currentCandidateId: currentID,
            showModalConfirm: true
        });
    }

    closeModalConfirm() {
        this.setState({
            showModalConfirm: false
        })
    }

    deleteCandidate() {
        this.closeModalConfirm();
        const {dispatch} = this.props;
        dispatch(deleteCandidate(this.state.currentCandidateId));
    }

    switchToEditMode(currentID) {
        this.props.history.push("/candidates/candidate/" + currentID + "/edit");
    }

    getPositionFilterVal(positionFilterVal) {
        let positionsList = this.props.positions,
            positionFilterId = 0;

        positionFilterId = getValueFromArr(positionsList, positionFilterVal, 'name');

        this.setState({
            positionsFilterID: positionFilterId
        })
    }

    getLevelFilterVal(levelFilterVal) {

        let levelsList = this.props.levels,
            levelFilterId = 0;

        levelFilterId = getValueFromArr(levelsList, levelFilterVal, 'name');

        this.setState({
            levelsFilterID: levelFilterId
        })
    }


    render() {

        let candidatesList = this.props.candidates,
            levelsList = this.props.levels,
            positionsList = this.props.positions,
            levelsTitleObj = levelsListName(levelsList),
            positionsTitleObj = positionsListName(positionsList),
            candidatesToDisplay = [];

        if (this.state.candidatesListExist) {
            if (candidatesList.length && levelsList.length && positionsList.length) {


                //-- FILTER BY POSITION  --------------------------
                let positionFilterID = this.state.positionsFilterID;

                if (positionFilterID) {
                    candidatesList = candidatesList.filter((current) => {
                        return (current.position_id === positionFilterID);
                    });
                }
                //-- END FILTER BY LEVEL -----------------------

                //-- FILTER BY LEVEL  --------------------------
                let levelFilterID = this.state.levelsFilterID;

                if (levelFilterID) {
                    candidatesList = candidatesList.filter((current) => {
                        return (current.level_id === levelFilterID);
                    });
                }
                //-- END FILTER BY LEVEL  -----------------------


                if (candidatesList.length) {
                    candidatesToDisplay = candidatesList.map((item) => {

                        let candidateId = item.id,
                            candidateName = item.name,
                            candidateSurname = item.surname,
                            candidateAge = item.age,
                            candidateExperience = item.experience,
                            candidateContacts = item.contacts,
                            candidateNotes = item.notes,
                            candidatePositionId = item.position_id,
                            candidatePosition = positionsTitleObj[candidatePositionId],
                            candidateLevelId = item.level_id,
                            candidateLevel = levelsTitleObj[candidateLevelId],
                            candidateCV = item.cv.url;

                        let checkCandidateCV = () => {
                            if (candidateCV) {
                                return (
                                    <a href={candidateCV}
                                       className="download-block form-group text-green text-green--hover"
                                       download>
                                        <span className="download-block__icon fa fa-download"/>
                                        <span className="download-block__title">Download CV</span>
                                    </a>
                                )
                            } else {
                                return (
                                    <a className="download-block form-group download-block--disabled text-muted">
                                        <span className="download-block__icon fa fa-download"/>
                                        <span className="download-block__title text-bold--100">Download CV</span>
                                    </a>
                                )
                            }
                        };

                        let checkCandidateAge = () => {
                            if (candidateAge) {
                                return (
                                    <span className="form-control-static">
                                        {candidateAge}
                                    </span>
                                )
                            } else {
                                return (
                                    <span className="form-control-static text-muted text-bold--100">
                                        {GET_EMPTY_DATA}
                                    </span>
                                )
                            }
                        };

                        let checkCandidateExperience = () => {
                            if (candidateExperience) {
                                return (
                                    <span className="form-control-static">
                                        {candidateExperience}
                                    </span>
                                )

                            } else {
                                return (
                                    <span className="form-control-static text-muted text-bold--100">
                                        {GET_EMPTY_DATA}
                                    </span>

                                )
                            }
                        };

                        let checkCandidateContacts = () => {
                            if (candidateContacts) {
                                return (
                                    <span className="form-control-static">
                                        {candidateContacts}
                                    </span>
                                )

                            } else {
                                return (
                                    <span className="form-control-static text-muted text-bold--100">
                                        {GET_EMPTY_DATA}
                                    </span>

                                )
                            }
                        };

                        let checkCandidateNotes = () => {
                            if (candidateNotes) {
                                return (
                                    <span className="form-control-static">
                                        {candidateNotes}
                                    </span>
                                )

                            } else {
                                return (
                                    <span className="form-control-static text-muted text-bold--100">
                                        {GET_EMPTY_DATA}
                                    </span>

                                )
                            }
                        };


                        const PANEL_TITLE = (
                            <div className="custom-panel-title panel-list-item">
                                <div className="custom-panel-title__right-side">
                                    <div className="panel-collapse-btn">
                                        <span className="panel-collapse-btn__title btn-js">Expand</span>
                                        <span className="fa fa-angle-right panel-collapse-btn__arrow arrow-js"/>
                                    </div>
                                </div>
                                <div className="custom-panel-title__left-side">
                                    <div className="info-block">
                                        <div className="info-block__item">
                                            <div
                                                className="info-block__project">{candidateName + ' ' + candidateSurname}</div>
                                            <div className="info-block__position separate-line">
                               <span className="info-block__position-capture">
                                   Desired position:
                               </span>
                                                <span
                                                    className="info-block__position-name">{candidatePosition + ' ' + candidateLevel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );

                        const DESCRIPTION = (
                            <form className="custom-form">
                                <div className="col-md-6 no-padding">
                                    <div className="form-group">
                                        <label className="control-label form-label">Name: <span
                                            className="form-control-static">
                                            {candidateName + ' ' + candidateSurname}
                                        </span></label>

                                    </div>

                                    <div className="form-group">
                                        <label className="control-label form-label">Desired position: <span
                                            className="form-control-static">{candidatePosition + ' ' + candidateLevel}</span></label>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label form-label">Age: {checkCandidateAge()}</label>

                                    </div>
                                </div>
                                <div className="col-md-6 no-padding">
                                    {checkCandidateCV()}
                                </div>
                                <div className="col-md-12 no-padding">

                                    <div className="form-group">
                                        <label className="control-label form-label">Contact
                                            info: {checkCandidateContacts()}</label>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label form-label">Work
                                            experience: {checkCandidateExperience()}</label>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label form-label">Additional
                                            notes: {checkCandidateNotes()}</label>
                                    </div>


                                </div>
                            </form>

                        );
                        return (
                            <Panels
                                key={candidateId}
                                id={candidateId}
                                titleConst={PANEL_TITLE}
                                description={DESCRIPTION}
                                showEditBtn={true}
                                editBtnId={"edit-candidate-" + candidateId}
                                showDeleteBtn={true}
                                deleteBtnId={"delete-candidate-" + candidateId}
                                callDelete={() => {
                                    this.openModalConfirm(candidateId)
                                }}
                                callEdit={() => this.switchToEditMode(candidateId)}
                            />
                        )

                    });
                } else {
                    candidatesToDisplay = (<h5 className="noData"> {FILTER_EMPTY_DATA}</h5>);
                }


            }
        } else {
            candidatesToDisplay = (<h5 className="noData"> {GET_EMPTY_DATA} </h5>);
        }


        return (
            <div className="bcgr">
                <Helmet>
                    <title>Candidates</title>
                </Helmet>
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <PageTitle pageTitle="Candidates"
                                   showBackBtn={false}
                                   showButton={true}
                                   titleForButton="Add candidate"
                                   linkForButton="/candidates/create-candidate"
                                   buttonId='add-candidate'
                        />
                        <Filters
                            level={true}
                            position={true}
                            positionFilterVal={(event) => this.getPositionFilterVal(event)}
                            levelFilterVal={(event) => this.getLevelFilterVal(event)}
                        />
                        <PanelGroup bsClass='custom-panel-group'>
                            {candidatesToDisplay}
                        </PanelGroup>
                        <Modal show={this.state.showModalConfirm}
                               onHide={() => this.closeModalConfirm()}
                               className="custom-btn-group">
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <p>{this.state.deleteCandidateText}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    id={"btn-modal-yes-" + this.state.currentCandidateId}
                                    className="btn btn-primary"
                                    onClick={() => this.deleteCandidate()}
                                >Yes
                                </Button>
                                <Button
                                    id={"btn-modal-no-" + this.state.currentCandidateId}
                                    className="btn btn-danger"
                                    onClick={() => this.closeModalConfirm()}
                                    bsStyle="primary"
                                >No
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        candidates: state.candidates.candidates,
        levels: state.levels.levels,
        positions: state.positions.positions,
    }
}

export default connect(mapStateToProps)(Candidates);