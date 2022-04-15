import React, { useState, useEffect, Fragment } from "react";
import styled from 'styled-components';
import {ChevronLeft, ChevronRight, FirstPage, LastPage} from '@material-ui/icons';
import Dropdown from '../dropdown';

const Container = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
padding: 4px 0px;
@media only screen and (max-width: 520px) {
  flex-direction: column;
  align-items: flex-start;
}
`;

const PageItem = styled.div`
  border: #888888 solid 1px;
  border-radius: 6px;
  padding: 2px 6px;
  margin: 2px 4px 2px 0px;
  color: ${props => props.active ? '#FFFFFF' : '#000000'};
  background-color: ${props => props.active ? '#0073A6' : '#FFFFFF'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items:center;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Pagination = (props) => {
   const [showPages, setShowPages] = useState(null);

   useEffect(() => {
      setShowPages(getShowPages(props.totalPages, props.currentPage))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.totalPages, props.currentPage]);

    const getShowPages = (totalPage, currentPage) => {
        let nList = [];
        let start = currentPage;
        let end = totalPage;
        if (currentPage - 2 >= 1) {
          start = currentPage - 2;
        } else if (currentPage - 1 >= 1) {
          start = currentPage - 1;
        }
    
        if (start + 4 <= totalPage) {
          end = start + 4;
        } else {
          end = totalPage;
          for (let i = end - 4; i < start; i++) {
            if (i >= 1) {
              start = i;
              break;
            }
          }
        }
    
        for (let n = start; n <= end; n++) {
          nList.push(n);
        }
    
        return nList;
      }
    
    const setCurrentPage = (num) => {
          if (props.totalPages < 1) {
              return;
          }

          if (num > props.totalPages) {
              num = props.totalPages;
          }

          if (num < 1) { 
              num = 1;
          }
          
          if (props.onPageChanged)
          {
            props.onPageChanged(num);
          }
      }
    
    const gotoPage= (value) => {
      setCurrentPage(Number(value));
    }
    
    const onPageSizeChanged = (value) => {
      if (props.onPageSizeChanged) {
        props.onPageSizeChanged(Number(value));
      }
    }

    const getPageOptions = () => {
      let data = [];
      for (var i = 1; i <= props.totalPages; i++)
      {
        data.push({value: i.toString(), text: i.toString()});
      }
      return data;
    }

    const getPageSizeOptions = () => {
      let data = [];
      for (var i = 0; i < props.pageSizes.length; i++)
      {
        data.push({value: props.pageSizes[i].toString(), text: props.pageSizes[i].toString()});
      }
      return data;
    }

    const getCurrentPageSize = () => {
      for (var i = 0; i < props.pageSizes.length; i++)
      {
        if (props.pageSizes[i] === props.currentPageSize) {
          return i;
        }
      }
      return 0;
    }

    return (
      <Container>
        <div style={{display:'flex', flexWrap:'wrap'}}>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    {(props.totalPages > 5) && (props.currentPage > 3) &&
                      (<Fragment>
                      <PageItem onClick={() => setCurrentPage(1)}><FirstPage style={{width:'18px', height:'18px'}} /></PageItem>
                      <PageItem onClick={() => setCurrentPage(props.currentPage - 1)}><ChevronLeft style={{width:'18px', height:'18px'}} /></PageItem>
                      </Fragment>)
                    }

                    {showPages && showPages.map((number, index) => (
                        <PageItem key={index} active={number === props.currentPage}
                          onClick={() => setCurrentPage(number)}>
                          <div style={{minWidth:'18px', minHeight:'18px', display:'flex', justifyContent:'center', alignItems:'center'}}>{number}</div>
                        </PageItem>
                    ))}

                    {(props.totalPages > 5) && (props.totalPages - props.currentPage) > 2 && (
                        <Fragment>
                      <PageItem onClick={() => setCurrentPage(props.currentPage + 1)}><ChevronRight style={{width:'18px', height:'18px'}} /></PageItem>
                      <PageItem onClick={() => setCurrentPage(props.totalPages)}><LastPage style={{width:'18px', height:'18px'}} /></PageItem>
                      </Fragment>
                      )
                    }
                </div>
        </div>
        <RightContainer>
          <Dropdown style={{width: '50px', marginRight: '6px'}} label="Page" size="small" selected={props.currentPage - 1} options={getPageOptions()} onChanged={gotoPage} />  
          <Dropdown style={{width: '60px'}} label="Page Size" size="small" selected={getCurrentPageSize()} options={getPageSizeOptions()} onChanged={onPageSizeChanged} />
        </RightContainer>
      </Container>
    )
}

export default Pagination;