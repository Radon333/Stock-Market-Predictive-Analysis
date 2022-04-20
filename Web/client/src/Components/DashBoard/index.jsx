import React from 'react';
import styles from './styles.module.css';

const DashBoard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Dashboard</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default DashBoard;
