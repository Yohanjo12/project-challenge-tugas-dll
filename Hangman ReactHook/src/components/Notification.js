import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Kamu Sudah Memasukkan Kata Ini</p>
    </div>
  )
}

export default Notification