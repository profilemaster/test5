import React from "react";
import {
  Grid,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";
import { catagories } from "../../constants/data";
import { Link, useSearchParams } from "react-router-dom";

const StyledTableCell = styled(TableCell)`

  display: flex;
  align-items: center;

  &:hover {
    background: #e8e8e8;
    color: crimson;
    // font-weight: 850;
    // letter-spacing: 0.05em;
    // border: 2px solid #00df9a;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  padding: 0px 0px;
`;

function Sidebar() {
  const divStyle1 = {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    padding: "5px",
    margin: "1px",
  };

  const divStyle2 = {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    padding: "5px",
    margin: "1px",
  };

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Grid container style={{height:"84vh",widows:'100%'}}>
        <div style={divStyle1} className="outer-div">
          <div style={divStyle2} className="inner-div">
            {/* <Link
              to={`/create?category=${category || ""}`}
              style={{ textDecoration: "none" }}
            >
              <StyledButton variant="contained" color="primary">
                New Project
              </StyledButton>
            </Link> */}

              <TableBody 
            //   style={{backgroundColor:"black" , color:"white"}} 
              >
                {catagories.map((category) => (
                  <TableRow key={category.id}>
                    <StyledLink to={`/${category.path}`}>
                      <StyledTableCell>{category.type}</StyledTableCell>
                    </StyledLink>
                  </TableRow>
                ))}
              </TableBody>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Sidebar;
