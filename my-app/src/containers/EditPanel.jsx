import React,{ Component } from 'react';
import { List,Image,Button,Segment } from 'semantic-ui-react';
import EditUserForm from '../components/EditUserForm.jsx';
import {Link} from 'react-router-dom';

class EditPanel extends Component {
  constructor(props){
    super(props);
    this.editUser = this.editUser.bind(this);
  }

  editUser(e){
    this.props.editUser(this.props.match.params.id, this.formObject(e.target));
    this.props.history.push('/');
  }
  formObject(form){
    return{
      "general": {
        "firstName": form[0].value,
        "lastName": form[1].value,
        "avatar": form[2].value
      },
      "job": {
        "company": form[3].value,
        "title": form[4].value
      },
      "contact": {
        "email": form[5].value,
        "phone": form[6].value
      },
      "address": {
        "street":form[7].value,
        "city": form[8].value,
        "zipCode": form[9].value,
        "country": form[10].value
      }
    }
  }
  render() {

    return (
      <Segment>
        <EditUserForm onEditUser = {this.editUser}/>
      </Segment>
    );
  }
}

export default EditPanel;