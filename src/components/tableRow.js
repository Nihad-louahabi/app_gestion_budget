import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import {  BsTrash} from 'react-icons/bs';
import { TiEdit} from 'react-icons/ti';

class TableRow extends Component{
    constructor(){
        super();
        this.state={
            isDisplay: true
        }
    }

    handleToggle(){
        this.setState({
            isDisplay: !this.state.isDisplay
        });
    }

    handleUpdate(event){
        event.preventDefault(event);
        const newEntry = {
          title: this.ref.title.value,
          montant: Number.parseInt(this.ref.montant.value, 0)
        }
        this.state.expenses.update(this.props.entry.id, newEntry)
        .then(
            response =>{
                const oldNew = {"old": this.props.entry, "new": response.data};
                this.props.handleUpdateRecord(oldNew);
                this.setState({isDisplay: true});
            }
        ).catch(
            error => console.log(error.message)
        )
        
    }

    handleDelete(event){
        event.preventDefault(event);
        Swal.fire({
            title: 'Do you whant to delete it??',
            icon: 'warning',
            iconHtml: '?',
            confirmButtonText: 'yes',
            cancelButtonText: 'no',
            showCancelButton: true,
            showCloseButton: true
          })
          this.state.expenses.remove(this.props.entry.id)
          .then(
              response => {
                  this.props.handleDeleteRecord(this.props.entry);
              }
          ).catch(
              error => console.log(error.message)
          )
      

    }

    RowDisplay(){
        return(
          <tr>
            <td>{this.props.entry.title}</td>
            <td>{this.props.entry.montant}</td>
            <td>
                <button className="btn btn-info mr-1" onClick={this.handleToggle.bind(this)} ><TiEdit/>Edit</button>
                <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}  ><BsTrash/>Delete</button>
            </td>
          </tr>
      );
    }

    RowEdit(){
        return(
            <tr>
              <td><input type="text" className="form-control" defaultValue={this.props.entry.title} ref="title" /></td>
              <td><input type="text" className="form-control" defaultValue={this.props.entry.montant} ref="montant" /></td>
              <td>
                <button className="btn btn-info mr-1" onClick={this.handleUpdate.bind(this)}>Update</button>
                <button className="btn btn-danger" onClick={this.handleToggle.bind(this)}>Cancel</button>
              </td>
            </tr>
      );
    }
    render(){
        return this.state.isDisplay ? this.RowDisplay() : this.RowEdit();
    }
}

export default TableRow;

TableRow.propTypes ={
    entry: PropTypes.object,
    handleUpdateRecord: PropTypes.func,
    handleDeleteRecord: PropTypes.func
}
