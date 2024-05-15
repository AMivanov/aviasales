import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as Styles from './App.styles'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { fetchId } from './redux/actions/localActions';

export default function App() {
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(fetchId())
    }, [])
    return (
        <>
            <Styles.GlobalStyles />
                <Header />
                <MainContainer />
        </>
    )
}