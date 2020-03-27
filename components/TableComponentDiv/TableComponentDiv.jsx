import React from 'react';
import './TableComponentDiv.css';

function TableComponentDiv() {
    return (
        <>
        
            <form id="form1">
                <p>Non Semantic Table</p>
                <div class="divTable">
                    <div class="headRow">
                        <div class="divCell">ID</div>
                        <div  class="divCell">Name</div>
                        <div  class="divCell">Address</div>
                    </div>
                    <div class="divRow">
                        <div class="divCell">001</div>
                        <div class="divCell">002</div>
                        <div class="divCell">003</div>
                    </div>
                    <div class="divRow">
                        <div class="divCell">xxx</div>
                        <div class="divCell">yyy</div>
                        <div class="divCell">www</div>
                </div>
                <div class="divRow">
                    <div class="divCell">ttt</div>
                    <div class="divCell">uuu</div>
                    <div class="divCell">Mkkk</div>
                </div>
            </div>
         </form>
        </>
    )
}

export default TableComponentDiv;