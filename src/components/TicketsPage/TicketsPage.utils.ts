import { RadioChangeEvent } from 'antd';

import * as ticketsActions from '../../redux/actions/localActions';

export const handleRadioChangeFunc = (dispatch: any) => (e: RadioChangeEvent) => {
    dispatch(ticketsActions.setSelectedOption(e.target.value))
}