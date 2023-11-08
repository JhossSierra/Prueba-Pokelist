import React from "react";
import EnhancedTable from "../components/Table";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function Home(props) {
  const { tableRows } = props;

  const navigate = useNavigate();

  const handleEditButton = (row) => (e) => {
    e.stopPropagation();
    const {
      html_image,
      html_types,
      html_my_sprite,
      html_my_types,
      html_my_teammates,
      ...params
    } = row;
    // ! NAVIGATE NOT ACCEPT HTML PARAMS
    navigate(`form/${row.name}`, {
      state: { ...params },
    });
  };

  return (
    <div>
      {/* {tableRows.length > 0 ? ( */}
        <EnhancedTable
          rowsProp={tableRows}
          handleEditButton={handleEditButton}
        />
     {/*  ) : (
        
        <Loading/>
      )} */}
    </div>
  );
}
