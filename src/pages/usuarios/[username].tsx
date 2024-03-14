import { useRouter } from 'next/router';
import { useState } from 'react';

const Username = () => {
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  return (
    <h1
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      username: {router.query.username} <br />
      Counting: {counter}
    </h1>
  );
};

export default Username;
