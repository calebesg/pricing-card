import { useState } from 'react';
import './style.css';

export function ToggleButton({ labels, onChange }) {
  const [checked, setChecked] = useState(true);

  const handleUpdateCheck = function (value) {
    setChecked(value);
    onChange(value);
  };

  return (
    <div className="flex items-center gap-6 text-grayish-200 mt-10">
      <span>{labels.left}</span>

      <button
        aria-label={`pricing ${labels.left} / ${labels.right}`}
        className={`c-toggle ${checked ? 'c-toggle--checked' : ''}`}
        onClick={e => handleUpdateCheck(!checked)}
      >
        <span className="w-6 h-6 rounded-full bg-white inline-block"></span>
      </button>

      <span>{labels.right}</span>
    </div>
  );
}
