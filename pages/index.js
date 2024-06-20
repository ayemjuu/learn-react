import React from 'react';
import Todo from '../component/Todo';
import Use from '../component/Use'
import Counter from '../component/Counter'
import Props from '../component/Props'
import UserGreeting from '@/component/Conditional';
import List from '@/component/List';



const HomePage = () => {
  return (
    <>
      <Todo />
      <Todo />

      <Use />
      <Counter />

    <Props name ="Kokodayo" age={"82"}  isStudent={true}/>
    <Props name ="aaaa" age={1}  isStudent={false}/>
    <Props name ="lol " age={90}  isStudent={false}/>
    <Props name ="aasdw " />

    <UserGreeting isLoggedIn ={true} userName="koko"/>
    <List />


    </>
  );
};

export default HomePage;
