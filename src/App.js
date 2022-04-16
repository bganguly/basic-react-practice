import HelloMessage from './components/helloMessage';
import Timer from './components/timer';
import SomeTimerComponent from './components/someTimerComponent';
import TodoApp from './components/todoApp';
import ReverseUserString from './components/reverseUserString';
import HelloMessageUsingHooks from './componentsUsingHooks/helloMessageUsingHooks';
import ReverseUserStringUsingHooks from './componentsUsingHooks/reverseUserStringUsingHooks';
import TimerUsingHooks from './componentsUsingHooks/timerUsingHooks';
import TodoAppUsingHooks from './componentsUsingHooks/todoAppUsingHooks';
import CheckBoxUsingHooks from './componentsUsingHooks/checkBoxUsingHooks';
import GithubApiUsingHooks from './componentsForDataFetch/githubApiUsingHooks';

function App() {
  return (
    // <HelloMessage name="World"/>,
    // <Timer />,
    // <SomeTimerComponent/>,
    // <TodoApp/>,
    // <ReverseUserString textAlign='center'/>,
    // <HelloMessageUsingHooks name="World"/>,
    // <ReverseUserStringUsingHooks textAlign='center'/>,
    // <TimerUsingHooks/>,
    // <TodoAppUsingHooks/>,
    // <CheckBoxUsingHooks/>,
    <GithubApiUsingHooks/>
    // showing component composition below
    // <>
    //   <HelloMessageUsingHooks name="World"/>
    //   <hr/>
    //   <ReverseUserStringUsingHooks textAlign=''/>
    //   <hr/>
    //   <TimerUsingHooks/>
    //   <hr/>
    //   <TodoAppUsingHooks/>
    //   <hr/>
    //   <CheckBoxUsingHooks/>
    // </>
  )
}

export default App;
