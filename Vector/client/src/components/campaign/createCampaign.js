import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter,form } from 'mdbreact';

class CreateCampaign extends React.Component
 {
  
render() {
    return(
      <div>
      
       
        <div class="container">
        <h5 align="center">Create Campaign</h5>
         <div class="card card-login my-2">
          <div class="card-body">
        
        <div class="row">
        <div class="col-sm-4 col-lg-3 col-lg-1 mx-left">
             <div>
                <input type="textbox" id="clientCampID"  placeholder="Client Campaign ID" required autofocus></input>
              </div>
              &nbsp;&nbsp;&nbsp;
              
              <div>
              <label >Job level</label>
              <select  id="jobLevel" >
               <option value ="a">a</option>
               <option value="b">b</option>
              <option value="c">c</option>
             </select>
             </div>

              
          


              

              </div>

             <div class="col-sm-4 col-lg-3 col-lg-1 mx-left">

             <div>
                <input type="textbox" id="publisherCampID" placeholder="Publisher Campaign Id" required></input>
              </div>
              &nbsp;&nbsp;&nbsp;

            <div>
              <label>Job Function</label>
               <input type="checkbox"></input>
              </div>
              </div>
              
              

              <div class="col-sm-4 col-lg-3 col-lg-1 mx-left">



              <div>
                <input type="textbox" id="campaignName"  placeholder="Campaign Name" required></input>
              </div>
              &nbsp;&nbsp;&nbsp;
              
            <div>
              <input type="textbox" id="industry" placeholder="Industry" required></input>
              <input type="file"></input>
            </div>


            
             </div>

               
               <div class="col-sm-4 col-lg-3 col-lg-1 mx-left">
           
              <div>
                <input type="textbox" id="companyName"  placeholder="Company Name" required></input>
              </div>
              &nbsp;&nbsp;&nbsp;<br></br>


              <div>
              <label>Campaign Status</label>
              <select  id="campaignStatus" >
               <option value selected="active">Active</option>
               <option value="pending">Pending</option>
              </select>
             </div>
             </div>
       
             <div class="col-sm-4 col-lg-3 col-lg-1 mx-left">
            
             <div>
              <label>Country</label>
              <select  id="country">
               <option value selected="india">India</option>
               <option value="australia">Australia</option>
               <option value="italy">Italy</option>
              </select>
             </div>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;
             

             
          <div>
                <label>ABM</label>
                <select >
                <option selected value="no">No</option>
                <option value="yes">Yes</option>
               </select>
           </div>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;
           

                <div>
                <label>Start Date</label>
                <input type="date" id="startDate" required></input>
                <br></br>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;


               <div>
                 <label>End Date</label>
                <input type="date" id="endDate"  required></input>
                <br></br>
               </div>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
             </div>

            <div>
                <input type="textbox" id="leadAllocation"  placeholder="Lead Allocation" required></input>
              </div>
              &nbsp;&nbsp;&nbsp;


              <div>
                <input type="textbox" id="createdByCompanyName"  placeholder="Created By Company Name" required></input>
              </div>
              &nbsp;&nbsp;&nbsp;



               <div>
              <label>Campaign Reporting Day</label>
              <select  id="campaignReportingDay" >
               <option value selected="monday">Monday</option>
               <option value="tuesday">Tuesday</option>
               <option value="wednesday">Wednesday</option>
               <option value="thursday">Thursday</option>
               <option value="friday">Friday</option>
              
              </select>
              </div>
              
              <div>
              <label>Marketing Channel</label>
              <select  id="marketingChannel" >
               <option value="tele">Tele</option>
               <option value="email">Email</option>
               <option value="hybrid">Hybrid</option>
               
              
              </select>
              </div>




              <div>
              <label>Lead Delivery Option</label>
              <select  id="leadDeliveryOption">
               <option value selected="excel">Excel</option>
               <option value="csv">CSV</option>
              </select>
              </div>

              <div>
              <label>Pacing</label>
              <select  id="pacing" class="form-control">
               <option value ="monthly">Monthly</option>
               <option value="quaterly">Quaterly</option>
               <option value="weekly">Weekly</option>
              </select>
              </div>


              <div>
              <label>Insertion Order</label>
              <select  id="leadDeliveryOption">
               <option value selected="yes">Yes</option>
               <option value="no">No</option>
              </select>
              </div>

              <div>
                <label>Time Zone</label>
              <select>
	<option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="-12">(GMT-12:00) International Date Line West</option>
	<option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
  <option timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option>          
              
              </select></div>
              
              

              <div>
              <label>Job Title&nbsp;&nbsp;&nbsp;</label>
              <textarea  id="jobTitle"/>
              </div>
              <br></br>

              
              
              



              <div>
              <label>Other Spec &nbsp;&nbsp;&nbsp;</label>
              <textarea  id="otherSpec"/>
              </div>
              <br></br>
             

            <div>
            <button class="btn btn-sm btn-primary btn-block text-uppercase" type="submit" >Save And Next</button>
              </div>
             <div>
              

               </div> 





           </div>
          
          </div>
          </div>
          </div>
          
</div>



);
  }
}

export default CreateCampaign;