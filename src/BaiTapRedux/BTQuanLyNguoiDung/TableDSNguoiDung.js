import React, { Component } from "react";
import {connect} from 'react-redux';

class TableDSNguoiDung extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          Danh sách người dùng
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Mật khẩu</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Mã loại người dùng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.mangNguoiDung.map((nguoiDung,index)=>{
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.email}</td>
                  <td>{nguoiDung.soDienThoai}</td>
                  <td>{nguoiDung.maLoaiNguoiDung}</td>
                  <td>
                    <button className="btn btn-outline-danger mr-2" onClick={()=>{
                      const action = {
                        type: 'XOA_NGUOI_DUNG',
                        taiKhoan:nguoiDung.taiKhoan
                      }
                      this.props.dispatch(action);
                    }}>Xóa</button>
                    <button className="btn btn-outline-primary">Chỉnh sửa</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.BTQLReducer.mangNguoiDung
  }
}


export default connect (mapStateToProps) (TableDSNguoiDung)


// import React, { Component } from "react";
// import { connect } from "react-redux";

// class TableDSNguoiDung extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-header bg-dark text-white">
//           Danh sách người dùng
//         </div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Tài khoản</th>
//               <th>Họ tên</th>
//               <th>Mật khẩu</th>
//               <th>Email</th>
//               <th>Số điện thoại</th>
//               <th>Mã loại người dùng</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.mangNguoiDung.map((nguoiDung, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{nguoiDung.taiKhoan}</td>
//                   <td>{nguoiDung.hoTen}</td>
//                   <td>{nguoiDung.matKhau}</td>
//                   <td>{nguoiDung.email}</td>
//                   <td>{nguoiDung.soDienThoai}</td>
//                   <td>{nguoiDung.maLoaiNguoiDung}</td>
//                   <td>
//                     <button
//                       className="btn btn-outline-danger mr-2"
//                       onClick={() => {
//                         const action = {
//                           type: "XOA NGUOI DUNG",
//                           taiKhoan: nguoiDung.taiKhoan,
//                         };
//                         this.props.dispatch(action);
//                       }}
//                     >
//                       Xóa
//                     </button>
//                     <button
//                       className="btn btn-outline-primary"
//                       onClick={() => {
//                         const action = {
//                           type: "CHINH_SUA",
//                           nguoiDungChinhSua: nguoiDung,
//                         };
//                         this.props.dispatch(action);
//                       }}
//                     >
//                       Chỉnh sửa
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// /**
//  * {return <=> ()
//  */

// const mapStateToProps = (state) => ({
//   mangNguoiDung: state.BTQLReducer.mangNguoiDung,
// });

// export default connect(mapStateToProps)(TableDSNguoiDung);
