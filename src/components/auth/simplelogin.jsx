import React from 'react'

const simplelogin = () => {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="flexbox-container">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="col-md-4 col-10 box-shadow-2 p-0">
                                <div className="card border-grey border-lighten-3 m-0">
                                    <div className="card-header border-0">
                                        <div className="card-title text-center">
                                            <div className="p-1">
                                                <img src="../../../app-assets/images/logo/logo-dark.png" alt="branding logo" />
                                            </div>
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                            <span>Login with Farmers Spot</span>
                                        </h6>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <form className="form-horizontal form-simple" action="index.html" noValidate>
                                                <fieldset className="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" className="form-control form-control-lg input-lg" id="user-name" placeholder="Your Username" required />
                                                    <div className="form-control-position">
                                                        <i className="ft-user" />
                                                    </div>
                                                </fieldset>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="password" className="form-control form-control-lg input-lg" id="user-password" placeholder="Enter Password" required />
                                                    <div className="form-control-position">
                                                        <i className="la la-key" />
                                                    </div>
                                                </fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-6 col-12 text-center text-md-left">
                                                        <fieldset>
                                                            <input type="checkbox" id="remember-me" className="chk-remember" />
                                                            <label htmlFor="remember-me"> Remember Me</label>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-md-6 col-12 text-center text-md-right"><a href="recover-password.html" className="card-link">Forgot Password?</a></div>
                                                </div>
                                                <button type="submit" className="btn btn-info btn-lg btn-block"><i className="ft-unlock" /> Login</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className>
                                            <p className="float-sm-left text-center m-0"><a href="recover-password.html" className="card-link">Recover password</a></p>
                                            <p className="float-sm-right text-center m-0">New to Farmers Admin? <a href="register-simple.html" className="card-link">Sign Up</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default simplelogin