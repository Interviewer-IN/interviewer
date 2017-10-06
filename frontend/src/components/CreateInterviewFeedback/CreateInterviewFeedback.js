import React, {Component} from "react";
import Helmet from "react-helmet";
import {Modal, Button} from "react-bootstrap";
import {connect} from "react-redux";
import PageTitle from "./../../containers/PageTitle";
import "./CreateInterviewFeedback.css";
import {fieldCharRegex, fieldSpaceRegex} from "../../config"


class CreateInterviewFeedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            question1: "",
            question2: "",
            question3: "",
            ratingError: "",
            question1Error: "",
            question2Error: "",
            question3Error: "",
            showModalAlert: false,
            showModalConfirm: false,
            showModaLCreateAlert: false,
        };
    }

    componentWillMount() {
        //this.props.onCheckUserRole(true);
        let isUserHR = this.props.onCheckUserRole(true);
        if (isUserHR) {
            this.props.history.push('/interviews-upcoming');
        }
    }

    handleRatingChange(event) {
        this.setState({rating: event.target.value});
        this.setState({ratingError: ""});
    }

    handleQuestion1Change(event) {
        this.setState({question1: event.target.value});
        this.setState({question1Error: ""});

    }

    handleQuestion2Change(event) {
        this.setState({question2: event.target.value});
        this.setState({question2Error: ""});
    }

    handleQuestion3Change(event) {
        this.setState({question3: event.target.value});
        this.setState({question3Error: ""});
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

    validateFormFields(event) {
        event.preventDefault();
        let rating = this.state.rating,
            question1 = this.state.question1,
            question2 = this.state.question2,
            question3 = this.state.question3,
            emptyRating = !rating || rating.match(fieldSpaceRegex),
            emptyQuestion1 = !question1 || question1.match(fieldSpaceRegex),
            emptyQuestion2 = !question2 || question2.match(fieldSpaceRegex),
            emptyQuestion3 = !question3 || question3.match(fieldSpaceRegex),
            wrongCharMessage = "Please, use only latin letters, numbers and special symbols",
            emptyFieldMessage = "Please, fill the field";

        if (emptyRating) {
            event.preventDefault();
            this.setState({
                ratingError: emptyFieldMessage
            });
        }
        if (emptyQuestion1) {
            event.preventDefault();
            this.setState({
                question1Error: emptyFieldMessage
            });
        }
        if (emptyQuestion2) {
            event.preventDefault();
            this.setState({
                question2Error: emptyFieldMessage
            });
        }
        if (emptyQuestion3) {
            event.preventDefault();
            this.setState({
                question3Error: emptyFieldMessage
            });
        }

        if (!fieldCharRegex.test(this.state.rating)) {
            event.preventDefault();
            this.setState({
                question1Error: wrongCharMessage
            });
        }
        if (!fieldCharRegex.test(this.state.question1)) {
            event.preventDefault();
            this.setState({
                question1Error: wrongCharMessage
            });
        }
        if (!fieldCharRegex.test(this.state.question2)) {
            event.preventDefault();
            this.setState({
                question2Error: wrongCharMessage
            });
        }
        if (!fieldCharRegex.test(this.state.question3)) {
            event.preventDefault();
            this.setState({
                question3Error: wrongCharMessage
            });
        }


        if (!emptyQuestion1 &&
            !emptyQuestion2 &&
            !emptyQuestion3 &&
            fieldCharRegex.test(this.state.rating) &&
            fieldCharRegex.test(this.state.question1) &&
            fieldCharRegex.test(this.state.question2) &&
            fieldCharRegex.test(this.state.question3)) {
            event.preventDefault();
            this.props.history.push("/interviews-upcoming");
        }
    }

    leaveForm() {
        this.resetFormFields();
        this.closeModalConfirm();
        this.props.history.push("/interviews-upcoming");
    }

    resetFormFields() {
        this.setState({date: ""});
        this.setState({time: ""});
        this.setState({candidate: ""});
        this.setState({vacancy: ""});
        this.setState({interviewer: ""});
    }

    isFieldsNotEmpty(event) {
        event.preventDefault();
        if (this.state.date ||
            this.state.time ||
            this.state.candidate ||
            this.state.vacancy ||
            this.state.interviewer ) {
            this.setState({
                confirmText: "Are you sure you want to cancel without saving changes?"
            });
            this.openModalConfirm();
        } else {
            this.props.history.push("/interviews-upcoming");
        }
    }


    render() {

        return (
            <div>
                <Helmet>
                    <title>Add Feedback</title>
                </Helmet>
                <div className="row sameheight-container custom-btn-group">
                    <div className="col-md-12">

                        <PageTitle
                            pageTitle='Add Feedback'
                            showBackBtn={true}
                            showButton={false}
                            backBtnId="back-create-interview"
                            titleForButton=''
                            linkForButton=''
                        />

                        <form name="addFeedback" onSubmit={(event) => this.validateFormFields(event)}>

                            <div className="clearfix form-group">
                                <div className="float-left create-interview-select">
                                    <label className="control-label">Rate the candidate</label>
                                    <select className="form-control form-control-sm filter-select"
                                            id="interview-rating"
                                            onChange={(event)=>this.handleRatingChange(event)}
                                    >
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span className="has-error error-message">{this.state.ratingError}</span>
                                </div>
                            </div>

                            <div className="form-group has-error">
                                <label className="control-label form-label">Question 1</label>
                                <p className="form-sublabel back-link">Maximum 60 characters</p>
                                <input
                                    id="interview-question1"
                                    type="text"
                                    name="question1"
                                    placeholder='Input your '
                                    className="form-control boxed"
                                    maxLength="60"
                                    value={this.state.question1}
                                    onChange={(event) => this.handleQuestion1Change(event)}
                                    autoFocus
                                />
                                <span className="has-error error-message">{this.state.question1Error}</span>
                            </div>

                            <div className="form-group form-field-margin">
                                <label className="control-label form-label">Question 2</label>
                                <p className="form-sublabel back-link">Maximum 3000 characters</p>
                                <input
                                    id="interview-question2"
                                    name="question2"
                                    placeholder="Input Description"
                                    className="form-control boxed"
                                    maxLength="3000"
                                    value={this.state.question2}
                                    onChange={(event) => this.handleQuestion2Change(event)}
                                />
                                <span className="has-error error-message">{this.state.question2Error}</span>
                            </div>

                            <div className="form-group form-field-margin">
                                <label className="control-label form-label">Question 3</label>
                                <p className="form-sublabel back-link">Maximum 3000 characters</p>
                                <input
                                    id="interview-question3"
                                    name="question3"
                                    placeholder="Input Description"
                                    className="form-control boxed"
                                    maxLength="3000"
                                    value={this.state.question3}
                                    onChange={(event) => this.handleQuestion3Change(event)}
                                />
                                <span className="has-error error-message">{this.state.question3Error}</span>
                            </div>

                            <div className="form-group">
                                <button
                                    id="create-interview-submitBtn"
                                    type="submit"
                                    className="btn btn-primary"
                                >Create
                                </button>
                                <button
                                    id="create-interview-resetBtn"
                                    className="btn btn-danger"
                                    onClick={(event) => this.isFieldsNotEmpty(event)}
                                >Cancel
                                </button>
                            </div>
                        </form>

                    </div>
                    <Modal className="custom-btn-group"
                           show={this.state.showModalConfirm}
                           onHide={() => this.closeModalConfirm()}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to cancel without saving changes?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                id="modal-confirm-yes"
                                className="btn btn-primary"
                                onClick={() => this.leaveForm()}
                            >Yes
                            </Button>
                            <Button
                                id="modal-confirm-no"
                                className="btn btn-danger"
                                onClick={() => this.closeModalConfirm()} bsStyle="primary"
                            >No
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}

export default connect(mapStateToProps)(CreateInterviewFeedback);