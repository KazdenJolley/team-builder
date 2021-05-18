import './App.css';
import React, { useState } from 'react';

import TeamList from './components/TeamList';
import Form from './components/Form';

const initialList = [
  {name: 'John Smith', email: 'john@fake.com', role: 'Project Manager'},
  {name: 'Richard Wilson', email: 'richard@fake.com', role: 'Frontend Engineer'},
  {name: 'Michael Texeira', email: 'michael@fake.com', role: 'Backend Engineer'},
  {name: 'Jonathan Gutierez', email: 'jonathan@fake.com', role: 'Architect'},
]

const initialValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamList, setTeamList] = useState(initialList);
  const [formValues, setFormValues] = useState(initialValues);

  function updateForm(name, value){
    setFormValues({...formValues, [name]: value});
  }

  function submitForm(){
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(newPerson.name && newPerson.email && newPerson.role){
      setTeamList([...teamList, newPerson]);
    }
    else{
      console.log('Please Fill out all form fields!');
    }
    setFormValues(initialValues);
  }

  

  return (
    <div className="container">
      <Form update={updateForm} submit={submitForm} values={formValues}/>
      <TeamList list={teamList} />
    </div>
  );
}

export default App;
