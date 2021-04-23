import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

// import { loginUser } from "./../../actions/authActions";
import "./Auth.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Gambar2 from "./../../../image/sidoarjo.png";
import Ilus1 from "./../../../image/sidoarjo.png";
import logo from "./../../../image/sidoarjo.png";
import Container from "@material-ui/core/Container";

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email.toLowerCase(),
            password: this.state.password,
        };

        this.props.loginUser(userData);
        // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    static contextTypes = {
        router: PropTypes.object,
    };

    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            //   this.context.router.history.push("/app");
        }
    }
    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="main-containersign">
                    <section className="sidebarsign">
                        <a href="/">
                            <img
                                src={logo}
                                style={{
                                    width: 140,
                                    margin: 10,
                                    height: "auto",
                                    objectFit: "cover",
                                    flexDirection: "column",
                                }}
                                alt="logo sidoarjo digital"
                            ></img>
                        </a>
                        <div className="sidebarsign-content">
                            <Container>
                                <article>
                                    <h2>Sidoarjo Digital</h2>
                                    <p>
                                        Media Informasi dan Komunikasi Masa Kini
                                    </p>
                                </article>
                                <article
                                    style={{
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {/* <img
                                        src={Gambar2}
                                        className="gambar-signb mx-auto"
                                        alt="logo sidoarjo digital"
                                    /> */}
                                </article>
                            </Container>
                        </div>
                    </section>
                    <section className="main-contentsign">
                        <main>
                            <Container>
                                <div className="auth-contentsign">
                                    <Fade left>
                                        {/* <img
                                            src={Ilus1}
                                            className="gambar-signb mx-auto my-3"
                                            alt="logo sidoarjo digital"
                                            style={{width: 100}}
                                        /> */}
                                        <form
                                            className=""
                                            onSubmit={this.onSubmit}
                                        >
                                            <h3 className="form-title text-center my-0 font-weight-bold">
                                                Welcome
                                            </h3>
                                            <p className="text-center">
                                                {/* Selamat Datang */}
                                            </p>
                                            <div className="form-group ">
                                                <label>Username</label>
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.username}
                                                    error={errors.username}
                                                    id="username"
                                                    type="text"
                                                    className={classnames(
                                                        "form-control",
                                                        {
                                                            invalid:
                                                                errors.username,
                                                        }
                                                    )}
                                                    placeholder="Enter Username"
                                                />
                                                <span className="red-text">
                                                    {errors.username}
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input
                                                    id="email"
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                    error={errors.email}
                                                    type="email"
                                                    className={classnames(
                                                        "form-control",
                                                        {
                                                            invalid:
                                                                errors.email ||
                                                                errors.emailnotfound,
                                                        }
                                                    )}
                                                    placeholder="Enter email"
                                                />
                                                <span className="red-text">
                                                    {errors.email}
                                                    {errors.emailnotfound}
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <label>Password</label>
                                                <input
                                                    id="password"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    type="password"
                                                    className={classnames(
                                                        "form-control",
                                                        {
                                                            invalid:
                                                                errors.password ||
                                                                errors.passwordincorrect,
                                                        }
                                                    )}
                                                    placeholder="Enter password"
                                                />
                                                <span className="red-text">
                                                    {errors.password}
                                                    {errors.passwordincorrect}
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Confirmation password
                                                </label>
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.password2}
                                                    error={errors.password2}
                                                    id="password2"
                                                    type="password"
                                                    className={classnames(
                                                        "form-control",
                                                        {
                                                            invalid:
                                                                errors.password2,
                                                        }
                                                    )}
                                                    placeholder="Enter password again"
                                                />
                                                <span className="red-text">
                                                    {errors.password2}
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck1"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block"
                                            >
                                                Submit
                                            </button>

                                            {/* <div  class="g-signin2" data-onsuccess={this.onSignIn}/> */}
                                            <p className="forgot-password text-right">
                                                <a href="/">Lupa password?</a>
                                            </p>
                                            <p className="forgot-password text-right">
                                                Belum punya akun ?
                                                <Link to="/account/login">
                                                    Masuk
                                                </Link>
                                            </p>
                                        </form>
                                    </Fade>
                                </div>
                            </Container>
                        </main>
                    </section>
                </div>
            </div>
        );
    }
}

// SignInAlt.propTypes = {
//     loginUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//     auth: state.auth,
//     errors: state.errors,
// });
// export default connect(mapStateToProps, { loginUser })(SignInAlt);
