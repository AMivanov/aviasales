import * as Styles from './App.styles'
import Header from './components/Header';
import MainContainer from './components/MainContainer';

export default function App() {
    return (
        <>
            <Styles.GlobalStyles />
                <Header />
                <MainContainer />
        </>
    )
}