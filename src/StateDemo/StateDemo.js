import React, { Component } from "react";

export default class StateDemo extends Component {

  /**
   *    Thuộc tính State
   * 
   *    + là thuộc tính có sẵn của react class component, dùng để chứa giá trị thay đổi 
   *    trên giao diện khi người dùng thao tác ( click, keyup, keydown, blur...)
   */

  state = {
    isLogin : false
  }

  
  username = "Nhiên";


  renderLogin = () => {
    if (this.state.isLogin) {
      <span className="font-weight-bold text-white">Hello {this.username}</span>
    }
    return <button className="btn btn-outline-success" onClick={()=>{
      this.handleLogin()}}>Đăng nhập</button>
  }

  handleLogin = () => {
  
    // this.state.isLogin = true; Không được gán giá trị state trực tiếp mà phải thông qua phương thức setState
    /**
     *     this.setState(newState): 
     *        + Phương thức này do react class component cung cấp. Dùng để thay đổi giá trị state
     *        + setState được gọi thì giao diện sẽ được render lại (hàm render sẽ chạy lại)
     */

    let newState = {
      isLogin: true
    }
    //Thay đổi giá trị state và render lại giao diện
    this.setState(newState);
    console.log (this.state.isLogin);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                {/* {this.isLogin ? <span className="font-weight-bold text-white">Hello {this.username}</span> : <button className
                ="btn btn-outline-success">Đăng nhập</button>} */}
                {this.renderLogin()};
            </form>
          </div>
        </nav>
      </div>
    );
  } 
}
