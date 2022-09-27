import React, { useState, useEffect } from 'react'
import axios from "axios";
import api from "../../utils/api"
// import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

// campaign_name campagin_type, click_count,  click_percent
const columns = [
  { key: 'id', name: 'id' },
  { key: 'campaign_name', name: 'campaign_name' },
  { key: 'campagin_type', name: 'campagin_type' },
  { key: 'click_count', name: 'click_count' },
  { key: 'click_percent', name: 'click_percent' }
];

const rows = [
  { id: 0, campaign_name: '에스 플라워 브랜드', campagin_type : "브랜드 검색", click_count: 1020 , click_percent: 12},
  { id: 1, campaign_name: '에스 플라워 플레이스', campagin_type : "플레이스", click_count: 5010 , click_percent: 17},
];

function NaverAddDashBoard() {
  return <DataGrid columns={columns} rows={rows} />;
}

type Props = {}

function NaverAddAdminContainer({ }: Props) {
  useEffect(() => {
    // get_data_for_naver_add();
  }, [])
  // const get_data_for_naver_add = () => {
  //   // try {
  //   //   const response = await axios.post(`${api.naver_add}/customer-links`, {}, );
  //   //   console.log("response.data.data : ", response.data.data);
  //   // } catch (error) {
  //   //   console.log("error : ", error);
  //   }

  return (
    <div>
      <h2>
        네이버 광고 api 호출 해보기 12
      </h2>
      <div style={{display:"flex", justifyContent:"center", border:"1px solid "}}>
        <div>방문자: 374</div>
        <div>페이지뷰 : 1823</div>
        <div>광고 클릭수 : 31</div>
        <div>30회 이상 클릭한 IP : 0</div>
      </div>

      <br /><br />
      <NaverAddDashBoard />

    </div>
  )
}

export default NaverAddAdminContainer