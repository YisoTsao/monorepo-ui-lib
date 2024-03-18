import React from 'react';

export function Spin(props: {
  show: boolean;
  overlayBackground?: 'bg-[#00000055]' | undefined;
}) {
  const { show, overlayBackground = 'bg-[#00000055]' } = props;
  return show ? (
    <div
      className={[
        'fixed flex justify-center items-center w-full h-full left-0 top-0 z-[9999] overflow-hidden',
        overlayBackground,
      ].join(' ')}
    >
      <div className="top-2/4 left-2/4">
        <div className="w-10 h-10 rounded-full border-4 border-solid border-[#ffffff33] border-t-[#dbdbdb] animate-spin" />
      </div>
    </div>
  ) : null;
}

export default Spin;
