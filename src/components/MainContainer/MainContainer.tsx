import TicketsFilter from '../TicketsFilter';
import TransfersFilter from '../TransfersFilter';

import * as Styles from './MainContainer.styles';

export default function MainContainer () {
    return (
        <Styles.Main>
            <TransfersFilter />
            <TicketsFilter />
        </Styles.Main>
    )
}