import React from 'react';
import Creators from './Creators';
import List from './List';
import AddAdmin from './AddAdmin';
import FirstMain from './HomePage';
import UpdateAdmin from './UpdateAdmin';
import Quiz from '../Quiz/Quiz';
import { useSelector } from 'react-redux';

const Main = () => {
  // Correcting to match the state slice name 'navRedu'
  const adminDashbord = useSelector((state) => state.navRedu.adminDashbord);
  const showAdminList = useSelector((state) => state.navRedu.showAdminList);
  const showAddAdmin = useSelector((state) => state.navRedu.showAddAdmin);
  const updateAdmin = useSelector((state) => state.navRedu.updateAdmin);
  const quiz = useSelector((state) => state.navRedu.quiz);

  return (
    <div className='flex flex-col w-[80%] h-screen'>
      <Creators /> {/* This is a component that's always shown */}
      {adminDashbord && <FirstMain />} {/* Only show FirstMain if adminDashbord is true */}
      {showAdminList && <List />} 
      {showAddAdmin && <AddAdmin />} {/* Only show AddAdmin if showAddAdmin is true */}
      {updateAdmin && <UpdateAdmin />} {/* Only show UpdateAdmin if updateAdmin is true */}
      {quiz && <Quiz />} {/* Only show Quiz if quiz is true */}
    </div>
  );
}

export default Main;
