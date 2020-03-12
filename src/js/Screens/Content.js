import React, { Component } from 'react'

export default class Content extends Component {
    
    render() {
        return (
            <div className='content-menu d-flex justify-content-between align-items-center'>
                <span className='d-flex ml-auto hi ' >
                    <span className='text-danger font-weight-bold'>Create</span>
                    <button type="button" className="circle" data-toggle="modal" data-target="#addQuiz">
                    +
                    </button>
                </span>
  <div class="modal right fade" id="addQuiz">
    <div class="modal-dialog">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h4 class="modal-title">Add Quiz</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <ul>
                <li>
                    <label>Select Class</label>
                </li>
                <li>
                <label>Select date</label>
                </li>
                <li><label>Select Subject</label>
                    </li>
                <li></li>
            </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
            </div>
        )
    }
}

