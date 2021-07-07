import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import PCBoardList from './PCBoardList';
import PCCreateBoard from './PCCreateBoard';
import PCBoardView from './PCBoardView';
import PCUpdateBoard from './PCUpdateBoard';
import PCMain from './PCMain';


const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <switch>
                        <Route exact path = "/board" component={PCBoardList}/>
                        <Route path = "/createboard" component={PCCreateBoard}/>
                        <Route path = "/board/:bid" component={PCBoardView}></Route>
                        <Route path = "/edit-board" component={PCUpdateBoard}></Route>
                        <Route exact path="/" component={PCMain}/>
                    </switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;