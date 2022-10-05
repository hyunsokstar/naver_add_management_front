import React, { useEffect, useState, useCallback } from 'react'
import DataGrid from 'react-data-grid';
import styled from "styled-components";
import NaverAddAdminHeader from '../NaverAddAdminHeader';
import axios from "axios";
import { IExcelHeaderType } from "../../types/type";


// NaverAddAdmin

const HeaderContainer = styled.div`
  display: "flex";
  justifyContent: "center";

  border: 2px solid red;
`;

const HeaderDiv = styled.div`
  font-size: 18px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: 2px solid blue;
`;

const Input = styled.input`
  font-size: 18px;
  width: 90%;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const sample_columns = [
  { key: 'clkCnt', name: 'clkCnt' },
  { key: 'cpc', name: 'cpc' },
  { key: 'impCnt', name: 'impCnt' },
  { key: 'dateStart', name: 'dateStart' },
  { key: 'dateEnd', name: 'dateEnd' },
];

// const rows = [
//   { id: 0, campaign_name: '에스 플라워 브랜드', campagin_type: "브랜드 검색", click_count: 1020, click_percent: 12 },
//   { id: 1, campaign_name: '에스 플라워 플레이스', campagin_type: "플레이스", click_count: 5010, click_percent: 17 },
// ];

// function NaverAddDashBoard() {
//   return <DataGrid columns={columns} rows={rows} />;
// }

type Props = {}

function NaverAddAdminContainer({ }: Props) {

  const [columns, setColumn] = useState<Array<IExcelHeaderType>>(sample_columns);
  const [basicRows, setBasicRows] = useState<Array<any>>([
  ]);
  
  useEffect(() => {
    getDataFromNaver()
  }, [])

  const getDataFromNaver = async () => {

    try {
      const response = await axios.get(
        `http://localhost:8080/main/campaigns/info?campaignId=cmp-m001-01-000000005090009`,
        // { withCredentials: true }
      );
      console.log("response from naver api: ", response);

      const rows = response.data.dailyStat.data;
      setBasicRows(rows);
      console.log("rows : ", rows);


    } catch (error) {
      console.log("error : ", error);

    }
  }


  return (
    <div>
      <h2>
        네이버 광고 api 호출 해보기 test 
      </h2>
      {/* <div style={{display:"flex", justifyContent:"center", border:"1px solid "}}>
        <div>방문자: 374</div>
        <div>페이지뷰 : 1823</div>
        <div>광고 클릭수 : 31</div>
        <div>30회 이상 클릭한 IP : 0</div>
      </div> */}

      {/* <NaverAddAdminHeader /> */}

      <br /><br />
      {/* <NaverAddDashBoard /> */}
      <DataGrid columns={columns} rows={basicRows} />
    </div>
  )
}

export default NaverAddAdminContainer