import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import BoardList from './BoardList';
import CreateBoard from './CreateBoard';
import BoardView from './BoardView';
import UpdateBoard from './UpdateBoard';
import Main from './Main';


const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <switch>
                        <Route exact path="/" component={Main}/>
                        <Route path = "/createboard" component={CreateBoard}/>
                        <Route path = "/board/:bid" component={BoardView}></Route>
                        <Route path = "/edit-board" component={UpdateBoard}></Route>
                        <Route exact path = "/board" component={BoardList}/>
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