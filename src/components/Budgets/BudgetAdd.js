import React from 'react';
import {MDBBtn, MDBCheckbox, MDBCol, MDBInput, MDBRow} from "mdb-react-ui-kit";
import "./BudgetAdd.css"
import {MDBCardText} from "mdbreact";
import {IoCloseOutline} from "react-icons/io5";
import {Input, Select} from "@chakra-ui/react";
import {MdOutlineAttachMoney} from "react-icons/md";
import {FaRegCalendarAlt} from "react-icons/fa";
import {BsWallet} from "react-icons/bs";

const BudgetAdd = () => {
    return (
        <div className="form-body">
            <form>
                <h4 className="title">Add Budget</h4>
                <div className="flex-container">
                    {/* Phần bên trái */}
                    <div className="left-container">
                        <MDBRow className="mb-4 add-money">
                            <MDBCol sm="1">
                                <MdOutlineAttachMoney />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput id="form6Example1" sm="11" name="amount" value="" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                            <Select name="category_type" className="form-select" aria-label="Default select example" value="">
                                <option value="all">---Select category---</option>
                                <option value="INCOME">INCOME</option>
                                <option value="EXPENSE">EXPENSE</option>
                                <option value="DEBT">DEBT</option>
                                <option value="LOAN">LOAN</option>
                            </Select>
                        </MDBRow>
                    </div>
                    {/* Phần bên phải */}
                    <div className="right-container">
                        <MDBRow>
                            <MDBCol className="mb-4" sm="2" style={{ fontSize: '30px' }}>
                                <FaRegCalendarAlt />
                            </MDBCol>
                            <MDBCol sm="10">
                                <Input required type={'date'} name="transactionDate" value="" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="mb-4" sm="2" style={{ fontSize: '30px' }}>
                                <BsWallet />
                            </MDBCol>
                            <MDBCol sm="10">
                                <div className="relative">
                                    <Select name="wallet_id" className="form-select" aria-label="Default select example">
                                        <option>Select wallet</option>
                                    </Select>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
                <MDBBtn className="mb-4" type="submit" block>
                    Save
                </MDBBtn>
            </form>
        </div>
    );
};

export default BudgetAdd;