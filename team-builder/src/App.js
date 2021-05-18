import './App.css';
import React, { useState } from 'react';
import TeamList from './components/TeamList';

const initialList = [
  {firstName: 'John', lastName: 'Smith', height: '61', weight: '185'},
  {firstName: 'Richard', lastName: 'Wilson', height: '63', weight: '181'},
  {firstName: 'Michael', lastName: 'Texeira', height: '59', weight: '178'},
  {firstName: 'Jonathan', lastName: 'Gutierez', height: '61', weight: '190'},
]
// const initialValues = {
//   firstName: '',
//   lastName: '',
//   height: '',
//   weight: '',
// }

function App() {
  const [teamList, setTeamList] = useState(initialList);



  return (
    <div className="container">
      <TeamList list={teamList} />
    </div>
  );
}

export default App;
