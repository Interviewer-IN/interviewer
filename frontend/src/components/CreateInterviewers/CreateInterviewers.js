import React, {Component} from 'react';
import './createInterviewers.scss';

import Helmet from 'react-helmet';
import PageTitle from '../../containers/PageTitle';
import {connect} from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import {Modal, Button} from "react-bootstrap";

import {getPositions} from "../../redux/actions/positionActions";
import {getLevels} from "../../redux/actions/levelsActions";
import {createInterviewer} from "../../redux/actions/interviewersActions";
import {getValueFromArr, removeCurrentError, interviewersValidationForm} from '../../utils/index';
import {CONFIRM_TEXT, PASSWORD_BY_DEFAULT} from "../../config";

class CreateInterviewers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmText: CONFIRM_TEXT,
            showModalConfirm: false,
            nameVal: '',
            surnameVal: '',
            emailVal: '',
            levelVal: '',
            positionVal: '',
            descriptionVal: ''
        };
    }


    componentWillMount() {
        this.props.onCheckUserRole();
        const {dispatch} = this.props;

        if (!this.props.positions.length) {
            dispatch(getPositions());
        }

        if (!this.props.levels.length) {
            dispatch(getLevels());
        }
    }

    handleSubmitForm(event) {
        event.preventDefault();

        this.setState({
            nameVal: this.state.nameVal.trim(),
            surnameVal: this.state.surnameVal.trim(),
            emailVal: this.state.emailVal.trim(),
            descriptionVal: this.state.descriptionVal.trim(),
        });


        let validationPass = interviewersValidationForm.apply(this, [event]);

        if (validationPass) {
            let positionsList = this.props.positions,
                positionVal = this.state.positionVal,
                levelsList = this.props.levels,
                levelVal = this.state.levelVal,
                nameVal = this.state.nameVal,
                surnameVal = this.state.surnameVal,
                emailVal = this.state.emailVal,
                // isHr = this.refs.interviewerIsHR.checked,
                descriptionVal = this.state.descriptionVal,
                positionId = getValueFromArr(positionsList, positionVal, 'name'),
                levelId = getValueFromArr(levelsList, levelVal, 'name'),
                formData = {};

            nameVal ? formData.name = nameVal : false;
            surnameVal ? formData.surname = surnameVal : false;
            emailVal ? formData.email = emailVal : false;
            positionId ? formData.position_id = positionId : false;
            levelId ? formData.level_id = levelId : false;
            descriptionVal ? formData.description = descriptionVal : false;
            formData.password = PASSWORD_BY_DEFAULT;
            formData.confirmation_token = emailVal;


            let {dispatch} = this.props,
                pathName = window.location.hash,
                backPath = '#/' + pathName.split('/')[1];

            dispatch(createInterviewer(formData, null, backPath));
        }

    }

    isFieldsNotEmpty() {
        if (this.state.nameVal || this.state.surnameVal || this.state.emailVal || this.state.descriptionVal || this.state.positionVal || this.state.levelVal) {
            this.openModalConfirm();
        } else {
            this.props.history.goBack();
        }
    }

    handleNameChanges(event) {
        this.setState({nameVal: event.target.value.trim()});
        removeCurrentError(event);
    }

    handleSurnameChanges(event) {
        this.setState({surnameVal: event.target.value.trim()});
        removeCurrentError(event);
    }

    handleEmailChanges(event) {
        this.setState({emailVal: event.target.value});
        removeCurrentError(event);
    }

    handlePositionChanges(event) {
        this.setState({positionVal: event.target.value});
        removeCurrentError(event);
    }

    handleLevelChanges(event) {
        this.setState({levelVal: event.target.value});
        removeCurrentError(event);
    }

    handleDescriptionChanges(event) {
        this.setState({descriptionVal: event.target.value});
        removeCurrentError(event);
    }


    openModalConfirm() {
        this.setState({
            showModalConfirm: true
        });
    }

    closeModalConfirm() {
        this.setState({
            showModalConfirm: false
        });
    }

    leaveForm() {
        this.closeModalConfirm();
        this.props.history.goBack();
    }

    render() {


        let showPositionsList = () => {
            let positionsList = this.props.positions,
                options = [];

            if (positionsList.length) {
                options = positionsList.map((value, index) => <option key={index}>{value.name}</option>);
            }
            return options;

        };

        let showLevelsList = () => {
            let levelsList = this.props.levels,
                options = [];

            if (levelsList.length) {
                options = levelsList.map((value, index) => <option key={index}>{value.name}</option>);
            }
            return options;

        };

        return (
            <div className="bcgr">
                <Helmet>Create Interviewer</Helmet>
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <PageTitle pageTitle="Create Interviewer"
                                   showBackBtn={true}
                                   showButton={false}
                                   titleForButton=""
                                   linkForButton=""
                        />
                    </div>
                </div>
                <section>
                    <div className="row sameheight-container">
                        <form className="custom-form" onSubmit={(event) => this.handleSubmitForm(event)}>
                            <div className="col-md-6">

                                <div className="form-group">
                                    <label className="control-label form-label">Name <span
                                        className="required-field">*</span></label>
                                    <input
                                        type="text"
                                        id="interviewer-name"
                                        name="interviewer-name"
                                        placeholder="Input name"
                                        className="form-control boxed"
                                        maxLength="60"
                                        ref="interviewerName"
                                        value={this.state.nameVal}
                                        autoFocus
                                        onChange={(event) => this.handleNameChanges(event)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="control-label form-label">Surname <span
                                        className="required-field">*</span></label>
                                    <input
                                        type="text"
                                        id="interviewer-surname"
                                        name="interviewer-surname"
                                        placeholder="Input surname"
                                        className="form-control boxed"
                                        maxLength="60"
                                        ref="interviewerSurname"
                                        value={this.state.surnameVal}
                                        onChange={(event) => this.handleSurnameChanges(event)}

                                    />
                                </div>

                                <div className="form-group">
                                    <label className="control-label form-label">Email <span
                                        className="required-field">*</span></label>
                                    <input
                                        type="text"
                                        id="interviewer-email"
                                        name="interviewer-email"
                                        placeholder="Input email"
                                        className="form-control boxed"
                                        maxLength="60"
                                        ref="interviewerEmail"
                                        value={this.state.emailVal}
                                        onChange={(event) => this.handleEmailChanges(event)}

                                    />
                                </div>

                                <div className="form-group">
                                    <label>Level <span className="required-field">*</span></label>
                                    <select id="interviewer-level"
                                            className="form-control form-control-sm custom-mode"
                                            ref="interviewerLevel"
                                            value={this.state.levelVal}
                                            onChange={(event) => this.handleLevelChanges(event)}>
                                        <option>Select level</option>
                                        {showLevelsList()}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Position <span className="required-field">*</span></label>
                                    <select id="interviewer-position"
                                            className="form-control form-control-sm custom-mode"
                                            ref="interviewerPosition"
                                            value={this.state.positionVal}
                                            onChange={(event) => this.handlePositionChanges(event)}>
                                        <option>Select position</option>
                                        {showPositionsList()}
                                    </select>
                                </div>

                                <p className="text-muted">
                                    <small> NOTICE: The User will have password '{PASSWORD_BY_DEFAULT}' by default
                                    </small>
                                </p>

                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label form-label">Descriptions</label>
                                    <p className="form-sublabel">
                                        <small>Maximum 3000 characters</small>
                                    </p>
                                    <TextareaAutosize
                                        id="interviewer-description"
                                        name="interviewer-description"
                                        placeholder="Input interviewer description"
                                        className="form-control boxed"
                                        maxLength="3000"
                                        rows={10}
                                        ref="interviewerDescription"
                                        value={this.state.descriptionVal}
                                        onChange={(event) => this.handleDescriptionChanges(event)}
                                    />
                                </div>

                                <div className="form-group custom-btn-group">
                                    <button
                                        id="create-interviewer-submitBtn"
                                        type="submit"
                                        className="btn btn-primary"
                                    >Add
                                    </button>
                                    <button
                                        id="create-interviewer-resetBtn"
                                        type="reset"
                                        className="btn btn-danger"
                                        onClick={() => this.isFieldsNotEmpty()}
                                    >Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                        <Modal show={this.state.showModalConfirm} onHide={() => this.closeModalConfirm()}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <p>{this.state.confirmText}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="custom-btn-group">
                                    <Button
                                        id="modal-confirm-cancel"
                                        className="btn-primary"
                                        onClick={() => this.leaveForm()}>Yes
                                    </Button>
                                    <Button
                                        id="modal-confirm-back"
                                        className="btn-danger"
                                        onClick={() => this.closeModalConfirm()}
                                    >No
                                    </Button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        positions: state.positions.positions,
        levels: state.levels.levels
    }
}

export default connect(mapStateToProps)(CreateInterviewers);


