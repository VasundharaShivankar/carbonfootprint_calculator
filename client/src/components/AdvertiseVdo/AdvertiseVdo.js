import React from 'react';

export default function AdvertiseVdo() {
  return (
    <div className='my-5 mb-1'>
      <section >
        <div className="" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
        <video  style={{height:'800px',width: '100%',maxWidth: '1500px', objectFit: 'cover'}} controls autoPlay muted>
  <source src="https://cdn.pixabay.com/video/2017/11/10/12876-242487530_large.mp4" type="video/mp4"/>
</video>

        </div>
        
      </section>
    </div>
  );
}
