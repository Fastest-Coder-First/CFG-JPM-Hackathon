import React from 'react'
import DashItems from "../TempData/DashData";
import HistoryItems from './HistoryItems';


function History() {
  
  return (
    
    <HistoryItems items={DashItems} />
  )
}

export default History