import React from 'react';
import Creators from './Creators';
import List from './List';
import AddAdmin from './AddAdmin';
import FirstMain from './HomePage';
import UpdateAdmin from './UpdateAdmin';
import Quiz from '../Quiz/Quiz';
import { useSelector } from 'react-redux';

const Main = () => {

  const adminDashbord = useSelector((state) => state.navRedu.adminDashbord);
  const showAdminList = useSelector((state) => state.navRedu.showAdminList);
  const showAddAdmin = useSelector((state) => state.navRedu.showAddAdmin);
  // brin state start updating
  const {isUpdating} = useSelector((state) => state.adminRedu);


  const quiz = useSelector((state) => state.navRedu.quiz);

  return (
    <div className='flex flex-col w-[80%] h-screen'>
      <Creators /> 
      {adminDashbord && <FirstMain />}
      {showAdminList && <List />} 
      {showAddAdmin && <AddAdmin />} 
      {/* if updating dispaly update Admin component */}
      {isUpdating && <UpdateAdmin />}
      {quiz && <Quiz />} 
    </div>
  );
}

export default Main;
