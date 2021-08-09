import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        let {productDetail} = this.props
        return (
            <div className="row">
                <div className="col-6">
                    <h3>{productDetail.tenSP}</h3>
                    <img src={productDetail.hinhAnh} alt="..." height={350} />
                </div>
                <div className="col-6">
                    <h3>Thông số kĩ thuật</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Màn hình</th>
                                <th>{productDetail.manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <th>{productDetail.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <th>{productDetail.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <th>{productDetail.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <th>{productDetail.ram}</th>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <th>{productDetail.rom}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}
