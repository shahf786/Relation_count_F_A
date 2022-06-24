import React from 'react'

function Table() {
    let RelationDate =new Date('August 23 2019');
    // let RelationDate =new Date('june 23 2019');
    let currentDate = new Date();
    let runningDate = new Date();
    runningDate.setDate(23);
    let months_date =[]
    let flag =0;

    for(var i =RelationDate.getFullYear();i<=currentDate.getFullYear();i++)
    {
        runningDate.setFullYear(i);
        if(flag ===0)
        {
        for(var j=RelationDate.getMonth();j<=12;j++)
        {
            runningDate.setMonth(j);
            months_date.push(runningDate.toDateString());
        }
        flag--;
        }
        else{

            if(runningDate.getFullYear(i) !== currentDate.getFullYear())
            {
                for(j=1;j<=12;j++)
                {
                    runningDate.setMonth(j);
                    months_date.push(runningDate.toDateString());
                } 
            }
            else
            {
                for(j=1;j<=currentDate.getMonth();j++)
                {
                    runningDate.setMonth(j);
                    months_date.push(runningDate.toDateString());
                    if(runningDate.getMonth() === currentDate.getMonth())
                    {
                        months_date.pop();
                        if(currentDate.getDate() >= RelationDate.getDate()){
                            months_date.push(currentDate.toDateString());
                        }
                    }
            
                }    
            }
            }
            
        }
    
    var count=0;
   const  table_print = months_date.map(item =>{
    count++;
    if(item.includes("Aug 23")===true){
     var addheart =  <i className="fas fa-heart m-2"></i>;    
    }
    else{
        addheart ="";
    }
    return(
            <tr>
                <td>{count}</td>
                <td>{item} {addheart} </td>
            </tr>
    )
   }) 
  return (
    <div id='tableDate'>
        <table className="table">
  <thead className="" style={{color: ""}}>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">First</th>
    </tr>
  </thead>
  <tbody>
    {table_print}
    </tbody>
    </table>
    </div>
  )
}

export default Table
