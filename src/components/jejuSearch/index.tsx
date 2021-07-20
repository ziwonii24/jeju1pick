import React, { useEffect } from 'react';

import useJejuSearchReducer from 'src/hooks/useJejuSearchReducer';

const JejuSearch: React.FC = () => {
  const {
    parameter,
    itemList,
    error,
    loading,
    clearItemParam,
    changeItemParam,
    changePage
  } = useJejuSearchReducer();

  useEffect(() => {
    console.log('처음에 부른다~');
    changeItemParam(parameter);
  }, []);

  return (
    <div>
      {itemList.map((item) => (
        <div key={item.cententsid}>{item.title}</div>
      ))}
    </div>
  );
};

export default JejuSearch;
