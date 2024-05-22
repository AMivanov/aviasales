import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CheckboxProps } from 'antd';

import { setCheckedList } from '../../redux/actions/localActions';

import * as Constants from './TransfersFilter.constants';

export const handleCheckboxChanges = (dispatch: any) => {
    const onChange = (list: CheckboxValueType[]) => {
        dispatch(setCheckedList(list));
    }

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        dispatch(setCheckedList(e.target.checked ? Constants.plainOptions : []))
    }

    return { onChange, onCheckAllChange }
}