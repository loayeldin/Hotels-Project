// import React from 'react'
// import './Filter.css'
// function Filter() {
//   return (
//     <div className="filter-cat">
//             <div className="travel-date">
//               <h6>when are you traveling ?</h6>
//               <input type="date" id="myDate" class="form-control"/>
//               <p id="formattedDate"></p>
//             </div>
//             <div className="accordion" id="accordionExample">
//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingOne">
//                   <button
//                     className="accordion-button text-capitalize text-color"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseOne"
//                     aria-expanded="true"
//                     aria-controls="collapseOne"
//                   >
//                     tour type
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseOne"
//                   className="accordion-collapse collapse show"
//                   aria-labelledby="headingOne"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div className="accordion-body">
//                     <div className="form-check mb-2">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="naturalTours"
//                       />
//                       <label
//                         className="form-check-label text-capitalize text-color"
//                         for="naturalTours"
//                       >
//                         natural Tours
//                       </label>
//                     </div>
//                     <div className="form-check mb-2">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="adventureTours"
//                       />
//                       <label
//                         className="form-check-label text-capitalize text-color"
//                         for="adventureTours"
//                       >
//                         adventure Tours
//                       </label>
//                     </div>
//                     <div className="form-check mb-2">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="culturalTours"
//                       />
//                       <label
//                         className="form-check-label text-capitalize text-color"
//                         for="culturalTours"
//                       >
//                         cultural Tours
//                       </label>
//                     </div>
//                     <div className="form-check mb-2">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="foodTours"
//                       />
//                       <label
//                         className="form-check-label text-capitalize text-color"
//                         for="foodTours"
//                       >
//                         food Tours
//                       </label>
//                     </div>
//                     <div className="form-check mb-2">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="cityTours"
//                       />
//                       <label
//                         className="form-check-label text-capitalize text-color"
//                         for="cityTours"
//                       >
//                         city Tours
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingTwo">
//                   <button
//                     className="accordion-button collapsed text-capitalize text-color"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseTwo"
//                     aria-expanded="false"
//                     aria-controls="collapseTwo"
//                   >
//                     filter price
//                   </button>
//                 </h2>
//                 <div
//                   id="collapseTwo"
//                   className="accordion-collapse collapse"
//                   aria-labelledby="headingTwo"
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div className="accordion-body">
//                     {/* <div className="slider-wrapper">
//                                       <output id="slider-value" className="slider-tooltip"></output>
//                                       <input id="slider-range" className="slider" max="100000" min="0" type="range" value="25">
//                       </div> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingThree">
//                 <button
//                   className="accordion-button collapsed text-capitalize text-color"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseThree"
//                   aria-expanded="false"
//                   aria-controls="collapseThree"
//                 >
//                   duration
//                 </button>
//               </h2>
//               <div
//                 id="collapseThree"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingThree"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
                  
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value="saturday"
//                       id="saturday"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="saturday"
//                     >
//                     saturday
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value="saturday"
//                       id="sunday"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="sunday"
//                     >
//                     sunday
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="monday"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="culturalTours"
//                     >
//                     monday
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="tuesday"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="tuesday"
//                     >
//                     tuesday
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="friday"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="friday"
//                     >
//                     friday
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingFour">
//                 <button
//                   className="accordion-button collapsed text-capitalize text-color"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseFour"
//                   aria-expanded="false"
//                   aria-controls="collapseFour"
//                 >
//                   language
//                 </button>
//               </h2>
//               <div
//                 id="collapseFour"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingFour"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="english"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="english"
//                     >
//                       en
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="arabic"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="arabic"
//                     >
//                       ar
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingFive">
//                 <button
//                   className="accordion-button collapsed text-capitalize text-color"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseFive"
//                   aria-expanded="false"
//                   aria-controls="collapseFive"
//                 >
//                   rating
//                 </button>
//               </h2>
//               <div
//                 id="collapseFive"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingFive"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value="1"
//                       id="one"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="one"
//                     >
//                       1
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value="2"
//                       id="two"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="two"
//                     >
//                       2
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value="3"
//                       id="three"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="three"
//                     >
//                       3
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value="4"
//                       id="four"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="four"
//                     >
//                       4
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value="5"
//                       id="five"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="five"
//                     >
//                       5
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingSix">
//                 <button
//                   className="accordion-button collapsed text-capitalize text-color"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseSix"
//                   aria-expanded="false"
//                   aria-controls="collapseSix"
//                 >
//                   specials
//                 </button>
//               </h2>
//               <div
//                 id="collapseSix"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingSix"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="naturalTours"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="naturalTours"
//                     >
//                       natural Tours
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="adventureTours"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="adventureTours"
//                     >
//                       adventure Tours
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="culturalTours"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="culturalTours"
//                     >
//                       cultural Tours
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="foodTours"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="foodTours"
//                     >
//                       food Tours
//                     </label>
//                   </div>
//                   <div className="form-check mb-2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="cityTours"
//                     />
//                     <label
//                       className="form-check-label text-capitalize text-color"
//                       for="cityTours"
//                     >
//                       city Tours
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//   )
// }

