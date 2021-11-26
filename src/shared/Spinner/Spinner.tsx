import React, { FC } from 'react';
import './Spinner.scss';

interface SpinnerProps {
  size: string;
}

const Spinner: FC<SpinnerProps> = ({ size }) => (
  <div id="spinner" style={{ width: size, height: size }}>
    <div className="wheel">
      <div className="roller center" />
      <div className="roller top" />
      <div className="roller left" />
      <div className="roller right" />
      <div className="pipe top" />
      <div className="pipe left" />
      <div className="pipe right" />
    </div>
  </div>
);

export default Spinner;
