// components/Sidebar.js
import React, { useEffect } from 'react';
import Link from 'next/link';
// import { useDispatch, useSelector } from 'redux'
// import { fetchPromoterProfile } from '../lib/promoterSlice';
import { useState } from 'react';
import { FaUserCircle,FaBars,FaTimes} from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
//   const dispatch = useDispatch();
//   const profile = useSelector((state) => state.promoter.profile);
//   const profileStatus = useSelector((state) => state.promoter.status);
const [isOpen, setIsOpen] = useState(true);

//   useEffect(() => {
//     if (profileStatus === 'idle') {
//       dispatch(fetchPromoterProfile());
//     }
//   }, [profileStatus, dispatch]);

const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
    <div className={styles.toggleBtn} onClick={toggleSidebar}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </div>
      <div className={styles.profileSection}>
        <FaUserCircle className={styles.userIcon} />
        {/* {profile && (
          <div className={styles.profile}>
            <p><strong>{profile.name}</strong></p>
            <p>{profile.email}</p>
          </div>
        )} */}
      </div>
      <h2>Promoter Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard" passHref>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/events" passHref>
              Events
            </Link>
          </li>
          <li>
            <Link href="/registrations" passHref>
              Registrations
            </Link>
          </li>
          <li>
            <Link href="/transactions" passHref>
              Transactions
            </Link>
          </li>
          <li>
            <Link href="/statistics" passHref>
              Statistics
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
