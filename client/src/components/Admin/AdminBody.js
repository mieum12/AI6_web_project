import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';


export function AdminBody() {
	return(
  <AdminBodyContainer>
    <h2>관리자 페이지 입니다</h2>
		<AdminButtonsGroup>
			<Link to='/'><button className="adminButtons">상품정보 수정</button></Link>
      <Link to='/'><button className="adminButtons">카테고리 수정</button></Link>
		</AdminButtonsGroup>
    <AdminButtonsGroup>
			<Link to='/'><button className="adminButtons">고객 정보수정</button></Link>
      <Link to='/'><button className="adminButtons">블라블라 수정</button></Link>
		</AdminButtonsGroup>
	</AdminBodyContainer>
  )
}

const AdminBodyContainer = styled.div`
  text-align: center;
  margin: 100px;

`

const AdminButtonsGroup = styled.div`
  padding: 20px 10px;
  .adminButtons {
    background-color: white;
    border: 3px solid grey;
    border-radius: 10px;
    padding: 30px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px 10px;
  }
  

`
