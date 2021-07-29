import { render, Text } from 'ink';
import React, { FC } from 'react';

export interface result {
    tasks: string[];
}

const Summary:FC<result> = ({tasks}) => {
    let itemList:React.ReactElement<string>[] = [];
    tasks.forEach(task => {
        itemList.push(<Text color='green' key={task}> {task} </Text>)
    })
    return (
      <>
        <Text>Checkup ran the following task(s) successfully:</Text>
        {itemList}
      </>
    );
  };

  
export const summaryComponent = {
    name: 'summary',
    render: (result:result) => {
        render(<Summary tasks={result.tasks}/>);
    },
};
