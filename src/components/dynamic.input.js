import { MdClose } from 'react-icons/md';

const DynamicInputs = ({setInputList,inputList}) => {

   
   
 
    // handle input change
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
   
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);


    };
   
    // handle click event of the Add button
    const handleAddClick = (e) => {
      setInputList([...inputList, {
                                        make: "",
                                        motorNumber: "",
                                        plateNumber: "",
                                        yearModel: "",
                                        routeFrom: "",
                                        routeTo: ""
                                }]);

     e.preventDefault();
    };
    
    return (
        <div>
             {inputList.map((x, i) => {
                    return (
                        <div key={i}>
                    <div className="input-box" >

                        <div className="input-field-group">
                            <label htmlFor="make" className="input-label">Make</label>
                            <input 
                            type="text"
                            name="make"  
                            className="input" 
                            value={x.make}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="company name or operator" />
                        </div>

                        <div className="input-field-group">
                            <label htmlFor="motorNumber" className="input-label">Motor No.</label>
                            <input 
                            type="text"
                            name="motorNumber"  
                            className="input" 
                            value={x.motorNumber}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="company name or operator" />
                        </div>


                        <div className="input-field-group">
                            <label htmlFor="plateNumber" className="input-label">Plate No.</label>
                            <input 
                            type="text"
                            name="plateNumber"  
                            className="input" 
                            value={x.plateNumber}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="company name or operator" />
                        </div>


                        <div className="input-field-group">
                            <label htmlFor="yearModel" className="input-label">Year Model</label>
                            <input 
                            type="text"
                            name="yearModel"  
                            className="input" 
                            value={x.yearModel}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="company name or operator" />
                        </div>


                        <div className="input-field-group">
                            <label htmlFor="routeFrom" className="input-label">Route From</label>
                            <input 
                            type="text"
                            name="routeFrom"  
                            className="input" 
                            value={x.routeFrom}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="company name or operator" />
                        </div>



                        <div className="input-field-group">
                            <label htmlFor="routeTo" className="input-label">Route To</label>
                            <input 
                            type="text"
                            name="routeTo"  
                            className="input" 
                            value={x.routeTo}
                            onChange={e => handleInputChange(e, i)}
                            placeholder="company name or operator" />
                        </div>



                        {inputList.length !== 1 && <button
                        className="removeBtn"
                    onClick={() => handleRemoveClick(i)}><MdClose className="removeBtn-icon"/></button>}

                    </div>
                    {inputList.length - 1 === i && <button className="button button-send" onClick={handleAddClick}>Add Units</button>}
                        </div>
                    );
                    })}
                    {/* <pre>{JSON.stringify(inputList, undefined, 2)}</pre> */}
        </div>
      );
}
 
export default DynamicInputs;