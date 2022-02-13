import React, { Component } from "react"
import { connect } from "react-redux"

import * as actions from "../../store/actions"
import Navigator from "../../components/Navigator"
import { adminMenu } from "./menuApp"
import "./Header.scss"
import { LANGUAGES } from "../../utils"
import { FormattedMessage } from "react-intl"

class Header extends Component {
  handleChangeLanguages = (language) => {
    //fire redux event to change language: actions
    this.props.changeLanguages(language)
  }

  render() {
    const { processLogout, language } = this.props

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="languages">
          <span
            className={
              language === LANGUAGES.EN ? "active language-en" : "language-en"
            }
            onClick={() => this.handleChangeLanguages(LANGUAGES.EN)}
          >
            EN
          </span>
          <span
            className={
              language === LANGUAGES.VI ? "active language-vi" : "language-vi"
            }
            onClick={() => this.handleChangeLanguages(LANGUAGES.VI)}
          >
            VN
          </span>
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
        {/* nút logout */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguages: (lang) => dispatch(actions.changeLanguageApp(lang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