// export default Filter







import React from "react";
import { Accordion, Form, InputGroup } from "react-bootstrap";
import './Filter.css'

function Filter() {
  return (
    <div className="filter-cat">
      {/* Date Input */}
      <div className="travel-date mb-3" >
        <h6>When are you traveling?</h6>
        <InputGroup>
          <Form.Control type="date" id="myDate" />
        </InputGroup>
      </div>

      {/* Accordion */}
      <Accordion defaultActiveKey="0">
        {/* Tour Type */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Tour Type</Accordion.Header>
          <Accordion.Body>
            <Form.Check 
            type="checkbox"
             id="naturalTours" 
            label="Natural Tours"
            className="custom-checkbox" 
             />
            <Form.Check className="custom-checkbox" type="checkbox" id="adventureTours" label="Adventure Tours" />
            <Form.Check className="custom-checkbox" type="checkbox" id="culturalTours" label="Cultural Tours" />
            <Form.Check className="custom-checkbox" type="checkbox" id="foodTours" label="Food Tours" />
            <Form.Check className="custom-checkbox" type="checkbox" id="cityTours" label="City Tours" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Filter Price */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Filter Price</Accordion.Header>
          <Accordion.Body>
            {/* Range Slider */}
            <Form.Range min="0" max="100000" defaultValue="25" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Duration */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Duration</Accordion.Header>
          <Accordion.Body>
            <Form.Check className="custom-checkbox" type="checkbox" id="saturday" label="Saturday" />
            <Form.Check className="custom-checkbox" type="checkbox" id="sunday" label="Sunday" />
            <Form.Check className="custom-checkbox" type="checkbox" id="monday" label="Monday" />
            <Form.Check className="custom-checkbox" type="checkbox" id="tuesday" label="Tuesday" />
            <Form.Check className="custom-checkbox" type="checkbox" id="friday" label="Friday" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Language */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Language</Accordion.Header>
          <Accordion.Body>
            <Form.Check className="custom-checkbox" type="checkbox" id="english" label="EN" />
            <Form.Check className="custom-checkbox" type="checkbox" id="arabic" label="AR" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Rating */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Rating</Accordion.Header>
          <Accordion.Body>
            <Form.Check className="custom-checkbox" type="checkbox" id="one" label="1" />
            <Form.Check className="custom-checkbox" type="checkbox" id="two" label="2" />
            <Form.Check className="custom-checkbox" type="checkbox" id="three" label="3" />
            <Form.Check className="custom-checkbox" type="checkbox" id="four" label="4" />
            <Form.Check className="custom-checkbox" type="checkbox" id="five" label="5" />
          </Accordion.Body>
        </Accordion.Item>

        {/* Specials */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>Specials</Accordion.Header>
          <Accordion.Body>
            <Form.Check className="custom-checkbox" type="checkbox" id="naturalTours" label="Natural Tours" />
            <Form.Check className="custom-checkbox" type="checkbox" id="adventureTours" label="Adventure Tours" />
            <Form.Check className="custom-checkbox" type="checkbox" id="culturalTours" label="Cultural Tours" />
            <Form.Check className="custom-checkbox" type="checkbox" id="foodTours" label="Food Tours" />
            <Form.Check className="custom-checkbox" type="checkbox" id="cityTours" label="City Tours" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Filter;
