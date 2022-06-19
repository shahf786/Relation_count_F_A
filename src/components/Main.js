import React,{useState} from 'react';

function Main() {
   let RelationDate =new Date('August 23 2019');
   // RelationDate.setFullYear(2019,7,23);

   let FutureDate =new Date();
   FutureDate.setDate(23);
  
   let currentDate = new Date();
   let Remainindays = Math.abs(currentDate.getDate()-FutureDate.getDate());
   const [Days, setDay] = useState(Remainindays);


   let Relation_up_now_sec = RelationDate.getTime() - currentDate.getTime();
   Relation_up_now_sec = Math.abs(Relation_up_now_sec);
   let TotalDays = Math.ceil( Relation_up_now_sec / (1000 * 3600 * 24));
   const [daysuptonow, setdaysuptonow] = useState(TotalDays);

   const [R_time_diff, setR_time_diff] = useState(Relation_up_now_sec /1000);
   const sec_time =()=>{
      Relation_up_now_sec = RelationDate.getTime() - currentDate.getTime();
      Relation_up_now_sec = (Math.abs(Relation_up_now_sec))/1000;
      Relation_up_now_sec = parseInt(Relation_up_now_sec);
     setR_time_diff(Relation_up_now_sec);
   }
   setInterval(sec_time,2000);

   let FutureDate_2 = new Date('August 23 '+currentDate.getFullYear());
   // console.log(FutureDate_2);
   var x = FutureDate_2.getTime()-currentDate.getTime();
   let TotalDays_2 = Math.ceil( x / (1000 * 3600 * 24));
   TotalDays_2 = parseInt(TotalDays_2);
   const [totRelDays, settotRelDays] = useState(TotalDays_2);
  return (
    <div id='main' >
       <div className="row">

        <div className="col m-2 p-0" id='heading1'>
           <center> <h1>RelationShip Date : <h3>23/07/2019 
            <h2>{RelationDate.toDateString()}</h2>
            {daysuptonow} Days
            <br />
            {R_time_diff} Sec
            </h3></h1></center>
        </div>

        <div className="w-100"></div>

        <div className="col mt-3" id='coutingDays'>
           <center><h1 className='p-3'>{Days} Days <br /> <i className="fas fa-heart"></i> <h2>{FutureDate.toDateString()}</h2></h1></center>  
        </div>

        <div className="w-100"></div>

        <div className="col mt-3" id='coutingDays'>
           <center><h1 className='p-3'>{totRelDays} Days <br /> <i className="fas fa-heart"></i> <h2>{FutureDate_2.toDateString()}</h2></h1></center>  
        </div>

       </div>
    </div>
  )
}

export default Main