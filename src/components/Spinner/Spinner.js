import React from 'react';
import Loader from 'react-loader-spinner';
import './Spinner.scss';

export default function Spinner() {
  return (
    <div className="Spinner-box">
      <Loader className="Spinner" type="TailSpin" color="#21ebff" height={60} width={60} />
    </div>
  );
}
