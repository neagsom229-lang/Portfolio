import { useEffect, useState } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return <div id="preloader"></div>;
}
