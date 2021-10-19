import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ComicsPage, CharsPage, Page404, SingleComicsPage, SingleCharPage, SinglePage} from '../pages';

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <Switch>
                    <Route exact path='/'>
                        <CharsPage/>
                    </Route>
                    <Route exact path='/comics'>
                        <ComicsPage/>
                    </Route>
                    <Route path='/comics/:id'>
                        <SinglePage Component={SingleComicsPage} pageName="comics"/>
                    </Route>
                    <Route path='/character/:id'>
                        <SinglePage Component={SingleCharPage} pageName="char"/>
                    </Route>
                    <Route path='*'>
                        <Page404/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;