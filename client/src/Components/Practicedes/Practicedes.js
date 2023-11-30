import React, { useEffect } from 'react';

const Practicedes = () => {
  useEffect(() => {
    // Load JDoodle script dynamically after the component mounts
    const script = document.createElement('script');
    script.src = 'https://www.jdoodle.com/plugin/v0/46b5d9e1f6d8a90c9badc8a725148a81/aaa198322861fc19709659d3858e62a2';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  return (
    <div>
      <h1>nk.,,,,,,,,,,,,,,,,,,,.kmmmmmmmmmmmmmmmmmmm
      ,
      ,.mmmmmmmmmmkmmkm,,,,,,,kkkkkkkkkkkkkkkkkk,,,,,,,,,,;lllllllllll
      lllmmmmmmmmmmmmmmmmmmmmmmmmmmmmmjjjjjjjjjjjjjjjjjjjjjjjjjj
      jjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
      kkkkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
      jllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      lllllllllllllllllllllllllllllllllkkkkkkkkkkkkkkkkkkkkkkkkkkkk
      kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllll
      llllllllllllllllllllllllllllllllllllllllllllll;;;;;;;;;;;;;;;
      
      ;;mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkkkkkkkkkkkkkkk
      kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkmmmmmmmmmmmmmmmmkmmkmkmkmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmlkkkkkkkkkkkkkkkkks</h1>
      {/* ... (rest of your content) ... */}
      <div data-pym-src="https://www.jdoodle.com/embed/v0/2IhG?stdin=1&arg=0"></div>
    </div>
  );
};

export default Practicedes;
