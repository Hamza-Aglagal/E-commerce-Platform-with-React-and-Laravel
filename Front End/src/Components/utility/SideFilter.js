import React from 'react'

const SideFilter = () => {
    return (
        <div className='d-flex flex-column SideFilter'>
            <h4> الفئة  </h4>
            <div> <input type="checkbox" id='All' /> <label for="All">  الكل </label>  </div>
            <div> <input type="checkbox" id='All2' /> <label for="All">  الكل </label> </div>
            <div> <input type="checkbox" id='All3' /> <label for="All">  الكل </label> </div>
            <div> <input type="checkbox" id='All4' /> <label for="All">  الكل </label> </div>
            <div> <input type="checkbox" id='All5' /> <label for="All">  الكل </label> </div>
            <div> <input type="checkbox" id='All6' /> <label for="All">  الكل </label> </div>
            <div> <input type="checkbox" id='All7' /> <label for="All">  الكل </label> </div>

            <h4> الماركة  </h4>
            <div> <input type="checkbox" id='All7' /> <label for="All">  الكل </label> </div>
            <div> <input type="checkbox" id='All7' /> <label for="All">  الكل </label> </div>
            <div> <input type="checkbox" id='All7' /> <label for="All">  الكل </label> </div>

            <h4> السعر  </h4>
            <div> <label for="All"> من :</label> <input type="number" id='All7' style={{width:'90px', height:'25px'}}     />  </div>
            <div> <label for="All">   إلى : </label> <input type="number" id='All7' style={{width:'90px', height:'25px'}} />  </div>

        </div>
    )
}

export default SideFilter