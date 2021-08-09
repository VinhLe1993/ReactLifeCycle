const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyễn Văn A",
      matKhau: "123456789",
      email: "nguyenvana@gmail.com",
      soDienThoai: "09090909",
      loaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      hoTen: "Nguyễn Văn B",
      matKhau: "987654321",
      email: "nguyenvanb@gmail.com",
      soDienThoai: "08080808",
      loaiNguoiDung: "KhachHang",
    },
  ],
};

export const BTQLReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      // state.mangNguoiDung.push(action.nguoiDung)
      return { ...state };
    }

    case "XOA_NGUOI_DUNG": {
      const mangNguoiDungCapNhat = [...state.mangNguoiDung];

      state.mangNguoiDung = mangNguoiDungCapNhat.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
      );
      return {...state};
    }

    default:
      return state;
  }
};

// const stateDefault = {
//   mangNguoiDung: [
//     {
//       taiKhoan: "nguyenvana",
//       hoTen: "Nguyễn Văn A",
//       matKhau: "123456789",
//       email: "nguyenvana@gmail.com",
//       soDienThoai: "0901909009",
//       loaiNguoiDung: "KhachHang",
//     },
//     {
//       taiKhoan: "nguyenvanb",
//       hoTen: "Nguyễn Văn B",
//       matKhau: "987654321",
//       email: "nguyenvanb@gmail.com",
//       soDienThoai: "0808080808",
//       loaiNguoiDung: "KhachHang",
//     },
//   ],
//   nguoiDungChinhSua: {
//     taiKhoan: "nguyenvana",
//     hoTen: "Nguyễn Văn A",
//     matKhau: "123456789",
//     email: "nguyenvana@gmail.com",
//     soDienThoai: "0909090909",
//     maLoaiNguoiDung: "KhachHang",
//   },
//   nguoiDung: {
//     values: {
//       taiKhoan: "",
//       matKhau: "",
//       email: "",
//       hoTen: "",
//       soDienThoai: "",
//       maLoaiNguoiDung: "KhachHang",
//     },
//     errors: {
//       taiKhoan: "",
//       matKhau: "",
//       email: "",
//       hoTen: "",
//       soDienThoai: "",
//       maLoaiNguoiDung: "",
//     },
//   },
// };

// export const BTQLReducer = (state = stateDefault, action) => {
//   switch (action.type) {
//     case "THEM_NGUOI_DUNG": {
//       state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
//       // state.mangNguoiDung.push(action.nguoiDung)
//       return { ...state };
//     }
//     case "XOA_NGUOI_DUNG": {
//       const mangNguoiDungCapNhat = [...state.mangNguoiDung];
//       state.mangNguoiDung = mangNguoiDungCapNhat.filter(
//         (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
//       );
//       return { ...state };
//     }
//     case "CHINH_SUA": {
//       state.nguoiDungChinhSua = action.nguoiDungChinhSua;
//       return { ...state };
//     }
//     case "HANDLE_CHANGE_INPUT": {
//       state.nguoiDung = action.nguoiDung;
//       return { ...state };
//     }
//     case "CAP_NHAT_NGUOI_DUNG": {
//       const mangNguoiDungCapNhat = [...state.mangNguoiDung];
//       //Tìm ra người dùng cần cập nhật
//       let nguoiDungCapNhat = mangNguoiDungCapNhat.find(
//         (nguoiDung) => nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan
//       );
//       if (nguoiDungCapNhat) {
//         nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen;
//         nguoiDungCapNhat.email = action.nguoiDungCapNhat.email;
//         nguoiDungCapNhat.soDienThoai = action.nguoiDungCapNhat.soDienThoai;
//         nguoiDungCapNhat.matKhau = action.nguoiDungCapNhat.matKhau;
//         nguoiDungCapNhat.maLoaiNguoiDung =
//           action.nguoiDungCapNhat.maLoaiNguoiDung;
//       }
//       state.mangNguoiDung = mangNguoiDungCapNhat;
//       return {...state}
//     }
//     default:
//       return state;
//   }
// };
